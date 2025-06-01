"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text = "Animated Text" }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />

        {/* Main text container */}
        <div className="relative">
          {/* Split text into individual characters for animation */}
          <div className="text-6xl md:text-8xl font-bold tracking-wider uppercase">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-float"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative">
                  {/* Main visible text */}
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {char === " " ? "\u00A0" : char}
                  </span>

                  {/* Text outline effect */}
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-sm">
                    {char === " " ? "\u00A0" : char}
                  </span>

                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-md">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
