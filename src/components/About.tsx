import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, GraduationCap, FileText } from 'lucide-react';

interface CounterProps {
  value: string;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  // Extract the number
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  
  // Parse format
  const hasPercent = value.includes('%');
  const hasPlusSuffix = value.endsWith('+');
  const hasPlusPrefix = value.startsWith('+');

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {hasPlusPrefix && '+'}
      {count}
      {hasPercent && '%'}
      {hasPlusSuffix && '+'}
    </span>
  );
};

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Deployment Efficiency', value: '+30%' },
    { label: 'Personalized User Engagement', value: '+25%' },
    { label: 'API Performance Speedup', value: '+40%' },
  ];

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="about" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <h2>Professional Profile</h2>
          <p>Fusing engineering discipline with AI innovation to build robust, scalable platforms.</p>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'start' }}>
          
          {/* Narrative description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Engineering Scalable Systems for Enterprise Decision-Making
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              I am a Software Engineer based in Overland Park, KS, specializing in developing AI-driven services, scalable cloud microservices, and high-throughput data processing workflows. Throughout my career across e-commerce and financial domains, I've focused on moving machine learning models from notebook prototypes into production-grade, highly available deployments.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              With a Master's degree in Computer Science from the University of Missouri, Kansas City, I bring a solid theoretical foundation in data modelling, distributed systems, and security, complemented by practical experience deploying onto AWS, Azure, and GCP.
            </p>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '10px' }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    textAlign: 'left',
                    background: 'var(--surface-color)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.85rem',
                      fontWeight: 700,
                      color: 'var(--primary-accent)',
                    }}
                  >
                    <Counter value={stat.value} />
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '6px', fontWeight: 500, lineHeight: 1.3 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              Summary & Education
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Education</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>M.S. in Computer Science</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>University of Missouri, Kansas City (Dec 2023)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                  <Briefcase size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Current Role</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Software Engineer (AI Applications)</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>APFM, USA</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Cloud Certifications</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AWS Certified Developer - Associate</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Microsoft Certified: Azure Developer</div>
                </div>
              </div>

            </div>

            <button
              onClick={handlePrintResume}
              className="btn btn-secondary"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                padding: '10px',
                marginTop: '10px',
              }}
            >
              <FileText size={16} />
              Print / Save Resume
            </button>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
