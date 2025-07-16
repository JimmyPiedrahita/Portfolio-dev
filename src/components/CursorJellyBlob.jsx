import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/CursorJellyBlob.css';

const lerp = (x, y, a) => x * (1 - a) + y * a;

export default function CursorJellyBlob() {
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const delayedMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorDot = useRef(null);
  const cursorCircle = useRef(null);
  const rafId = useRef();
  const isTouchDevice = 'ontouchstart' in window;

  // Animación principal
  const animate = () => {
    // El punto sigue directamente al cursor (sin suavizado)
    if (cursorDot.current) {
      gsap.set(cursorDot.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        xPercent: -50,
        yPercent: -50
      });
    }

    // El círculo sigue al cursor con suavizado (pero más rápido)
    delayedMouse.current = {
      x: lerp(delayedMouse.current.x, mouse.current.x, 0.25), // Menos suave para seguir más rápido
      y: lerp(delayedMouse.current.y, mouse.current.y, 0.25), // Menos suave para seguir más rápido
    };

    if (cursorCircle.current) {
      gsap.to(cursorCircle.current, {
        x: delayedMouse.current.x,
        y: delayedMouse.current.y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.15, // Duración más corta para respuesta más rápida
        ease: 'expo.out',
        overwrite: 'position'
      });
    }

    rafId.current = window.requestAnimationFrame(animate);
  };

  // Función para animar el click
  const handleClick = () => {
    if (!cursorCircle.current) return;
    
    // Animación de "click" - Primero se encoge
    gsap.to(cursorCircle.current, {
      scale: 0.8,
      duration: 0.15,
      ease: 'power2.out',
      onComplete: () => {
        // Luego vuelve a su tamaño normal con efecto elástico
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
    // eslint-disable-next-line
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Punto central que sigue exactamente al cursor */}
      <div ref={cursorDot} className="cursor-dot"></div>
      
      {/* Círculo exterior que sigue al cursor con suavizado */}
      <div ref={cursorCircle} className="cursor-circle"></div>
    </>
  );
} 