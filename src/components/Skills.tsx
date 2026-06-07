import React, { useEffect, useRef, useState } from 'react';

const SKILL_GROUPS = [
  {
    id: 'criticos',
    title: 'Assistência e Cuidados Críticos',
    experiences: [
      { period: '2024 – 2026', label: 'Residência em Terapia Intensiva – UNESP' },
      { period: 'Atual', label: 'Assistência Domiciliar de Alta Complexidade' },
    ],
    skills: [
      { name: 'Manejo de Feridas e Ostomias', level: 95 },
      { name: 'Ventilação Mecânica e Traqueostomia', level: 90 },
      { name: 'Nefrologia e Hemodiálise', level: 85 },
    ],
  },
  {
    id: 'saudepublica',
    title: 'Pesquisa e Saúde Pública',
    experiences: [
      { period: '2022 – Atual', label: 'Pesquisadora Projetos ConeCta-SP e Ação Hygeia' },
      { period: '2022', label: 'Iniciação Científica UNESP' },
    ],
    skills: [
      { name: 'Educação em Saúde', level: 95 },
      { name: 'Pesquisa Clínica', level: 90 },
      { name: 'Prevenção em Oncologia', level: 88 },
    ],
  },
  {
    id: 'competencias',
    title: 'Competências Gerais',
    experiences: [
      { period: '2021 – 2023', label: 'Liderança em Ligas Acadêmicas (UNESP)' },
      { period: '2022 – 2023', label: 'Organização de Simpósios (Nefrologia)' },
    ],
    skills: [
      { name: 'Produção Científica', level: 95 },
      { name: 'Gestão de Projetos', level: 88 },
      { name: 'Comunicação Interpessoal', level: 92 },
    ],
  },
];

// Certificações
const CERTS = ['Prevenção de Infecção (FICSAE)', 'Medicamentos de Emergência (FICSAE)', 'Sondagem Nasoenteral (FICSAE)', 'Projeto Lean nas Emergências (5S)', 'Treinamento Lei Lucas', 'Segurança no Trabalho (SENAI-SP)'];

interface SkillBarProps { name: string; level: number; visible: boolean; delay: number; }
const SkillBar: React.FC<SkillBarProps> = ({ name, level, visible, delay }) => (
  <div style={{ marginBottom: '0.9rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e3a5f' }}>{name}</span>
      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0ea5e9' }}>{level}%</span>
    </div>
    <div className="skill-track">
      <div className="skill-fill" style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }} />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="bg-light-section" style={{ padding: '6rem 0' }}>
      <div className="container-main">
        <div className="label-tag" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s' }}>Competências</div>
        <h2 className="heading-lg" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s 0.08s' }}>
          Experiências & <span>Habilidades</span>
        </h2>
        <div className="sep-blue" />

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.id}
              className="card-white"
              style={{ padding: '1.75rem', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.6s ease ${gi * 150}ms` }}
            >
              {/* Blue top accent */}
              <div style={{ height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', marginBottom: '1.25rem' }} />
              <h3 style={{ color: '#0f3460', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>{group.title}</h3>

              {/* Exp boxes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {group.experiences.map(exp => (
                  <div key={exp.label} style={{ padding: '0.6rem 0.85rem', borderRadius: 8, border: '1.5px solid #bae6fd', background: '#f0f9ff', fontSize: '0.78rem', color: '#1e3a5f', lineHeight: 1.5 }}>
                    <strong style={{ color: '#0369a1' }}>{exp.period}</strong> · {exp.label}
                  </div>
                ))}
              </div>

              {/* Skill bars */}
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} visible={vis} delay={gi * 100 + si * 120} />
              ))}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="card-white" style={{ padding: '1.75rem', opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.4s' }}>
          <h3 style={{ color: '#0f3460', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Certificações & Cursos
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {CERTS.map(c => (
              <span key={c} className="tag-pill" style={{ padding: '0.4rem 1rem', fontSize: '0.78rem' }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
