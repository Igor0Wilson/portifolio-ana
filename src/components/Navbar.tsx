import React, { useState, useEffect } from 'react';
import { Phone, Link2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início',      href: '#home' },
  { label: 'Sobre',       href: '#about' },
  { label: 'Formação',    href: '#education' },
  { label: 'Atuação',     href: '#areas' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Brand */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Medical cross icon */}
          <div style={{ width: 34, height: 34, borderRadius: 9, background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p style={{ color: '#0f3460', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.1 }}>Ana Flávia</p>
            <p style={{ color: '#0ea5e9', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Enfermeira Intensivista · UNESP</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', listStyle: 'none' }} className="desktop-only">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA + social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-only">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id="nav-linkedin"
            style={{ color: '#7dd3fc', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#0ea5e9')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#7dd3fc')}
          >
            <Link2 size={18} />
          </a>
          <a href="https://wa.me/5515998377859" target="_blank" rel="noopener noreferrer" id="nav-whatsapp"
            style={{ color: '#7dd3fc', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#0ea5e9')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#7dd3fc')}
          >
            <Phone size={18} />
          </a>
          <a href="#contact" className="nav-btn" id="nav-contact-btn">Contato</a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: 5 }} className="mobile-only" id="nav-mobile-btn">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#0ea5e9', borderRadius: 2 }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #bae6fd', background: '#fff', padding: '1rem 2rem' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#1e3a5f', fontSize: '0.9rem', fontWeight: 600, padding: '0.65rem 0', borderBottom: '1px solid #f0f9ff', textDecoration: 'none' }}
            >{l.label}</a>
          ))}
          <a href="#contact" className="nav-btn" style={{ display: 'inline-block', marginTop: '0.75rem' }}>Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
