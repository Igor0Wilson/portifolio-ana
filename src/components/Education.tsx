import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const EDUCATION = [
  {
    id: 'residencia',
    tag: 'RESIDÊNCIA',
    TagIcon: Award,
    title: 'Residência Multiprofissional em Cuidados Críticos',
    institution: 'UNESP – Universidade Estadual Paulista',
    campus: 'Ministério da Saúde (Bolsista)',
    period: '2024 – 2026',
    location: 'São Paulo – SP',
    highlights: [
      'Ênfase em cuidados intensivos e terapia intensiva',
      'Atuação multiprofissional no manejo de pacientes de alta complexidade',
      'Pesquisa: Cuidados intensivos em neonatos com malformações gastrointestinais',
    ],
  },
  {
    id: 'graduacao',
    tag: 'GRADUAÇÃO',
    TagIcon: GraduationCap,
    title: 'Bacharelado em Enfermagem',
    institution: 'UNESP – Universidade Estadual Paulista',
    campus: 'Universidade Estadual Paulista Júlio de Mesquita Filho',
    period: '2020 – 2023',
    location: 'São Paulo – SP',
    highlights: [
      'Participação em Ligas Acadêmicas (Rim e Hipertensão, Paciente Crítico, Infectologia)',
      'Atuação em pesquisa científica e projetos de extensão (PET-Saúde)',
      'Estágios supervisionados em hemodiálise e saúde da família',
    ],
  },
  {
    id: 'tecnico',
    tag: 'TÉCNICO',
    TagIcon: GraduationCap,
    title: 'Técnico em Administração',
    institution: 'ETEC Rubens de Faria e Souza',
    campus: 'Ensino Técnico e Ensino Médio',
    period: '2014 – 2016',
    location: 'Sorocaba – SP',
    highlights: [
      'Formação técnica integrada ao ensino médio',
      'Desenvolvimento de habilidades em gestão e administração',
    ],
  },
];

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container-main">
        <div className="label-tag" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s' }}>Trajetória Acadêmica</div>
        <h2 className="heading-lg" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s 0.08s' }}>
          Formação & <span>Residência</span>
        </h2>
        <div className="sep-blue" />

        {/* UNESP Banner */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          padding: '1.25rem 1.5rem', borderRadius: 14,
          background: 'linear-gradient(135deg, #0f3460 0%, #1d6bc4 100%)',
          marginBottom: '2.5rem',
          opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem' }}>U</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>UNESP – Universidade Estadual Paulista "Júlio de Mesquita Filho"</p>
            <p style={{ color: '#bae6fd', fontSize: '0.75rem', marginTop: '0.15rem' }}>Referência nacional em saúde e pesquisa científica.</p>
          </div>
          <span style={{ padding: '0.4rem 1rem', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, border: '1px solid rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>
            Formação Completa
          </span>
        </div>

        {/* Cards */}
        <div className="grid-2">
          {EDUCATION.map((ed, i) => (
            <div
              key={ed.id} id={`edu-${ed.id}`}
              className="card-white"
              style={{ padding: '1.75rem', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.6s ease ${200 + i * 150}ms` }}
            >
              {/* Top bar */}
              <div style={{ height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', marginBottom: '1.25rem' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div className="tag-pill">
                  <ed.TagIcon size={11} />
                  {ed.tag}
                </div>
              </div>

              <h3 style={{ color: '#0f3460', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{ed.title}</h3>
              <p style={{ color: '#0ea5e9', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.15rem' }}>{ed.institution}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '1rem' }}>{ed.campus}</p>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Calendar size={12} color="#0ea5e9" />{ed.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <MapPin size={12} color="#0ea5e9" />{ed.location}
                </span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {ed.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0ea5e9', marginTop: 6, flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
