import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';

const CONTACTS = [
  { icon: Mail,        label: 'E-mail',      value: 'anabozolan@gmail.com',     href: 'mailto:anabozolan@gmail.com' },
  { icon: Phone,       label: 'Telefone',    value: '(15) 99837-7859',            href: 'tel:+5515998377859' },
  { icon: MapPin,      label: 'Localização', value: 'Boituva – SP, Brasil',           href: '#' },
  { icon: ExternalLink,label: 'Lattes',    value: 'Acessar Currículo Lattes',href: 'https://lattes.cnpq.br/7160928307705872' },
];

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/ajax/anabozolan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: `Nova mensagem do portfólio: ${form.subject || 'Contato'}`,
        })
      });
      setSent(true);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  };

  const slide = (delay: number, x: number): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : `translateX(${x}px)`,
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <section id="contact" ref={ref} style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container-main">
        <div className="label-tag" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s' }}>Vamos Conversar</div>
        <h2 className="heading-lg" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.5s 0.08s' }}>
          Entre em <span>Contato</span>
        </h2>
        <div className="sep-blue" />

        <div className="split-grid-1-1-6">
          {/* Contact items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...slide(50, -20) }}>
            {CONTACTS.map(c => (
              <a
                key={c.label} href={c.href} id={`contact-${c.label.toLowerCase()}`}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-white"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', textDecoration: 'none', cursor: c.href === '#' ? 'default' : 'pointer' }}
              >
                <div className="icon-badge">
                  <c.icon size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>{c.label}</p>
                  <p style={{ fontSize: '0.85rem', color: '#1e3a5f', fontWeight: 600 }}>{c.value}</p>
                </div>
              </a>
            ))}

            {/* UNESP highlight */}
            <div style={{ padding: '1.25rem', borderRadius: 14, background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', border: '1.5px solid #bae6fd', marginTop: '0.5rem' }}>
              <p style={{ color: '#0369a1', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                ✦ Enfermeira Intensivista
              </p>
              <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: 1.7 }}>
                Graduação e residência em cuidados críticos pela UNESP. Experiência em Terapia Intensiva, Assistência Domiciliar Especializada, Nefrologia e Saúde Pública.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-white" style={{ padding: '2.25rem', ...slide(150, 20) }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <CheckCircle size={48} color="#0ea5e9" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#0f3460', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mensagem Enviada!</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Obrigada pelo contato. Retornarei em breve!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label htmlFor="c-name" className="field-label">Nome</label>
                    <input id="c-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Seu nome" className="field-input" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="field-label">E-mail</label>
                    <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="seu@email.com" className="field-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-subject" className="field-label">Assunto</label>
                  <input id="c-subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Como posso ajudar?" className="field-input" />
                </div>
                <div>
                  <label htmlFor="c-message" className="field-label">Mensagem</label>
                  <textarea id="c-message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Sua mensagem..." className="field-input" style={{ resize: 'none' }} />
                </div>
                <button type="submit" id="contact-submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>
                  <Send size={15} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
