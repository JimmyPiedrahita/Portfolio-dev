import { useRef, useEffect, memo } from 'react';
import gsap from 'gsap';
import '../styles/CursorJellyBlob.css';

const lerp = (x, y, a) => x * (1 - a) + y * a;

function CursorJellyBlob() {
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const delayedMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorDot = useRef(null);
  const cursorCircle = useRef(null);
  const rafId = useRef();
  const isTouchDevice = 'ontouchstart' in window;

  // Refs for quickSetters
  const xSetDot = useRef(null);
  const ySetDot = useRef(null);
  const xSetCircle = useRef(null);
  const ySetCircle = useRef(null);

  // Animation following the cursor with a delay
  const animate = () => {
    // The dot follows the cursor directly
    if (xSetDot.current && ySetDot.current) {
      xSetDot.current(mouse.current.x);
      ySetDot.current(mouse.current.y);
    }

    // The circle follows the cursor
    delayedMouse.current = {
      x: lerp(delayedMouse.current.x, mouse.current.x, 0.15),
      y: lerp(delayedMouse.current.y, mouse.current.y, 0.15),
    };

    if (xSetCircle.current && ySetCircle.current) {
      xSetCircle.current(delayedMouse.current.x);
      ySetCircle.current(delayedMouse.current.y);
    }

    rafId.current = window.requestAnimationFrame(animate);
  };

  // Function to animate the click
  const handleClick = () => {
    if (!cursorCircle.current) return;
    
    gsap.to(cursorCircle.current, {
      scale: 0.8,
      duration: 0.15,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(cursorCircle.current, {
          scale: 1,
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)'
        });
      }
    });
  };

  useEffect(() => {
    if (isTouchDevice) return;

    // Initialize quickSetters
    if (cursorDot.current) {
      gsap.set(cursorDot.current, { xPercent: -50, yPercent: -50 });
      xSetDot.current = gsap.quickSetter(cursorDot.current, "x", "px");
      ySetDot.current = gsap.quickSetter(cursorDot.current, "y", "px");
    }
    if (cursorCircle.current) {
      gsap.set(cursorCircle.current, { xPercent: -50, yPercent: -50 });
      xSetCircle.current = gsap.quickSetter(cursorCircle.current, "x", "px");
      ySetCircle.current = gsap.quickSetter(cursorCircle.current, "y", "px");
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* The central dot follows the cursor exactly */}
      <div ref={cursorDot} className="cursor-dot"></div>

      {/* The outer circle follows the cursor */}
      <div ref={cursorCircle} className="cursor-circle"></div>
    </>
  );
} 

export default memo(CursorJellyBlob); 