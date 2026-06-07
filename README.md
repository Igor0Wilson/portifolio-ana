# Portfólio Profissional – Ana Flávia Bozolan dos Santos 🩺

Um portfólio digital moderno e responsivo desenvolvido para destacar a trajetória profissional, as competências clínicas e os projetos de **Ana Flávia Bozolan dos Santos**, Enfermeira Especialista em Cuidados Críticos formada pela UNESP.

Este projeto foi construído com foco em performance, acessibilidade e design de alto nível (UI/UX), utilizando uma paleta de cores inspirada na área da saúde (tons de azul e branco) e micro-interações fluidas.

![Screenshot do Portfólio](./public/favicon.svg) *(Substitua por uma screenshot real do projeto na pasta public)*

## ✨ Funcionalidades

- **Design Responsivo:** Layout que se adapta perfeitamente a celulares, tablets e desktops.
- **Seção "Sobre Mim":** Apresentação pessoal, valores profissionais e link direto para o Currículo Lattes.
- **Linha do Tempo Profissional:** Exibição clara e cronológica da experiência em Assistência Domiciliar, Hemodiálise, Pesquisa e Unidade Básica de Saúde.
- **Formação Acadêmica:** Destaque para a Graduação e Residência Multiprofissional na UNESP.
- **Competências e Habilidades:** Barras de progresso animadas para habilidades clínicas, cuidados críticos e competências gerais.
- **Áreas de Atuação:** Grid dinâmico com especialidades utilizando ícones da biblioteca Lucide.
- **Formulário de Contato Funcional:** Integração direta via AJAX usando a API do **FormSubmit**, enviando as mensagens recebidas diretamente para a caixa de e-mail sem precisar de backend.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as ferramentas mais modernas do ecossistema front-end:

- **[React 18](https://react.dev/)** – Biblioteca principal para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática para maior segurança e previsibilidade do código.
- **[Vite](https://vitejs.dev/)** – Bundler ultrarrápido para desenvolvimento e build otimizado.
- **[Tailwind CSS v4](https://tailwindcss.com/)** *(via import)* + **CSS Vanilla** – Para estilização responsiva e criação de um Design System próprio.
- **[Lucide React](https://lucide.dev/)** – Biblioteca de ícones elegantes e consistentes.

## ⚙️ Como rodar o projeto localmente

Siga os passos abaixo para executar o projeto no seu ambiente de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/portifolio-ana.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd portifolio-ana
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra `http://localhost:5173` (ou a porta informada no terminal) para visualizar o portfólio.

## 📦 Como fazer o Build para Produção

Para gerar a versão otimizada pronta para deploy (como no Vercel, Netlify ou GitHub Pages):

```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

## 📬 Configuração do Formulário de Contato

O formulário de contato localizado em `src/components/Contact.tsx` utiliza o **FormSubmit**. 
Para ativar o recebimento de mensagens:
1. Envie uma mensagem de teste no formulário rodando localmente.
2. Acesse a caixa de entrada do e-mail configurado no código (`anabozolan@gmail.com`).
3. Clique no botão de ativação enviado pelo FormSubmit.
4. Após isso, o formulário funcionará perfeitamente.

---

Feito com 💙 para destacar uma carreira dedicada à saúde e ao cuidado humano.
