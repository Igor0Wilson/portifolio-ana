import React from 'react';
import { Heart, Link2, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer style={{ background: '#0f3460', padding: '3rem 0 1.5rem' }}>
    <div className="container-main">
      {/* Top row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(186,230,253,0.15)' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>Ana Flávia Bozolan dos Santos</span>
          </div>
          <p style={{ color: '#7dd3fc', fontSize: '0.78rem' }}>Enfermeira Especialista em Cuidados Críticos</p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ color: '#bae6fd', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Navegação</p>
            {['Sobre', 'Formação', 'Experiência', 'Habilidades', 'Contato'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ display: 'block', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.4rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget).style.color = '#7dd3fc')}
                onMouseLeave={e => ((e.currentTarget).style.color = '#94a3b8')}
              >{l}</a>
            ))}
          </div>
          <div>
            <p style={{ color: '#bae6fd', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contato</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              <Phone size={12} color="#0ea5e9" />anabozolan@gmail.com
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              <Link2 size={12} color="#0ea5e9" />Boituva – SP, Brasil
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '0.3rem 0.8rem', borderRadius: 999, border: '1px solid rgba(186,230,253,0.25)', color: '#7dd3fc', fontSize: '0.72rem', fontWeight: 700 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9' }} />
                UNESP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ color: '#475569', fontSize: '0.75rem' }}>© {new Date().getFullYear()} Ana Flávia Bozolan dos Santos. Todos os direitos reservados.</p>
        <p style={{ color: '#475569', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
          Feito com <Heart size={11} style={{ color: '#0ea5e9', fill: '#0ea5e9' }} /> por um portfólio digital
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
