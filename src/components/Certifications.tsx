import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  id: string;
  link: string;
}

const Certifications: React.FC = () => {
  const certificationsList: Certification[] = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued 2024',
      icon: <Award size={20} style={{ color: 'var(--text-secondary)' }} />,
      id: 'AWS-DEV-ASSOC-XXXX',
      link: 'https://aws.amazon.com/verification'
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Issued 2024',
      icon: <Award size={20} style={{ color: 'var(--text-secondary)' }} />,
      id: 'MS-AZ-DEV-XXXX',
      link: 'https://learn.microsoft.com/en-us/credentials'
    }
  ];

  return (
    <section id="certifications" style={{ background: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Certifications</h2>
          <p>Cloud architecture and developer credentials verified by platform providers.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}
          className="certs-grid"
        >
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                boxShadow: 'none',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '6px',
                  background: 'var(--surface-color)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {cert.icon}
              </div>

              {/* Info Block */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 650,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3
                  }}
                >
                  {cert.name}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{cert.issuer}</span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-tertiary)'
                    }}
                  >
                    {cert.date}
                  </span>
                  <span style={{ color: 'var(--border-color)' }}>|</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--primary-accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 500
                    }}
                  >
                    <ShieldCheck size={12} />
                    Verify
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
