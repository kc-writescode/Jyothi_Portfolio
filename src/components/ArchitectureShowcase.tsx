import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, TrendingUp, Sparkles } from 'lucide-react';

interface ShowcaseSystem {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  nodes: {
    label: string;
    description: string;
    tech: string;
  }[];
}

const ArchitectureShowcase: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState('recommendation');

  const systems: ShowcaseSystem[] = [
    {
      id: 'recommendation',
      name: 'AI Recommendation Engine',
      subtitle: 'Real-time personalization and product search catalog mapping.',
      icon: <Sparkles size={18} />,
      nodes: [
        { label: 'Customer Activity Data', description: 'Clicks, impressions, and transaction records captured in real time.', tech: 'Kafka' },
        { label: 'Embedding Model', description: 'Converts catalog text and user clickstreams into dense vector representations.', tech: 'PyTorch / SageMaker' },
        { label: 'Vector Database', description: 'Executes rapid similarity searches matching item coordinates.', tech: 'OpenSearch / Pinecone' },
        { label: 'RAG Alignment Layer', description: 'Re-ranks candidates against business metrics and catalog filters.', tech: 'FastAPI' },
        { label: 'Recommendation API', description: 'Delivers personalized products to frontend layers with sub-100ms response.', tech: 'AWS API Gateway' }
      ]
    },
    {
      id: 'forecasting',
      name: 'Financial Forecasting Platform',
      subtitle: 'Predictive valuation system mapping enterprise investment risks.',
      icon: <TrendingUp size={18} />,
      nodes: [
        { label: 'Financial Feeds', description: 'Balance sheets, market feeds, and historical logs ingested.', tech: 'AWS S3' },
        { label: 'Feature Engineering', description: 'Standardizes metrics, fills null values, and maps training factors.', tech: 'Pandas / Glue' },
        { label: 'ML Predictor Engine', description: 'Generates predictions using ensemble models and time-series layers.', tech: 'XGBoost / LSTM' },
        { label: 'Data Model Storage', description: 'Caches historical forecasts and predicted trends.', tech: 'Cassandra / PostgreSQL' },
        { label: 'Scenario Simulator API', description: 'Serves queryable valuation metrics to active risk planning tools.', tech: 'Docker Microservices' }
      ]
    },
    {
      id: 'rag',
      name: 'Enterprise RAG Pipeline',
      subtitle: 'Document ingestion and semantic agent catalog question-answering.',
      icon: <Cpu size={18} />,
      nodes: [
        { label: 'Product Manual PDFs', description: 'Unstructured technical document catalog files.', tech: 'S3 Ingestion' },
        { label: 'Document Parser', description: 'Extracts tables, sections, and metadata structures.', tech: 'LangChain OCR' },
        { label: 'Vector Index Store', description: 'Indexes chunks into scalable search coordinates.', tech: 'PGVector / Redis' },
        { label: 'Agent Coordinator', description: 'Orchestrates multi-step catalog reasoning loops.', tech: 'LangGraph' },
        { label: 'Semantic QA API', description: 'Resolves technical inquiries with high context relevance.', tech: 'FastAPI / EKS' }
      ]
    }
  ];

  const systemIds = ['recommendation', 'forecasting', 'rag'];

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.35; // 35% from top of screen
      let currentActive = 'recommendation';

      for (const id of systemIds) {
        const el = document.getElementById(`showcase-${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = id;
          }
        }
      }
      setActiveSystemId(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setActiveSystemId(id);
    const targetEl = document.getElementById(`showcase-${id}`);
    if (targetEl) {
      const offset = 100;
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
    <section id="architecture" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>System Architecture Showcase</h2>
          <p>Explore production-grade workflows, mapping data ingestion, model processing, and deployment layers.</p>
        </div>

        <div className="showcase-grid" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Selectors Column (Tabs) - Pinned/Sticky on desktop */}
          <div className="showcase-selectors">
            {systems.map((system) => {
              const isActive = system.id === activeSystemId;
              return (
                <button
                  key={system.id}
                  onClick={(e) => handleTabClick(e, system.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    padding: '18px 24px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-accent)' : 'var(--border-color)',
                    background: isActive ? 'var(--primary-accent-glow)' : 'var(--card-bg)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: isActive ? 'var(--primary-accent)' : 'var(--text-primary)', fontWeight: 650 }}>
                    {system.icon}
                    <span style={{ fontSize: '0.95rem' }}>{system.name}</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.3 }} className="desktop-only-text">
                    {system.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Flows Display Column - Scrollable Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {systems.map((system) => (
              <div
                key={system.id}
                id={`showcase-${system.id}`}
                className="glass-panel"
                style={{
                  padding: '36px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  boxShadow: 'none',
                  scrollMarginTop: '100px'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {system.name} Data Flow
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  {system.subtitle}
                </p>

                {/* Vertical flow stepper */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Vertical connecting line */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '20px',
                      bottom: '20px',
                      width: '2px',
                      background: 'linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent))',
                      opacity: 0.2
                    }} 
                  />

                  {system.nodes.map((node, nodeIdx) => {
                    return (
                      <div
                        key={`${system.id}-${nodeIdx}`}
                        style={{
                          display: 'flex',
                          gap: '24px',
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        {/* Step Circle Badge */}
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--surface-color)',
                            border: '2px solid var(--primary-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            boxShadow: '0 0 12px var(--primary-accent-glow)'
                          }}
                        >
                          {nodeIdx + 1}
                        </div>

                        {/* Content Card */}
                        <motion.div
                          whileHover={{ x: 6, borderColor: 'var(--primary-accent)' }}
                          className="flow-node-card"
                          style={{
                            flex: 1,
                            background: 'var(--surface-color)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '8px',
                            padding: '20px',
                            transition: 'border-color 0.2s ease',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '16px'
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                              {node.label}
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.45 }}>
                              {node.description}
                            </p>
                          </div>

                          {/* Tech badge */}
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.68rem',
                              color: 'var(--primary-accent)',
                              background: 'var(--primary-accent-glow)',
                              border: '1px solid var(--primary-accent-border)',
                              padding: '4px 10px',
                              borderRadius: '4px',
                              whiteSpace: 'nowrap',
                              marginTop: '2px'
                            }}
                          >
                            {node.tech}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .showcase-selectors {
          position: sticky;
          top: 100px;
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }
        .flow-node-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        @media (max-width: 992px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .showcase-selectors {
            position: sticky !important;
            top: 57px; /* sticky under navbar */
            flex-direction: row !important;
            overflow-x: auto;
            padding: 8px 0;
            background: var(--surface-color);
            border-bottom: 1px solid var(--border-color);
            width: 100%;
          }
          .showcase-selectors button {
            flex-shrink: 0;
            width: auto !important;
            padding: 12px 18px !important;
          }
          .desktop-only-text {
            display: none !important;
          }
        }
        @media (max-width: 576px) {
          .flow-node-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .flow-node-card > div:last-child {
            align-self: flex-start !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ArchitectureShowcase;
