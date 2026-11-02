#!/usr/bin/env bash
# Idempotent Cursor Cloud Agent bootstrap. Does not read or require secrets.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export DEBIAN_FRONTEND=noninteractive
export PATH="/usr/local/bin:${PATH}"

log() {
  printf '%s\n' "$*"
}

install_op() {
  if command -v op >/dev/null 2>&1; then
    log "1Password CLI present: $(op --version)"
    return 0
  fi

  log "Installing 1Password CLI"
  sudo apt-get update
  sudo apt-get install -y curl ca-certificates gnupg

  local tmpkey arch
  tmpkey="$(mktemp)"
  curl -fsSL https://downloads.1password.com/linux/keys/1password.asc | gpg --dearmor >"$tmpkey"
  sudo install -m 0644 "$tmpkey" /usr/share/keyrings/1password-archive-keyring.gpg
  rm -f "$tmpkey"

  arch="$(dpkg --print-architecture)"
  echo "deb [arch=${arch} signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/${arch} stable main" |
    sudo tee /etc/apt/sources.list.d/1password.list >/dev/null

  sudo mkdir -p /etc/debsig/policies/AC2D62742012EA22
  curl -fsSL https://downloads.1password.com/linux/debian/debsig/1password.pol |
    sudo tee /etc/debsig/policies/AC2D62742012EA22/1password.pol >/dev/null

  sudo mkdir -p /usr/share/debsig/keyrings/AC2D62742012EA22
  tmpkey="$(mktemp)"
  curl -fsSL https://downloads.1password.com/linux/keys/1password.asc | gpg --dearmor >"$tmpkey"
  sudo install -m 0644 "$tmpkey" /usr/share/debsig/keyrings/AC2D62742012EA22/debsig.gpg
  rm -f "$tmpkey"

  sudo apt-get update
  sudo apt-get install -y 1password-cli
  command -v op >/dev/null 2>&1
  log "Installed 1Password CLI: $(op --version)"
}

node_satisfies() {
  command -v node >/dev/null 2>&1 || return 1
  node -e 'const [maj, min] = process.versions.node.split(".").map(Number); const ok = maj > 22 || (maj === 22 && min >= 12) || (maj === 20 && min >= 19); process.exit(ok ? 0 : 1);'
}

install_node() {
  if node_satisfies; then
    log "Node present: $(node -v) ($(command -v node))"
    return 0
  fi

  log "Installing Node.js 22"
  sudo apt-get update
  sudo apt-get install -y curl ca-certificates xz-utils

  local node_arch node_version tarball url tmp
  case "$(uname -m)" in
    x86_64) node_arch="x64" ;;
    aarch64 | arm64) node_arch="arm64" ;;
    *)
      echo "Unsupported architecture: $(uname -m)" >&2
      exit 1
      ;;
  esac

  # Vite 8 needs Node 20.19+ or 22.12+. Pin a current 22.x build.
  node_version="22.23.4"
  tarball="node-v${node_version}-linux-${node_arch}.tar.xz"
  url="https://nodejs.org/dist/v${node_version}/${tarball}"
  tmp="$(mktemp -d)"
  curl -fsSL "$url" -o "${tmp}/${tarball}"
  sudo tar -xJf "${tmp}/${tarball}" -C /usr/local --strip-components=1
  rm -rf "$tmp"
  hash -r

  if ! node_satisfies; then
    echo "Node.js ${node_version} install did not land on PATH" >&2
    exit 1
  fi
  log "Installed Node.js $(node -v)"
}

install_op
install_node

log "Installing npm dependencies"
npm ci
log "Install complete"
