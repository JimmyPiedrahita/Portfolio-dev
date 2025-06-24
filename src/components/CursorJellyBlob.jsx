import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/CursorJellyBlob.css';

const lerp = (x, y, a) => x * (1 - a) + y * a;

export default function CursorJellyBlob() {
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const delayedMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circles = useRef([]);
  const rafId = useRef();
  const isTouchDevice = 'ontouchstart' in window;

  // Animación principal
  const animate = () => {
    delayedMouse.current = {
      x: lerp(delayedMouse.current.x, mouse.current.x, 0.18),
      y: lerp(delayedMouse.current.y, mouse.current.y, 0.18),
    };
    moveCircles(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    if (circles.current.length < 1) return;
    circles.current.forEach((circle, i) => {
      if (!circle) return;
      // Cada círculo tiene un pequeño retraso para el efecto jelly
      gsap.to(circle, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        scale: 1 - i * 0.08,
        filter: `blur(${i === 0 ? 0 : 8 + i * 6}px)`,
        duration: 0.25 + i * 0.08,
        ease: 'expo.out',
      });
    });
  };

  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={el => (circles.current[i] = el)}
          className={`jelly-blob jelly-blob-${i}`}
        />
      ))}
    </>
  );
} 