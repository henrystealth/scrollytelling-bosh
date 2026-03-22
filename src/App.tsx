import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollytelling from './components/Scrollytelling';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="w-full bg-gray-950 text-white overflow-x-hidden">
      <Scrollytelling />
    </div>
  );
}

export default App;
