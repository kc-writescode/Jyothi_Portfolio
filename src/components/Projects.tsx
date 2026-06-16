import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  metric: string;
  tags: string[];
  link: string;
}

const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: 'AI Recommendation Platform',
      description: 'Personalized product recommendation engine processing user affinities and item attributes in real time.',
      metric: '25% increase in user engagement',
      tags: ['Python', 'AWS SageMaker', 'Lambda', 'Vector DB', 'RAG'],
      link: '#architecture'
    },
    {
      title: 'Financial Forecasting Platform',
      description: 'AI-driven asset valuation engine queryable by investment risk planning simulation tools.',
      metric: '30% improvement in forecast accuracy',
      tags: ['XGBoost', 'LSTM', 'ARIMA', 'Pandas', 'AWS Glue'],
      link: '#architecture'
    },
    {
      title: 'Enterprise RAG System',
      description: 'Context-aware semantic query pipeline retrieving documentation answers from private product catalogs.',
      metric: '99% context retrieval relevance',
      tags: ['LangChain', 'LangGraph', 'PyTorch', 'Hugging Face'],
      link: '#architecture'
    },
    {
      title: 'Real-Time Ingestion Analytics',
      description: 'High-throughput stream processing pipeline capturing transaction records and page activities.',
      metric: '5M+ daily transaction logs processed',
      tags: ['PySpark', 'Airflow', 'Kafka', 'Docker', 'GCP GKE'],
      link: '#architecture'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
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
    <section id="projects" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <h2>Featured Systems</h2>
          <p>SaaS-style product feature highlights summarizing production architectures and measurable metrics.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="projects-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'none',
              }}
            >
              {/* Title & Description */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginTop: '8px' }}>
                  {project.description}
                </p>
              </div>

              {/* Highlight Metric */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--secondary-accent)',
                  borderLeft: '2px solid var(--secondary-accent)',
                  paddingLeft: '12px',
                  margin: '4px 0'
                }}
              >
                {project.metric}
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Architecture Action */}
              <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                <a
                  href={project.link}
                  onClick={(e) => handleScrollToSection(e, project.link)}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--primary-accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  View System Architecture
                  <ArrowRight size={14} />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
