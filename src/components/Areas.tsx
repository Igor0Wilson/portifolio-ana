import React, { useEffect, useRef, useState } from 'react';
import { Activity, Wind, Heart, Cpu, BookOpen, Users, Syringe, ShieldCheck } from 'lucide-react';

const AREAS = [
  { icon: Activity,    title: 'Cuidados Críticos',                desc: 'Assistência integral ao paciente em Unidade de Terapia Intensiva de alta complexidade.' },
  { icon: Heart,       title: 'Assistência Domiciliar Especializada',desc: 'Cuidados a pacientes de alta complexidade, manejo de ostomias, gastrostomia e medicação em domicílio.' },
  { icon: ShieldCheck, title: 'Manejo de Feridas',     desc: 'Avaliação, prevenção e tratamento de lesões agudas/crônicas, úlceras e pé diabético.' },
  { icon: Wind,        title: 'Terapia Intensiva',       desc: 'Manejo avançado de ventilação mecânica, aspiração de vias aéreas e paciente traqueostomizado.' },
  { icon: Syringe,     title: 'Nefrologia e Hemodiálise',     desc: 'Assistência a pacientes renais crônicos e agudos em tratamento hemodialítico e terapia renal substitutiva.' },
  { icon: Cpu,         title: 'Pesquisa Clínica',       desc: 'Produção científica, redação de artigos e atuação em pesquisa acadêmica e de extensão.' },
  { icon: BookOpen,    title: 'Educação em Saúde',         desc: 'Orientação e treinamento de familiares e cuidadores para segurança e continuidade do tratamento.' },
  { icon: Users,       title: 'Saúde Pública e Oncologia',  desc: 'Prevenção do câncer, implementação de programas populacionais e rastreamento.' },
];

const Areas: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="areas" ref={ref} className="bg-light-section" style={{ padding: '6rem 0' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="label-tag" style={{ justifyContent: 'center', opacity: vis ? 1 : 0, transition: 'opacity 0.5s' }}>Especialidades</div>
          <h2 className="heading-lg" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s 0.08s' }}>
            Áreas de <span>Atuação</span>
          </h2>
          <div className="sep-blue" style={{ margin: '0.75rem auto 0' }} />
        </div>

        <div className="grid-4">
          {AREAS.map((area, i) => (
            <div
              key={area.title} id={`area-${i}`}
              className="card-white"
              style={{ padding: '1.75rem 1.25rem', textAlign: 'center', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.55s ease ${i * 65}ms` }}
            >
              <div className="icon-badge" style={{ margin: '0 auto 1rem' }}>
                <area.icon size={22} />
              </div>
              <h3 style={{ color: '#0f3460', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.6rem' }}>{area.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.7 }}>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
