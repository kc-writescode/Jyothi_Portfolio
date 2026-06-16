import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero: React.FC = () => {
  const words = [
    'AI Applications',
    'Data & ML Platforms',
    'Scalable Backend Systems',
    'Cloud-Native Architectures',
    'High-Throughput Pipelines'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeTagIndex, setActiveTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setActiveTagIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handlePrintResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.print();
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(selector);
    if (targetEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-color)', background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          {/* Editorial typography */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--secondary-accent)', fontWeight: 600 }}>
              Portfolio &mdash; Executive Summary
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Jyothi P.
            </h1>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                margin: '12px 0 0 0',
              }}
            >
              Building{' '}
              <span style={{ color: 'var(--primary-accent)', display: 'inline-block' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{ display: 'inline-block' }}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              that scale.
            </div>
          </motion.div>

          {/* Sub-info details */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)'
            }}
          >
            <span className={`animated-tag ${activeTagIndex === 0 ? 'active' : ''}`}>
              Software Engineer
            </span>
            <span className={`animated-tag ${activeTagIndex === 1 ? 'active' : ''}`}>
              4+ Years Experience
            </span>
            <span className={`animated-tag ${activeTagIndex === 2 ? 'active' : ''}`}>
              AWS & Azure Certified
            </span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="btn btn-primary" style={{ padding: '12px 24px' }}>
              Let's Connect
              <ArrowRight size={16} />
            </a>
            <a href="#projects" onClick={(e) => handleScrollToSection(e, '#projects')} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
              View Case Studies
            </a>
            <a href="#" onClick={handlePrintResume} className="btn btn-secondary" style={{ padding: '12px 24px', gap: '8px' }}>
              <FileText size={16} />
              Print / Save Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jyothi-p-3274372ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '12px 24px', gap: '8px' }}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
