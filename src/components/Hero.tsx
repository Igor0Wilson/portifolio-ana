import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/ana_flavia.png';

const TYPED_ROLES = ['Cuidados Críticos', 'Nefrologia e Hemodiálise', 'Assistência Domiciliar', 'Saúde Pública'];

/* ECG path for the decorative medical line */
const ECG_D = 'M0,50 L40,50 L50,50 L60,10 L70,90 L80,50 L90,50 L100,50 L110,50 L120,35 L130,65 L135,50 L200,50';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 75);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 38);
    } else {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % TYPED_ROLES.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="home" style={{ background: '#ffffff', paddingTop: 68, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, #e0f2fe 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, #f0f9ff 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* ECG decoration */}
      <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', opacity: 0.06, pointerEvents: 'none' }}>
        <svg width="420" height="100" viewBox="0 0 200 100">
          <path d={ECG_D} fill="none" stroke="#0ea5e9" strokeWidth="2" className="ecg-path" />
        </svg>
      </div>

      <div className="container-main" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '4rem 2rem' }}>
        <div className="split-grid-1-1">

          {/* LEFT */}
          <div className="hero-text-container">
            <div className="label-tag anim-left">UNESP Botucatu · Especialista</div>

            <h1 className="heading-xl anim-left d100" style={{ marginBottom: '0.5rem' }}>
              Olá, sou<br />
              <span>Ana Flávia!</span>
            </h1>

            {/* Typewriter */}
            <div className="anim-left d200" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: '1.25rem', minHeight: 44 }}>
              <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 800, color: '#0f3460', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {displayText}
              </span>
              <span className="cursor-blink" />
            </div>

            <p className="anim-left d300" style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 500, marginBottom: '2rem' }}>
              Enfermeira graduada e residente em <strong style={{ color: '#0f3460' }}>Cuidados Críticos</strong> pela <strong style={{ color: '#0ea5e9' }}>UNESP</strong>. 
              Experiência em Terapia Intensiva, Nefrologia, Hemodiálise e Assistência Domiciliar de Alta Complexidade.
            </p>

            {/* Stats row */}
            <div className="anim-left d300 hero-stats-row" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[
                { n: 'UNESP', l: 'Formação' },
                { n: 'UTI', l: 'Especialidade' },
                { n: 'Home Care', l: 'Alta Complexidade' },
              ].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0ea5e9', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="anim-left d400 hero-buttons-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#about" className="btn-primary" id="hero-saiba-mais">Saiba Mais</a>
              <a href="#contact" className="btn-outline" id="hero-contato">Entre em Contato</a>
            </div>
          </div>

          {/* RIGHT – Photo */}
          <div className="anim-right d200 hero-photo-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div className="pulse-ring" />
              <div className="pulse-ring-2" />
              <div style={{
                width: 300, height: 300,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #bae6fd',
                boxShadow: '0 12px 48px rgba(14,165,233,0.20)',
                position: 'relative', zIndex: 1,
              }}>
                <img src={profileImg} alt="Ana Flávia Bozolan – Enfermeira UTI UNESP" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              {/* UNESP badge */}
              <div style={{
                position: 'absolute', bottom: 16, right: -8, zIndex: 2,
                background: '#0ea5e9', color: '#fff',
                borderRadius: 10, padding: '0.35rem 0.85rem',
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em',
                boxShadow: '0 4px 16px rgba(14,165,233,0.4)',
              }}>
                UNESP
              </div>
              {/* BLS badge */}
              <div style={{
                position: 'absolute', top: 20, left: -12, zIndex: 2,
                background: '#fff', color: '#0369a1',
                border: '1.5px solid #bae6fd',
                borderRadius: 10, padding: '0.35rem 0.85rem',
                fontSize: '0.72rem', fontWeight: 800,
                boxShadow: '0 4px 16px rgba(14,165,233,0.12)',
              }}>
                Pesquisadora
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
