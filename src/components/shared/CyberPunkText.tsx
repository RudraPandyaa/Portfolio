"use client";

import React, { useEffect, useRef, useState } from "react";

const CyberpunkText = ({ text = "CYBER 2024" }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      triggerGlitch();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerGlitch = () => {
    const elements = document.querySelectorAll(".glitch-text");
    elements.forEach((el) => {
      el.classList.add("glitch");
      setTimeout(() => el.classList.remove("glitch"), 200);
    });
  };

  const handleMouseMove = (e: any) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black overflow-hidden flex items-center justify-center p-4"
      onMouseMove={handleMouseMove}
    >
      <div className="relative">
        {/* Particle background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main text container */}
        <div className="relative flex flex-wrap justify-center perspective-1000">
          {text.split("").map((char, index) => (
            <div
              key={index}
              className="relative inline-block transform-style-3d"
              style={{
                transform: isVisible
                  ? `rotateX(${(mousePosition.y - 0.5) * 20}deg) 
                     rotateY(${(mousePosition.x - 0.5) * 20}deg)`
                  : "rotateX(90deg)",
                transition: `transform 0.5s ${index * 0.1}s`,
              }}
            >
              {/* Main character */}
              <span
                className={`
                  glitch-text
                  inline-block text-6xl md:text-8xl lg:text-9xl font-bold
                  ${/[0-9]/.test(char) ? "text-blue-500" : "text-white"}
                  transition-all duration-300
                  hover:text-cyan-400 hover:scale-110
                  animate-float
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  textShadow: "0 0 10px currentColor",
                }}
              >
                {char === " " ? "\u00A0" : char}

                {/* Glitch layers */}
                <span className="glitch-layer" aria-hidden="true">
                  {char === " " ? "\u00A0" : char}
                </span>
                <span className="glitch-layer" aria-hidden="true">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Scanning line effect */}
        <div className="absolute left-0 w-full h-1 bg-blue-500/30 animate-scan" />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes scan {
          0% {
            top: -10%;
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translate(
                ${Math.random() > 0.5 ? "" : "-"}${Math.random() * 100}px,
                ${Math.random() > 0.5 ? "" : "-"}${Math.random() * 100}px
              )
              scale(2);
            opacity: 1;
          }
          100% {
            transform: translate(
                ${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px,
                ${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px
              )
              scale(0);
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        .animate-particle {
          animation: particle 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .glitch-text {
          position: relative;
        }
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
        .glitch .glitch-layer:nth-child(1) {
          transform: translateX(-5px);
          color: #ff0000;
          opacity: 0.75;
          animation: glitch-anim 0.2s infinite;
        }
        .glitch .glitch-layer:nth-child(2) {
          transform: translateX(5px);
          color: #00ff00;
          opacity: 0.75;
          animation: glitch-anim2 0.2s infinite;
        }
        @keyframes glitch-anim {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-2px);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(5px);
          }
          50% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(2px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CyberpunkText;
