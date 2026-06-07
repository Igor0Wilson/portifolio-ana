import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'homecare',
    period: 'Atual',
    role: 'Assistência Domiciliar Especializada e Manejo de Feridas',
    institution: 'Pacientes de Alta Complexidade',
    current: true,
    tasks: [
      'Cuidados integrais a pacientes traqueostomizados, aspiração de vias aéreas e manejo de secreções',
      'Avaliação e acompanhamento de feridas agudas/crônicas, lesões por pressão, úlceras e pé diabético',
      'Manejo de gastrostomia e cuidados com ostomias intestinais e urinárias',
      'Administração de medicamentos e prevenção de infecções relacionadas a dispositivos',
      'Orientação, treinamento de familiares/cuidadores e monitorização clínica para prevenção de intercorrências',
    ],
  },
  {
    id: 'hemodialise',
    period: '2023 – Atual',
    role: 'Estágio Supervisionado em Hemodiálise',
    institution: 'Unidade de Hemodiálise',
    current: true,
    tasks: [
      'Assistência direta a pacientes renais crônicos em terapia renal substitutiva (420 horas)',
      'Acompanhamento de procedimentos dialíticos e monitoramento de sinais vitais e parâmetros da máquina',
      'Atendimento e orientação aos pacientes nefrológicos e familiares',
    ],
  },
  {
    id: 'projetos',
    period: '2022 – Atual',
    role: 'Pesquisadora em Saúde Pública (Ação Hygeia e ConeCta-SP)',
    institution: 'Projetos de Extensão e Pesquisa',
    current: true,
    tasks: [
      'Atuação estadual voltada para rastreamento, diagnóstico precoce e redução da mortalidade por câncer',
      'Educação em saúde e assistência à comunidade focada na prevenção do câncer de colo uterino (PET-Saúde)',
      'Implementação de programas populacionais e estudos epidemiológicos',
    ],
  },
  {
    id: 'ubs',
    period: '2022',
    role: 'Estágio Voluntário',
    institution: 'Prefeitura Municipal de Boituva (UBS)',
    current: false,
    tasks: [
      'Atendimento à população em Unidade Básica de Saúde (40 horas)',
      'Apoio às equipes multiprofissionais da rede municipal',
      'Realização de rotinas assistenciais de enfermagem em atenção primária',
    ],
  },
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container-main">
        <div className="label-tag" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s' }}>Trajetória Profissional</div>
        <h2 className="heading-lg" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s 0.08s' }}>
          Experiência <span>Clínica</span>
        </h2>
        <div className="sep-blue" />

        {/* Timeline */}
        <div className="timeline-wrap">
          <div className="timeline-line" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.id}
                style={{ position: 'relative', opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(-20px)', transition: `all 0.6s ease ${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="timeline-dot" style={{ top: '1.5rem' }} />

                <div id={`exp-${exp.id}`} className="card-white" style={{ padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                        <h3 style={{ color: '#0f3460', fontWeight: 800, fontSize: '1.05rem' }}>{exp.role}</h3>
                        {exp.current && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0.2rem 0.65rem', borderRadius: 999, background: '#dcfce7', color: '#15803d', fontSize: '0.68rem', fontWeight: 700 }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }} />
                            Atual
                          </span>
                        )}
                      </div>
                      <p style={{ color: '#0ea5e9', fontSize: '0.85rem', fontWeight: 700 }}>{exp.institution}</p>
                    </div>
                    <span className="tag-pill">{exp.period}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                    {exp.tasks.map(task => (
                      <div key={task} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                        <ChevronRight size={14} color="#0ea5e9" style={{ marginTop: 2, flexShrink: 0 }} />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
