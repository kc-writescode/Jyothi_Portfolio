import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WorkHistory {
  year: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

const Timeline: React.FC = () => {
  const experiences: WorkHistory[] = [
    {
      year: '2025',
      role: 'Software Engineer (AI Applications)',
      company: 'APFM',
      location: 'USA (Feb 2025 - Present)',
      details: [
        'Developed and deployed AI-powered product recommendation systems for an e-commerce platform using Python, AWS SageMaker, Lambda, and vector databases for personalized shopping experiences.',
        'Built scalable Retrieval-Augmented Generation (RAG) pipelines integrating enterprise product catalogs, customer activity data, and vector search capabilities to improve recommendation relevance.',
        'Designed backend microservices for customer behavior analytics including churn prediction, product affinity analysis, and customer lifetime value tracking, exposing AI insights through REST APIs.',
        'Implemented real-time anomaly detection and validation checks across customer activity and transactional datasets to improve recommendation quality.',
        'Optimized recommendation workflows and backend processing pipelines, contributing to a 25% increase in personalized engagement across online shopping experiences.'
      ]
    },
    {
      year: '2024',
      role: 'Software Engineer (Data & ML Platforms)',
      company: 'PNC Financials',
      location: 'USA (Feb 2024 - Jun 2025)',
      details: [
        'Developed scalable financial data and machine learning pipelines using Python and AWS services including S3, Glue, Lambda, and SageMaker to process investment and enterprise financial datasets.',
        'Built AI-driven forecasting and asset valuation services using XGBoost, LSTM, and ARIMA models to support investment planning, portfolio analysis, and financial risk management.',
        'Designed end-to-end workflows for ingesting and processing balance sheets, cash-flow statements, transactional records, and market feeds to support automated analytics.',
        'Engineered ETL and feature engineering pipelines using SQL, Pandas, and NumPy to standardize financial metrics, improve data quality, and generate reliable forecasting inputs.',
        'Automated Docker-based deployments and CI/CD workflows, reducing model deployment and release cycles by 35%.'
      ]
    },
    {
      year: '2022',
      role: 'Master of Science in Computer Science',
      company: 'University of Missouri',
      location: 'Kansas City, MO (Aug 2022 - Dec 2023)',
      details: [
        'Specialized coursework in Distributed Computing, Cloud Systems, Data Science, and Machine Learning architectures.',
        'Completed major research components in database security protocols and transactional consistency models.'
      ]
    },
    {
      year: '2020',
      role: 'Python Developer',
      company: 'Hexaware',
      location: 'India (Jul 2020 - Jul 2022)',
      details: [
        'Developed AI-driven backend applications and financial software solutions using Python, Django, Flask, and FastAPI for banking, financial reporting, and customer analytics.',
        'Designed and implemented scalable RESTful APIs and microservices architectures to support financial transactions, reporting, and customer management.',
        'Optimized database operations using PostgreSQL, Redis caching, SQLAlchemy, and efficient SQL queries to improve performance for high-volume financial datasets.'
      ]
    }
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('timeline-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress relative to screen position
        const triggerPoint = viewportHeight * 0.7; // enter screen 70% from top
        const totalHeight = rect.height;
        const scrolled = triggerPoint - rect.top;
        
        let progress = scrolled / totalHeight;
        progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h2>Professional Timeline</h2>
          <p>Structured career history detailing roles, companies, and measurable system impacts.</p>
        </div>

        <div id="timeline-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* Background Gray Line */}
          <div
            style={{
              position: 'absolute',
              left: '36px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'var(--border-color)',
              zIndex: 0
            }}
          />

          {/* Glowing Animated Green Progress Line */}
          <div
            style={{
              position: 'absolute',
              left: '36px',
              top: '20px',
              height: `${scrollProgress * 100}%`,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent))',
              boxShadow: '0 0 10px var(--primary-accent-glow)',
              transition: 'height 0.15s ease-out',
              zIndex: 0
            }}
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: '24px',
                alignItems: 'start',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Year tag */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--primary-accent)',
                  background: 'var(--bg-color)',
                  border: '2px solid var(--primary-accent)',
                  padding: '8px 0',
                  borderRadius: '6px',
                  textAlign: 'center',
                  width: '72px',
                  boxShadow: '0 0 10px var(--primary-accent-glow)',
                  zIndex: 2
                }}
              >
                {exp.year}
              </div>

              {/* Details list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {exp.company}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginTop: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exp.role}</span>
                    <span style={{ color: 'var(--text-tertiary)' }}>&bull;</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        position: 'relative',
                        paddingLeft: '14px'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-tertiary)' }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
