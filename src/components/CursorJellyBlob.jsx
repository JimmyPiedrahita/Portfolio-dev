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
      x: lerp(delayedMouse.current.x, mouse.current.x, 0.28),
      y: lerp(delayedMouse.current.y, mouse.current.y, 0.28),
    };
    moveCircles(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    if (circles.current.length < 1) return;
    circles.current.forEach((circle, i) => {
      if (!circle) return;
      // Solo animamos la posición aquí, no la escala - para no interferir con la animación de click
      gsap.to(circle, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        // No modificamos la escala aquí para que no interfiera con la animación de click
        filter: `blur(${i === 0 ? 0 : 0}px)`, // Eliminado el desenfoque
        duration: 0.15 + i * 0.05, // Más rápido, pero mantiene la suavidad
        ease: 'expo.out',
        overwrite: 'position' // Sólo sobreescribe las propiedades de posición, no la escala
      });
    });
  };

  // Función para animar el click
  const handleClick = () => {
    if (circles.current.length < 1) return;
    
    // Animación de "click" - Primero agranda
    gsap.to(circles.current[0], {
      scale: 1.5, // Se agranda un 50% más
      duration: 0.15,
      ease: 'power2.out',
      onComplete: () => {
        // Luego vuelve a su tamaño normal
        gsap.to(circles.current[0], {
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
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          ref={el => (circles.current[i] = el)}
          className={`jelly-blob jelly-blob-${i}`}
        />
      ))}
    </>
  );
} 