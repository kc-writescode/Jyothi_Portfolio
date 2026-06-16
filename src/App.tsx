import Navbar from './components/Navbar';
import BackgroundGlow from './components/BackgroundGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Sticky Top Header */}
      <Navbar />

      {/* Floating Canvas Glow & Grid lines */}
      <BackgroundGlow />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <ArchitectureShowcase />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-color)',
          padding: '40px 0',
          textAlign: 'center',
          background: 'var(--surface-color)',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Jyothi P. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            Engineered with React, TypeScript, and Geist/Inter typography.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
