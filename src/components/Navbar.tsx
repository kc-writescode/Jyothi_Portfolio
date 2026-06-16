import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, User, Cpu, Briefcase, Layers, Award } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
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

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', icon: <User size={13} /> },
  { label: 'Skills', href: '#skills', icon: <Cpu size={13} /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase size={13} /> },
  { label: 'Projects', href: '#projects', icon: <Layers size={13} /> },
  { label: 'Certifications', href: '#certifications', icon: <Award size={13} /> },
  { label: 'Contact', href: '#contact', icon: <Mail size={13} /> },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      sections.push('hero');

      let currentSection = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isScrolled ? '12px 0' : '20px 0',
        background: isScrolled ? 'rgba(11, 13, 18, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'var(--transition-subtle)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span style={{ color: 'var(--primary-accent)', fontFamily: 'var(--font-mono)' }}>&gt;_</span>
          Jyothi P.
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '24px' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--primary-accent)' : 'var(--text-secondary)',
                      position: 'relative',
                      padding: '4px 0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {item.icon}
                    {item.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'var(--primary-accent)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '1px solid var(--border-color)', paddingLeft: '20px' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="social-link" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jyothi-p-3274372ab/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="social-link" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:jyop2001@gmail.com" style={{ color: 'var(--text-secondary)' }} className="social-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            padding: '4px',
            border: 'none',
            display: 'none',
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '57px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-color)',
            borderTop: '1px solid var(--border-color)',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            gap: '24px',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--primary-accent)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '6px 0',
                    }}
                  >
                    {React.cloneElement(item.icon as any, { size: 16 })}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginTop: 'auto', display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <GithubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/jyothi-p-3274372ab/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <LinkedinIcon size={22} />
            </a>
            <a href="mailto:jyop2001@gmail.com" style={{ color: 'var(--text-secondary)' }}>
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}

      {/* Navigation Responsiveness Styles */}
      <style>{`
        .social-link:hover {
          color: var(--primary-accent) !important;
        }
        @media (min-width: 769px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
