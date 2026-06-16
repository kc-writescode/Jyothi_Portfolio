import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Terminal, Layers, Server, Settings } from 'lucide-react';

interface SkillGroup {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: 'AI & Machine Learning Engineering',
      items: ['LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers (BERT/GPT)', 'SageMaker', 'Vector DB Search'],
    },
    {
      category: 'Cloud Platforms & Infrastructure',
      items: ['AWS (ECS, EKS, Lambda, S3, Glue)', 'Azure (AKS, App Service, DevOps)', 'GCP (GKE)', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)'],
    },
    {
      category: 'Data Platform Architecture',
      items: ['PySpark', 'Apache Airflow', 'Kafka', 'Databricks', 'Snowflake', 'ETL/ELT Pipelines', 'PostgreSQL', 'Cassandra', 'MongoDB', 'Redis'],
    },
    {
      category: 'Languages & Core Backend',
      items: ['Python', 'SQL (Postgres/MySQL)', 'Shell Scripting', 'RESTful API Systems', 'Microservices', 'OAuth2 / SSO Security'],
    },
  ];

  const getSkillIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('langchain') || n.includes('langgraph') || n.includes('pytorch') || n.includes('tensorflow') || n.includes('hugging face') || n.includes('sagemaker')) {
      return <Cpu size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('aws') || n.includes('azure') || n.includes('gcp') || n.includes('cloud')) {
      return <Cloud size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('spark') || n.includes('airflow') || n.includes('databricks') || n.includes('etl') || n.includes('pipeline') || n.includes('kafka')) {
      return <Layers size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('postgres') || n.includes('sql') || n.includes('database') || n.includes('snowflake') || n.includes('cassandra') || n.includes('mongodb') || n.includes('redis') || n.includes('vector db')) {
      return <Database size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('python') || n.includes('shell') || n.includes('scripting')) {
      return <Terminal size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('api') || n.includes('microservices') || n.includes('oauth2') || n.includes('security') || n.includes('sso')) {
      return <Server size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    if (n.includes('terraform') || n.includes('docker') || n.includes('kubernetes') || n.includes('ci/cd')) {
      return <Settings size={13} style={{ color: 'var(--primary-accent)' }} />;
    }
    return <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-accent)' }} />;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <h2>Technical Architecture Capabilities</h2>
          <p>Structured capabilities organized by architectural layers, featuring custom-matched metadata tags.</p>
        </div>

        <div className="skills-editorial-grid">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={containerVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 650, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', margin: 0 }}>
                {group.category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -2,
                      borderColor: 'var(--primary-accent)', 
                      boxShadow: '0 2px 8px var(--primary-accent-glow)',
                      color: 'var(--text-primary)'
                    }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      background: 'var(--surface-color)',
                      border: '1px solid var(--border-color)',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, transform 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      userSelect: 'none'
                    }}
                  >
                    {getSkillIcon(item)}
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-editorial-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        @media (max-width: 1024px) {
          .skills-editorial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 576px) {
          .skills-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
