import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
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

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Get in touch for employment opportunities, technical discussions, or consulting engagements.</p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '50px', alignItems: 'start' }}>
          
          {/* Info Panels */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Let's discuss how we can work together.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Whether you are hiring for full-time roles, looking to build an ML model workflow, or optimizing backend system pipelines, feel free to drop a message.
            </p>

            {/* Direct Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
              
              <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
                <div style={{ color: 'var(--text-secondary)' }}><Mail size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>EMAIL</div>
                  <a href="mailto:jyop2001@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    jyop2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
                <div style={{ color: 'var(--text-secondary)' }}><Phone size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>PHONE</div>
                  <a href="tel:+17085055620" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    +1 (708) 505-5620
                  </a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
                <div style={{ color: 'var(--text-secondary)' }}><MapPin size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    Overland Park, KS 66213
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <a href="https://www.linkedin.com/in/jyothi-p-3274372ab/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 16px', gap: '8px', fontSize: '0.85rem' }}>
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 16px', gap: '8px', fontSize: '0.85rem' }}>
                <GithubIcon size={14} />
                GitHub
              </a>
            </div>

          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            style={{ padding: '36px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', boxShadow: 'none' }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ color: 'var(--secondary-accent)' }}>
                  <CheckCircle size={44} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '10px 14px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'vertical',
                    }}
                    placeholder="Describe your project, role details, or inquiry..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div style={{ color: '#EF4444', fontSize: '0.8rem', fontWeight: 500 }}>
                    Please fill out all fields.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px', marginTop: '4px', fontSize: '0.9rem' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <style>{`
        input:focus, textarea:focus {
          border-color: var(--primary-accent) !important;
          box-shadow: 0 0 0 1px var(--primary-accent) !important;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
