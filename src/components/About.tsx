import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/ana_flavia.png';
import { Download, Heart, Users, Brain, Shield } from 'lucide-react';

const VALUES = [
  { icon: Heart,  title: 'Humanização',        desc: 'Cuidado centrado no paciente, com empatia e escuta ativa em cada atendimento na terapia intensiva e home care.' },
  { icon: Brain,  title: 'Pesquisa Científica', desc: 'Produção científica ativa, artigos publicados e participação em congressos de iniciação científica e nefrologia.' },
  { icon: Shield, title: 'Educação em Saúde',  desc: 'Desenvolvimento de materiais educativos, palestras e prevenção de infecções na comunidade e hospital.' },
  { icon: Users,  title: 'Gestão de Projetos', desc: 'Atuação em projetos de extensão (Ação Hygeia, ConeCta-SP) e organização de eventos como Simpósio Paulista Acadêmico.' },
];

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const slide = (delay: number, x: number): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : `translateX(${x}px)`,
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <section id="about" ref={ref} className="bg-light-section" style={{ padding: '6rem 0' }}>
      <div className="container-main">
        <div className="label-tag" style={slide(0, -20)}>Sobre Mim</div>
        <h2 className="heading-lg" style={slide(60, -20)}>
          Enfermeira <span>Intensivista</span>
        </h2>
        <div className="sep-blue" />

        <div className="split-grid-1-1" style={{ marginBottom: '3.5rem' }}>
          {/* Photo */}
          <div className="about-photo-wrapper" style={{ ...slide(100, -30), display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%', maxWidth: 400, aspectRatio: '4/5',
              borderRadius: 20, overflow: 'hidden',
              border: '2px solid #bae6fd',
              boxShadow: '0 16px 48px rgba(14,165,233,0.12)',
            }}>
              <img src={profileImg} alt="Ana Flávia – Sobre" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>

          {/* Bio */}
          <div style={slide(150, 30)}>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Graduada em Enfermagem pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP) e especialista em Enfermagem em Cuidados Críticos por meio do Programa de Residência Multiprofissional. Possui experiência em assistência hospitalar, terapia intensiva, nefrologia, hemodiálise, educação em saúde, pesquisa científica e extensão universitária.
            </p>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              Atuou em ligas acadêmicas e projetos de grande impacto em saúde pública, incluindo prevenção do câncer de colo uterino, controle do câncer no Estado de São Paulo e acolhimento de familiares em Unidades de Terapia Intensiva. Experiência em organização de eventos científicos, coordenação de marketing acadêmico, produção científica, treinamentos e desenvolvimento de materiais educativos.
            </p>

            {/* Quick facts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {[
                { k: 'Nome',       v: 'Ana Flávia Bozolan dos Santos' },
                { k: 'Formação',   v: 'UNESP' },
                { k: 'Residência', v: 'Cuidados Críticos – UNESP' },
                { k: 'Lattes',      v: '7160928307705872' },
              ].map(f => (
                <div key={f.k} style={{ padding: '0.75rem 1rem', borderRadius: 10, background: '#fff', border: '1.5px solid #bae6fd' }}>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{f.k}</p>
                  <p style={{ fontSize: '0.82rem', color: '#1e3a5f', fontWeight: 600 }}>{f.v}</p>
                </div>
              ))}
            </div>

            <a href="https://lattes.cnpq.br/7160928307705872" target="_blank" rel="noopener noreferrer" className="btn-primary" id="about-download-cv">
              <Download size={15} />
              Acessar Currículo Lattes
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid-4">
          {VALUES.map((v, i) => (
            <div key={v.title} id={`about-value-${i}`} className="card-white" style={{ padding: '1.5rem', ...{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s ease ${300 + i * 100}ms` } }}>
              <div className="icon-badge" style={{ marginBottom: '1rem' }}>
                <v.icon size={22} />
              </div>
              <h3 style={{ color: '#0f3460', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
