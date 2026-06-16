import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGlow: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#0B0D12',
      }}
    >
      {/* Animated subtle grid */}
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.8,
          maskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 60%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
