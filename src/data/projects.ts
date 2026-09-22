import type { Lang } from './site';

type L = Record<Lang, string>;

export type Block =
  | { type: 'image'; src: string; w: number; h: number }
  | { type: 'pair'; a: string; b: string; ratio: number }
  | { type: 'text'; label: L; body: L };

export type Project = {
  slug: string;
  title: string;
  /** shown on the home card */
  card: { thumb: string; tags: Record<Lang, string[]>; blurb: L };
  subtitle: L;
  meta: { role: L; scope: L; industry: L; platform: L; year?: L };
  story: { about: L; problem: L; solution: L };
  cover: { src: string; w: number; h: number };
  blocks: Block[];
  links: { behance: Record<Lang, string>; secondary?: { kind: 'ds' | 'proto'; url: string } };
};

const img = (src: string, w: number, h: number): Block => ({ type: 'image', src, w, h });
const pair = (a: string, b: string, ratio: number): Block => ({ type: 'pair', a, b, ratio });

export const projects: Project[] = [
  /* ---------------------------------------------------------------- 01 */
  {
    slug: 'agrobiz',
    title: 'Agrobiz',
    card: {
      thumb: '/images/thumb-agrobiz.webp',
      tags: { pt: ['B2B', 'SaaS', 'Insurtech'], en: ['B2B', 'SaaS', 'Insurtech'] },
      blurb: {
        pt: 'Plataforma SaaS de seguros agrícolas. Redesenhei jornadas de cotação, contratação, sinistro e CRM conectando usuários, negócio e produto.',
        en: 'Agricultural insurance SaaS. I redesigned quoting, contracting, claims and CRM journeys, connecting users, business and product.',
      },
    },
    subtitle: {
      pt: 'Plataforma B2B de gestão de seguros agrícolas, com fluxos web e mobile para diferentes perfis, da simulação à apólice.',
      en: 'A B2B platform for agricultural insurance management, with web and mobile flows for different profiles, from simulation to policy.',
    },
    meta: {
      role: { pt: 'Product Designer, com atuação próxima de PO', en: 'Product Designer, working closely as PO' },
      scope: { pt: 'Discovery, pesquisa, UX/UI, Design System', en: 'Discovery, research, UX/UI, design system' },
      industry: { pt: 'Agtech · Insurtech', en: 'Agtech · Insurtech' },
      platform: { pt: 'Web e mobile', en: 'Web and mobile' },
      year: { pt: '2023 — 2024', en: '2023 — 2024' },
    },
    story: {
      about: {
        pt: 'Plataforma digital para o setor agrícola e a gestão de seguros agrícolas. Reúne simulação de propostas, identificadores de seguro, controle de parcelas, cadastro de propriedades, delimitação de talhões e safras e integração com o ZARC.',
        en: "A digital platform for the agricultural sector and agricultural insurance management. It brings together proposal simulation, insurance identifiers, instalment control, property registration, field and harvest mapping, and integration with ZARC, Brazil's agricultural climate risk zoning.",
      },
      problem: {
        pt: 'Um produto com múltiplos perfis, regras de negócio densas e fluxos longos, que precisava funcionar com a mesma clareza na web e no mobile.',
        en: 'A product with multiple profiles, dense business rules and long flows, which had to work with the same clarity on web and mobile.',
      },
      solution: {
        pt: 'Jornadas e arquitetura da informação reestruturadas, interfaces web e mobile, novos fluxos e funcionalidades e um design system para manter a consistência enquanto o produto crescia.',
        en: 'Restructured journeys and information architecture, web and mobile interfaces, new flows and features, and a design system to keep things consistent as the product grew.',
      },
    },
    cover: { src: '/images/agrobiz-0.webp', w: 1400, h: 788 },
    blocks: [
      img('/images/agrobiz-1.webp', 1400, 788),
      {
        type: 'text',
        label: { pt: 'Discovery', en: 'Discovery' },
        body: {
          pt: 'Discovery e pesquisa para entender os perfis envolvidos e a operação de seguros, estruturando as jornadas antes de desenhar as telas.',
          en: 'Discovery and research to understand the profiles involved and the insurance operation, structuring the journeys before designing screens.',
        },
      },
      img('/images/agrobiz-2.webp', 1400, 788),
      pair('/images/agrobiz-3.webp', '/images/agrobiz-4.webp', 688 / 387),
      {
        type: 'text',
        label: { pt: 'Minha atuação', en: 'My role' },
        body: {
          pt: 'Product Design de ponta a ponta, em alguns momentos próximo de Product Owner: arquitetura da informação, prototipação, design system e validação, lado a lado com Produto e Tecnologia.',
          en: 'End-to-end product design, at times working close to the Product Owner role: information architecture, prototyping, design system and validation, side by side with Product and Engineering.',
        },
      },
      img('/images/agrobiz-5.webp', 1400, 789),
      img('/images/agrobiz-6.webp', 1400, 788),
      img('/images/agrobiz-7.webp', 1400, 788),
      img('/images/agrobiz-8.webp', 1400, 1412),
      img('/images/agrobiz-9.webp', 1400, 1227),
      {
        type: 'text',
        label: { pt: 'Decisões de design', en: 'Design decisions' },
        body: {
          pt: 'Transformar regras complexas em fluxos previsíveis: etapas claras, hierarquia consistente entre web e mobile e componentes reutilizáveis para novos fluxos.',
          en: 'Turning complex rules into predictable flows: clear steps, consistent hierarchy across web and mobile, and reusable components for new flows.',
        },
      },
      img('/images/agrobiz-10.webp', 1400, 1274),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/216855839/Agrobiz-UIUX-Product-Design',
        en: 'https://www.behance.net/gallery/217298261/(ENG-Version)-Agrobiz-UIUX-Product-Design',
      },
    },
  },

  /* ---------------------------------------------------------------- 02 */
  {
    slug: 'lunacross',
    title: 'LunaCross',
    card: {
      thumb: '/images/thumb-lunacross.webp',
      tags: { pt: ['Game UI', 'UX'], en: ['Game UI', 'UX'] },
      blurb: {
        pt: 'Sistema de guildas para um universo de RPG. Estruturei fluxos, hierarquia e interface para descoberta, gestão e interação entre jogadores.',
        en: 'A guild system for an RPG universe. I structured flows, hierarchy and interface for discovery, management and player interaction.',
      },
    },
    subtitle: {
      pt: 'Novo sistema de guildas para o jogo Lunacross: descoberta, gestão e interação entre jogadores.',
      en: 'A new guild system for the game Lunacross: discovery, management and interaction between players.',
    },
    meta: {
      role: { pt: 'UI/UX Designer', en: 'UI/UX Designer' },
      scope: { pt: 'Fluxos, hierarquia, Game UI', en: 'Flows, hierarchy, game UI' },
      industry: { pt: 'Games', en: 'Games' },
      platform: { pt: 'Mobile', en: 'Mobile' },
      year: { pt: '2022', en: '2022' },
    },
    story: {
      about: {
        pt: 'Projeto no universo do jogo Lunacross, focado na criação de um novo sistema de guildas dentro da experiência do jogo.',
        en: 'A project in the Lunacross game universe, focused on creating a new guild system within the game experience.',
      },
      problem: {
        pt: 'Estruturar a descoberta, a gestão e a interação entre jogadores num sistema denso, respeitando as regras, o conteúdo e a linguagem visual próprios do jogo.',
        en: "Structuring discovery, management and interaction between players in a dense system, while respecting the game's own rules, content and visual language.",
      },
      solution: {
        pt: 'Fluxos e hierarquia de informação para a guilda, com as funcionalidades organizadas em janelas e telas pensadas para o contexto de jogo.',
        en: 'Flows and information hierarchy for the guild, with features organised into windows and screens designed for a game context.',
      },
    },
    cover: { src: '/images/lunacross-0.webp', w: 1400, h: 1050 },
    blocks: [
      pair('/images/lunacross-1.webp', '/images/lunacross-2.webp', 688 / 1032),
      {
        type: 'text',
        label: { pt: 'Direção visual', en: 'Visual direction' },
        body: {
          pt: 'Fundo criado no Photoshop com camadas em roxo, a cor que define LunaCross, e palavras-chave de direção de arte para manter o tom lúdico e competitivo do jogo.',
          en: "A background built in Photoshop with purple layers, the colour that defines LunaCross, plus art direction keywords to keep the game's playful, competitive tone.",
        },
      },
      img('/images/lunacross-3.webp', 1400, 788),
      img('/images/lunacross-4.webp', 1400, 700),
      {
        type: 'text',
        label: { pt: 'Telas', en: 'Screens' },
        body: {
          pt: 'Criação e edição de tripulação, lista de amigos e janelas do sistema de guildas, pensadas para leitura rápida durante a partida.',
          en: 'Crew creation and editing, friends list and guild system windows, designed to be read at a glance mid-game.',
        },
      },
      img('/images/lunacross-5.webp', 1400, 788),
      img('/images/lunacross-6.webp', 1400, 788),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/146042431/Lunacross-Guild-System-UIUX',
        en: 'https://www.behance.net/gallery/146042431/Lunacross-Guild-System-UIUX',
      },
      secondary: { kind: 'proto', url: 'https://lunacross-guild-system.vercel.app/#s1' },
    },
  },

  /* ---------------------------------------------------------------- 03 */
  {
    slug: 'banco-sustentavel',
    title: 'Banco Sustentável',
    card: {
      thumb: '/images/thumb-banco-sustentavel.webp',
      tags: { pt: ['Fintech', 'IA'], en: ['Fintech', 'AI'] },
      blurb: {
        pt: 'Plataforma financeira com foco em sustentabilidade. Criei direção visual, componentes, protótipo navegável e explorei IA aplicada ao processo de design.',
        en: 'A financial platform focused on sustainability. I created the visual direction, components and a clickable prototype, and explored AI in the design process.',
      },
    },
    subtitle: {
      pt: 'Um ecossistema digital que transforma economia circular em impacto sustentável.',
      en: 'A digital ecosystem that turns the circular economy into sustainable impact.',
    },
    meta: {
      role: { pt: 'Product / UI Designer', en: 'Product / UI Designer' },
      scope: { pt: 'Direção visual, componentes, protótipo', en: 'Visual direction, components, prototype' },
      industry: { pt: 'Fintech · Sustentabilidade', en: 'Fintech · Sustainability' },
      platform: { pt: 'Web', en: 'Web' },
      year: { pt: '2022 — 2026', en: '2022 — 2026' },
    },
    story: {
      about: {
        pt: 'Ecossistema financeiro com foco em sustentabilidade e economia circular: um marketplace B2B de resíduos conectado a uma moeda digital, as Sementes, usadas para apoiar iniciativas sustentáveis.',
        en: 'A financial ecosystem focused on sustainability and the circular economy: a B2B waste marketplace connected to a digital currency, Sementes (Seeds), used to back sustainable initiatives.',
      },
      problem: {
        pt: 'Traduzir um conceito novo, que une produto financeiro e impacto sustentável, numa experiência digital clara e num sistema visual coerente.',
        en: 'Translating a new concept, combining a financial product with sustainable impact, into a clear digital experience and a coherent visual system.',
      },
      solution: {
        pt: 'Direção visual, interface, componentes e protótipo navegável, com a IA explorada como parte do processo de design.',
        en: 'Visual direction, interface, components and a clickable prototype, with AI explored as part of the design process.',
      },
    },
    cover: { src: '/images/banco-sustentavel-0.webp', w: 2800, h: 1569 },
    blocks: [
      pair('/images/banco-sustentavel-1.webp', '/images/banco-sustentavel-2.webp', 688 / 805),
      {
        type: 'text',
        label: { pt: 'Design system', en: 'Design system' },
        body: {
          pt: 'Contorno de 1,6px, escala derivada das medidas reais, verde sobre escala de cinza, grid de quatro colunas e uma biblioteca com estados que mantém web e mobile coerentes.',
          en: 'A 1.6px outline, a scale derived from real measurements, green over a grey scale, a four-column grid and a stateful library that keeps web and mobile consistent.',
        },
      },
      pair('/images/banco-sustentavel-3.webp', '/images/banco-sustentavel-4.webp', 688 / 693),
      pair('/images/banco-sustentavel-5.webp', '/images/banco-sustentavel-6.webp', 688 / 658),
      {
        type: 'text',
        label: { pt: 'Fluxos', en: 'Flows' },
        body: {
          pt: 'Vinte histórias mapeadas; seis delas sustentam o fluxo principal: anunciar o resíduo, negociar, gerar Sementes e aplicá-las em iniciativas.',
          en: 'Twenty stories mapped; six carry the main flow: list the waste, negotiate, earn Seeds and put them into initiatives.',
        },
      },
      pair('/images/banco-sustentavel-7.webp', '/images/banco-sustentavel-8.webp', 688 / 526),
      img('/images/banco-sustentavel-9.webp', 2800, 2380),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/255217907/Plataforma-Banco-Sustentavel',
        en: 'https://www.behance.net/gallery/255217907/Plataforma-Banco-Sustentavel',
      },
      secondary: { kind: 'ds', url: 'https://banco-sustentavel.vercel.app/#/design-system' },
    },
  },

  /* ---------------------------------------------------------------- 04 */
  {
    slug: 'elissa-village',
    title: 'Elissa Village',
    card: {
      thumb: '/images/thumb-elissa-village.webp',
      tags: { pt: ['FamilyTech', 'UX'], en: ['FamilyTech', 'UX'] },
      blurb: {
        pt: 'App para pessoas idosas e suas famílias. Refiz o fluxo, a UI e o design system, com IA como parte do processo de design.',
        en: 'An app for older adults and their families. I redid the flow, UI and design system, with AI as part of the design process.',
      },
    },
    subtitle: {
      pt: 'App para o ecossistema de vida e serviços de pessoas idosas e suas famílias.',
      en: 'An app for the living and services ecosystem of older adults and their families.',
    },
    meta: {
      role: { pt: 'Product Designer', en: 'Product Designer' },
      scope: { pt: 'Fluxo, UI, Design System', en: 'Flow, UI, design system' },
      industry: { pt: 'FamilyTech · Senior Living', en: 'FamilyTech · Senior Living' },
      platform: { pt: 'Mobile', en: 'Mobile' },
      year: { pt: '2022 — 2026', en: '2022 — 2026' },
    },
    story: {
      about: {
        pt: 'Aplicativo que conecta rotina, serviços, acompanhamento e autonomia para pessoas idosas e suas famílias. Um projeto profissional anterior, resgatado e retrabalhado.',
        en: 'An app connecting routine, services, care and autonomy for older adults and their families. A previous professional project, revisited and reworked.',
      },
      problem: {
        pt: 'Projetar para o público sênior e suas famílias pede acessibilidade, clareza e acolhimento em cada interação, sem perder a facilidade de uso.',
        en: 'Designing for older adults and their families calls for accessibility, clarity and warmth in every interaction, without losing ease of use.',
      },
      solution: {
        pt: 'O fluxo foi refeito, junto com a UI e o design system. A IA entrou como ferramenta no processo de Product Design, apoiando exploração e construção, com as decisões de design mantidas por mim.',
        en: 'The flow was redone, along with the UI and design system. AI was used as a tool within the product design process, supporting exploration and build, while the design decisions stayed with me.',
      },
    },
    cover: { src: '/images/elissa-village-0.webp', w: 1400, h: 883 },
    blocks: [
      img('/images/elissa-village-1.webp', 1400, 882),
      {
        type: 'text',
        label: { pt: 'Interface dos cuidadores', en: 'Caregiver interface' },
        body: {
          pt: 'Os cuidadores concentram o maior escopo do produto: painel, registro operacional, protocolo de chamadas e emergência e chat interno.',
          en: 'Caregivers hold the largest scope in the product: dashboard, operational log, call and emergency protocol, and internal chat.',
        },
      },
      img('/images/elissa-village-2.webp', 1400, 882),
      img('/images/elissa-village-3.webp', 1400, 882),
      {
        type: 'text',
        label: { pt: 'Emergência', en: 'Emergency' },
        body: {
          pt: 'Chamadas de rotina e de emergência têm tratamentos visuais distintos, para que a ação crítica seja reconhecida em segundos.',
          en: 'Routine and emergency calls get distinct visual treatments, so the critical action is recognised in seconds.',
        },
      },
      img('/images/elissa-village-4.webp', 1400, 882),
      img('/images/elissa-village-5.webp', 1400, 882),
      img('/images/elissa-village-6.webp', 1400, 882),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/254757853/Elissa-Village-App',
        en: 'https://www.behance.net/gallery/254757853/Elissa-Village-App',
      },
      secondary: { kind: 'proto', url: 'https://elissa-village-app.vercel.app/' },
    },
  },

  /* ---------------------------------------------------------------- 05 */
  {
    slug: 'greensquares',
    title: 'Greensquares',
    card: {
      thumb: '/images/thumb-greensquares.webp',
      tags: { pt: ['E-commerce', 'UX'], en: ['E-commerce', 'UX'] },
      blurb: {
        pt: 'Experiência de compra na web e no mobile. Arquitetura da informação, fluxo de compra e consistência entre dispositivos.',
        en: 'A purchase experience on web and mobile. Information architecture, purchase flow and consistency across devices.',
      },
    },
    subtitle: {
      pt: 'Experiência digital e fluxo de compra para a Green Squares, na web e no mobile.',
      en: 'Digital experience and purchase flow for Green Squares, on web and mobile.',
    },
    meta: {
      role: { pt: 'UI/UX Designer', en: 'UI/UX Designer' },
      scope: { pt: 'Arquitetura, fluxo de compra, UI', en: 'Architecture, purchase flow, UI' },
      industry: { pt: 'E-commerce', en: 'E-commerce' },
      platform: { pt: 'Web e mobile', en: 'Web and mobile' },
      year: { pt: '2023', en: '2023' },
    },
    story: {
      about: {
        pt: 'Projeto de experiência digital e fluxo de compra para a Green Squares, desenhado em versões web e mobile, com protótipos navegáveis dos dois fluxos.',
        en: 'A digital experience and purchase flow for Green Squares, designed for web and mobile, with clickable prototypes of both flows.',
      },
      problem: {
        pt: 'Estruturar uma jornada de compra clara e manter a mesma lógica de navegação e de organização das informações entre desktop e mobile.',
        en: 'Structuring a clear purchase journey and keeping the same navigation logic and information organisation across desktop and mobile.',
      },
      solution: {
        pt: 'Arquitetura da informação, navegação e organização de produtos e informações, com a UI adaptada a cada dispositivo sem mudar a lógica da jornada.',
        en: "Information architecture, navigation and organisation of products and information, with the UI adapted to each device without changing the journey's logic.",
      },
    },
    cover: { src: '/images/greensquares-0.webp', w: 1400, h: 1216 },
    blocks: [
      img('/images/greensquares-1.webp', 1400, 1002),
      img('/images/greensquares-2.webp', 1400, 1217),
      {
        type: 'text',
        label: { pt: 'Jornada', en: 'Journey' },
        body: {
          pt: 'Fluxo de compra organizado em etapas até a confirmação, com a mesma estrutura na web e no mobile.',
          en: 'A purchase flow organised in steps through to confirmation, with the same structure on web and mobile.',
        },
      },
      img('/images/greensquares-3.webp', 1400, 881),
      img('/images/greensquares-4.webp', 1400, 858),
      img('/images/greensquares-5.webp', 1400, 845),
      img('/images/greensquares-6.webp', 1400, 806),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/163570649/Projeto-UIUX-Green-Squares',
        en: 'https://www.behance.net/gallery/163570649/Projeto-UIUX-Green-Squares',
      },
    },
  },

  /* ---------------------------------------------------------------- 06 */
  {
    slug: 'colab',
    title: 'Colab',
    card: {
      thumb: '/images/thumb-colab.webp',
      tags: { pt: ['UI Design', 'App'], en: ['UI Design', 'App'] },
      blurb: {
        pt: 'Aplicativo desenvolvido como projeto de Product Design e interface, da estrutura à direção visual.',
        en: 'An app developed as a product design and interface project, from structure to visual direction.',
      },
    },
    subtitle: {
      pt: 'Aplicativo desenvolvido como projeto de Product Design e interface.',
      en: 'An app developed as a product design and interface project.',
    },
    meta: {
      role: { pt: 'Product / UI Designer', en: 'Product / UI Designer' },
      scope: { pt: 'Product Design, UI, direção visual', en: 'Product design, UI, visual direction' },
      industry: { pt: 'Produto digital', en: 'Digital product' },
      platform: { pt: 'Mobile', en: 'Mobile' },
      year: { pt: '2021', en: '2021' },
    },
    story: {
      about: {
        pt: 'Projeto de aplicativo apresentado principalmente pelas interfaces e pela exploração visual, da estrutura do produto à identidade.',
        en: 'An app project presented mainly through its interfaces and visual exploration, from product structure to identity.',
      },
      problem: {
        pt: 'Dar forma a um produto do zero: definir estrutura, hierarquia e uma linguagem visual própria para o aplicativo.',
        en: 'Shaping a product from scratch: defining structure, hierarchy and a visual language of its own for the app.',
      },
      solution: {
        pt: 'Interfaces do aplicativo, sistema visual e marca, organizados num fluxo de telas que apresenta o produto de ponta a ponta.',
        en: 'App interfaces, visual system and brand, organised into a screen flow that presents the product end to end.',
      },
    },
    cover: { src: '/images/colab-0.webp', w: 1400, h: 788 },
    blocks: [
      img('/images/colab-1.webp', 1400, 788),
      {
        type: 'text',
        label: { pt: 'Marca', en: 'Brand' },
        body: {
          pt: 'Identidade Colab em roxo e rosa, com tipografia Roboto.',
          en: 'A Colab identity in purple and pink, with Roboto type.',
        },
      },
      img('/images/colab-2.webp', 1400, 788),
      img('/images/colab-3.webp', 1400, 788),
      img('/images/colab-4.webp', 1400, 788),
      {
        type: 'text',
        label: { pt: 'Principais recursos', en: 'Key features' },
        body: {
          pt: 'Aba de tópicos favoritos, opções de interação e blocos de imagem, vídeo e texto.',
          en: 'A favourite topics tab, interaction options and image, video and text blocks.',
        },
      },
      img('/images/colab-5.webp', 1400, 788),
      img('/images/colab-6.webp', 1400, 788),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/132907465/Aplicativo-Colab',
        en: 'https://www.behance.net/gallery/132907465/Aplicativo-Colab',
      },
    },
  },

  /* ---------------------------------------------------------------- 07 */
  {
    slug: 'tramontina',
    title: 'Tramontina',
    card: {
      thumb: '/images/thumb-tramontina.webp',
      tags: { pt: ['Suporte', 'App'], en: ['Support', 'App'] },
      blurb: {
        pt: 'App de suporte que organiza informação, orientação e serviços numa jornada de atendimento mais clara.',
        en: 'A support app that organises information, guidance and services into a clearer service journey.',
      },
    },
    subtitle: {
      pt: 'Aplicativo de suporte que organiza informações, orientação e serviços da Tramontina numa experiência mais clara.',
      en: "A support app that organises Tramontina's information, guidance and services into a clearer experience.",
    },
    meta: {
      role: { pt: 'UI/UX Designer', en: 'UI/UX Designer' },
      scope: { pt: 'Arquitetura, navegação, UI', en: 'Architecture, navigation, UI' },
      industry: { pt: 'Suporte ao cliente', en: 'Customer support' },
      platform: { pt: 'Mobile e desktop', en: 'Mobile and desktop' },
    },
    story: {
      about: {
        pt: 'Projeto de aplicativo de suporte para a Tramontina, organizando informação, orientação e serviços de atendimento numa experiência digital.',
        en: 'A support app project for Tramontina, organising information, guidance and customer service into one digital experience.',
      },
      problem: {
        pt: 'Tornar fácil encontrar informações e acompanhar solicitações de suporte, com uma jornada de atendimento clara do início ao fim.',
        en: 'Making it easy to find information and follow support requests, with a clear service journey from start to finish.',
      },
      solution: {
        pt: 'Arquitetura da informação, navegação e organização de conteúdo centradas na jornada de serviço, com uma interface que deixa claro onde cada informação está.',
        en: 'Information architecture, navigation and content organisation built around the service journey, with an interface that makes it clear where each piece of information lives.',
      },
    },
    cover: { src: '/images/tramontina-0.webp', w: 1400, h: 788 },
    blocks: [
      img('/images/tramontina-1.webp', 1400, 788),
      {
        type: 'text',
        label: { pt: 'Experiência', en: 'Experience' },
        body: {
          pt: 'Em vez de uma confirmação instantânea, uma breve tela de processamento reforça que a solicitação está em andamento e incentiva atenção a cada etapa.',
          en: 'Instead of an instant confirmation, a short processing screen reassures that the request is in progress and encourages attention at each step.',
        },
      },
      img('/images/tramontina-2.webp', 1400, 1100),
    ],
    links: {
      behance: {
        pt: 'https://www.behance.net/gallery/111731243/Projeto-de-Aplicativo-de-Suporte-para-a-Tramontina',
        en: 'https://www.behance.net/gallery/111731243/Projeto-de-Aplicativo-de-Suporte-para-a-Tramontina',
      },
    },
  },
];

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
