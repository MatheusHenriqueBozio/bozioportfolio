export type Lang = 'pt' | 'en';

/** Every outbound link lives here. Empty string = not rendered. */
export const social = {
  linkedin: 'https://www.linkedin.com/in/matheushenriquebozio/',
  behance: 'https://www.behance.net/bozio',
  whatsapp: 'https://wa.me/5551994286098',
  email: 'matheushbozio@gmail.com',
  instagram: '',
  github: '',
};

export const cv: Record<Lang, string> = {
  pt: '/cv/matheus-bozio-curriculo-pt.pdf',
  en: '/cv/matheus-bozio-resume-en.pdf',
};

export const profile = {
  name: 'Matheus Henrique Bozio',
  shortName: 'Matheus Bozio',
  location: { pt: 'São Leopoldo, RS — Brasil', en: 'São Leopoldo, RS — Brazil' },
  photo: '/images/hero.webp',
};

export const t = {
  nav: {
    work: { pt: 'Projetos', en: 'Work' },
    about: { pt: 'Sobre', en: 'About' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hero: {
    lead: {
      pt: 'Senior Product Designer com 5+ anos em produtos digitais e mais de 10 anos em Design. Conecto discovery, UX/UI, pesquisa e estratégia para transformar problemas complexos em produtos claros e escaláveis.',
      en: 'Senior Product Designer with 5+ years in digital products and 10+ years in design. I connect discovery, UX/UI, research and strategy to turn complex problems into clear, scalable products.',
    },
    cv: { pt: '↓ Baixar currículo', en: '↓ Download résumé' },
  },
  sections: {
    work: { pt: 'Projetos selecionados', en: 'Selected work' },
    experience: { pt: 'Experiência', en: 'Experience' },
    about: { pt: 'Sobre', en: 'About' },
    education: { pt: 'Formação', en: 'Education' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  about: {
    p1: {
      pt: 'Sou Senior Product Designer com mais de 5 anos em produtos digitais e mais de 10 anos de trajetória em Design e Marketing. Atuo de ponta a ponta, do discovery e pesquisa à arquitetura, prototipação, interface e evolução do produto.',
      en: "I'm a Senior Product Designer with 5+ years in digital products and over 10 years across design and marketing. I work end to end, from discovery and research to architecture, prototyping, interface and product evolution.",
    },
    p2: {
      pt: 'Já trabalhei com SaaS B2B, insurtech, serviços financeiros, proptech e operações enterprise, em parceria com Produto, Engenharia e stakeholders. Hoje também incorporo IA ao fluxo para acelerar exploração, prototipação e entrega sem abrir mão de critério de design.',
      en: "I've worked on B2B SaaS, insurtech, financial services, proptech and enterprise operations, alongside Product, Engineering and stakeholders. Today I also bring AI into my workflow to speed up exploration, prototyping and delivery without compromising design judgement.",
    },
    details: [
      {
        label: { pt: 'Disciplinas', en: 'Disciplines' },
        value: { pt: 'Product Design, UX Research, UI, Design Systems', en: 'Product Design, UX Research, UI, Design Systems' },
      },
      {
        label: { pt: 'Ferramentas', en: 'Tools' },
        value: { pt: 'Figma, FigJam, Maze, UXCam', en: 'Figma, FigJam, Maze, UXCam' },
      },
      {
        label: { pt: 'IA', en: 'AI' },
        value: { pt: 'Claude Code, Figma Agent, Codex', en: 'Claude Code, Figma Agent, Codex' },
      },
      {
        label: { pt: 'Idiomas', en: 'Languages' },
        value: { pt: 'Português, Inglês', en: 'Portuguese, English' },
      },
      {
        label: { pt: 'Base', en: 'Based in' },
        value: { pt: 'São Leopoldo, RS — Brasil', en: 'São Leopoldo, RS — Brazil' },
      },
    ],
  },
  contact: {
    headline: { pt: ['Tem um desafio de produto?', 'Vamos conversar.'], en: ['Got a product challenge?', "Let's talk."] },
    cta: { pt: 'Vamos conversar', en: "Let's talk" },
    resume: { pt: 'Currículo', en: 'Résumé' },
  },
  footer: {
    rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
    built: { pt: 'Design e código por Matheus Bozio.', en: 'Designed and built by Matheus Bozio.' },
    top: { pt: 'Voltar ao topo', en: 'Back to top' },
  },
  case: {
    back: { pt: '← Todos os projetos', en: '← All projects' },
    next: { pt: 'Próximo projeto', en: 'Next project' },
    behance: { pt: 'Ver case no Behance ↗', en: 'View case on Behance ↗' },
    ds: { pt: 'Design System ↗', en: 'Design System ↗' },
    proto: { pt: 'Protótipo navegável ↗', en: 'Live prototype ↗' },
    meta: {
      role: { pt: 'Função', en: 'Role' },
      scope: { pt: 'Escopo', en: 'Scope' },
      industry: { pt: 'Setor', en: 'Industry' },
      platform: { pt: 'Plataforma', en: 'Platform' },
      year: { pt: 'Ano', en: 'Year' },
    },
    story: {
      about: { pt: 'Sobre', en: 'About' },
      problem: { pt: 'Problema', en: 'Problem' },
      solution: { pt: 'Solução', en: 'Solution' },
    },
  },
  theme: { pt: 'Tema', en: 'Theme' },
  langLabel: { pt: 'Idioma', en: 'Language' },
} as const;

export type Experience = {
  role: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  logo?: string;
};

export const experience: Experience[] = [
  {
    role: { pt: 'Product Designer', en: 'Product Designer' },
    company: 'Mell.ro',
    period: { pt: 'Out 2025 — Jun 2026', en: 'Oct 2025 — Jun 2026' },
  },
  {
    role: { pt: 'Senior Product Designer', en: 'Senior Product Designer' },
    company: 'Bradesco / Qibit',
    period: { pt: 'Abr 2025 — Jul 2025', en: 'Apr 2025 — Jul 2025' },
  },
  {
    role: { pt: 'Product Designer', en: 'Product Designer' },
    company: 'GeoCapex',
    period: { pt: 'Fev 2025 — Mar 2025', en: 'Feb 2025 — Mar 2025' },
  },
  {
    role: { pt: 'Product Designer / Product Owner', en: 'Product Designer / Product Owner' },
    company: 'Alper Agro / Alper Tech',
    period: { pt: '2023 — 2024', en: '2023 — 2024' },
  },
];

export const education: Experience[] = [
  {
    role: { pt: 'Bacharelado em Design', en: "Bachelor's in Design" },
    company: 'Universidade Feevale',
    period: { pt: '2014 — 2021', en: '2014 — 2021' },
  },
  {
    role: { pt: 'Tecnólogo em Marketing', en: 'Associate Degree in Marketing' },
    company: 'Uninter',
    period: { pt: '2012 — 2014', en: '2012 — 2014' },
  },
  {
    role: { pt: 'C# — Primeiros Passos', en: 'C# — First Steps' },
    company: 'Udemy',
    period: { pt: '2024', en: '2024' },
  },
];
