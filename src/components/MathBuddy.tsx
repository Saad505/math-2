import React from 'react';
import { motion } from 'motion/react';

type BuddyState = 'idle' | 'happy' | 'thinking' | 'waving' | 'celebrating' | 'excited';

interface MathBuddyProps {
  state?: BuddyState;
  className?: string;
  size?: number;
}

export function MathBuddy({ state = 'idle', className = '', size = 120 }: MathBuddyProps) {
  const variants = {
    idle: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    waving: {
      rotate: [0, 8, -8, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    },
    happy: {
      scale: [1, 1.15, 1],
      y: [0, -15, 0],
      transition: {
        duration: 0.4,
        repeat: 2
      }
    },
    thinking: {
      y: [0, -5, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    celebrating: {
      y: [0, -40, 0, -20, 0],
      rotate: [0, 10, -10, 10, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    excited: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.2,
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={state}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background Glow */}
      <motion.div 
        animate={state === 'celebrating' ? { 
          scale: [1, 2, 1], 
          opacity: [0.2, 0.6, 0.2],
          backgroundColor: ["#3B82F6", "#FBBF24", "#3B82F6"]
        } : { 
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: state === 'celebrating' ? 1 : 4, repeat: Infinity }}
        className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full" 
      />
      
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <rect x="25" y="30" width="50" height="40" rx="15" fill="#3B82F6" stroke="white" strokeWidth="3" />
        
        {/* Eyes */}
        <motion.g
          animate={state === 'thinking' ? { x: [0, 2, -2, 0] } : state === 'celebrating' ? { y: [-2, 2, -2] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {state === 'celebrating' ? (
            <>
              {/* Star Eyes for celebration */}
              <text x="32" y="55" fontSize="14" fill="white">⭐</text>
              <text x="52" y="55" fontSize="14" fill="white">⭐</text>
            </>
          ) : (
            <>
              <rect x="35" y="45" width="10" height="10" rx="5" fill="white" />
              <rect x="55" y="45" width="10" height="10" rx="5" fill="white" />
              <circle cx={state === 'thinking' ? 42 : 40} cy="50" r="2" fill="#1E40AF" />
              <circle cx={state === 'thinking' ? 62 : 60} cy="50" r="2" fill="#1E40AF" />
            </>
          )}
        </motion.g>
        
        {/* Antenna */}
        <motion.g animate={state === 'celebrating' ? { rotate: [0, 20, -20, 0] } : {}}>
          <rect x="48" y="15" width="4" height="15" fill="white" rx="2" />
          <circle cx="50" cy="12" r="6" fill="#FBBF24" stroke="white" strokeWidth="2" />
        </motion.g>
        
        {/* Mouth */}
        <motion.path
          d={state === 'happy' || state === 'celebrating' || state === 'excited' ? "M 35 60 Q 50 75 65 60" : state === 'thinking' ? "M 42 62 Q 50 64 58 62" : "M 40 62 Q 50 62 60 62"}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill={state === 'celebrating' ? "white" : "none"}
        />
        
        {/* Arms */}
        <motion.path
          animate={state === 'waving' ? { rotate: [0, -30, 0] } : state === 'celebrating' ? { rotate: [0, -60, 0] } : {}}
          style={{ originX: '25px', originY: '50px' }}
          d="M 25 50 L 10 40"
          stroke="#3B82F6"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <motion.path 
          animate={state === 'celebrating' ? { rotate: [0, 60, 0] } : {}}
          style={{ originX: '75px', originY: '50px' }}
          d="M 75 50 L 90 40" 
          stroke="#3B82F6" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
      </svg>
      
      {/* Interaction Indicator for Central Help */}
      {state === 'thinking' && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-12 bg-white px-4 py-2 rounded-2xl shadow-xl border-2 border-yellow-200"
        >
          <p className="text-yellow-600 font-black text-xs whitespace-nowrap">Tap for a Hint! ✨</p>
        </motion.div>
      )}
    </motion.div>
  );
}
