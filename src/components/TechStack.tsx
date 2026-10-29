import React, { useState } from 'react';

export interface TechItem {
  name: string;
  category: 'Core Languages' | 'Web & Full-Stack' | 'AI & GenAI Ecosystem' | 'Tools & DevOps';
  icon: string;
  iconBgClass: string;
  focus: string;
  level: string;
}

const techItems: TechItem[] = [
  // Core Languages
  {
    name: 'Python',
    category: 'Core Languages',
    icon: '/assets/icons/python.svg',
    iconBgClass: 'tool-python',
    focus: 'AI/ML, Pygame, OpenCV & Backend',
    level: 'Advanced'
  },
  {
    name: 'C++',
    category: 'Core Languages',
    icon: '/assets/icons/cplusplus.svg',
    iconBgClass: 'tool-cpp',
    focus: 'Data Structures, Algorithms & OOP',
    level: 'Proficient'
  },
  {
    name: 'C',
    category: 'Core Languages',
    icon: '/assets/icons/c.svg',
    iconBgClass: 'tool-c',
    focus: 'Low-Level Systems & Memory',
    level: 'Core'
  },
  {
    name: 'TypeScript',
    category: 'Core Languages',
    icon: '/assets/icons/javascript.svg',
    iconBgClass: 'tool-js',
    focus: 'Type-Safe Full-Stack Systems',
    level: 'Proficient'
  },
  {
    name: 'JavaScript',
    category: 'Core Languages',
    icon: '/assets/icons/javascript.svg',
    iconBgClass: 'tool-js',
    focus: 'Modern ES6+, Async & Web APIs',
    level: 'Advanced'
  },
  {
    name: 'SQL',
    category: 'Core Languages',
    icon: '/assets/icons/sql.svg',
    iconBgClass: 'tool-kotlin',
    focus: 'PostgreSQL, Relational Schemas & Queries',
    level: 'Proficient'
  },

  // Web & Frontend/Backend
  {
    name: 'React',
    category: 'Web & Full-Stack',
    icon: '/assets/icons/react.svg',
    iconBgClass: 'tool-react',
    focus: 'Component Architecture, Hooks & SPAs',
    level: 'Advanced'
  },
  {
    name: 'Node.js',
    category: 'Web & Full-Stack',
    icon: '/assets/icons/nodejs.svg',
    iconBgClass: 'tool-nodejs',
    focus: 'Event Loop, Express & Microservices',
    level: 'Proficient'
  },
  {
    name: 'HTML5',
    category: 'Web & Full-Stack',
    icon: '/assets/icons/html5.svg',
    iconBgClass: 'tool-html',
    focus: 'Semantic DOM, Accessibility & Canvas',
    level: 'Advanced'
  },
  {
    name: 'CSS3',
    category: 'Web & Full-Stack',
    icon: '/assets/icons/css.svg',
    iconBgClass: 'tool-css',
    focus: 'Glassmorphism, Animations & Responsive UI',
    level: 'Advanced'
  },
  {
    name: 'Kotlin',
    category: 'Web & Full-Stack',
    icon: '/assets/icons/kotlin.svg',
    iconBgClass: 'tool-kotlin',
    focus: 'Mobile Architecture & Jetpack',
    level: 'Intermediate'
  },

  // AI, ML & GenAI Ecosystem
  {
    name: 'Hugging Face',
    category: 'AI & GenAI Ecosystem',
    icon: '/assets/icons/huggingface.svg',
    iconBgClass: 'tool-huggingface',
    focus: 'Transformers, Pre-trained Models & Datasets',
    level: 'Active'
  },
  {
    name: 'Gemini',
    category: 'AI & GenAI Ecosystem',
    icon: '/assets/icons/gemini.svg',
    iconBgClass: 'tool-gemini',
    focus: 'Multimodal AI, Function Calling & SDKs',
    level: 'Active'
  },
  {
    name: 'Claude',
    category: 'AI & GenAI Ecosystem',
    icon: '/assets/icons/claude.png',
    iconBgClass: 'tool-claude',
    focus: 'Anthropic SDK, Prompt Ops & Claude 101',
    level: 'Certified'
  },
  {
    name: 'ChatGPT',
    category: 'AI & GenAI Ecosystem',
    icon: '/assets/icons/chatgpt.svg',
    iconBgClass: 'tool-chatgpt',
    focus: 'OpenAI Ecosystem, Embeddings & RAG',
    level: 'Active'
  },
  {
    name: 'Ollama',
    category: 'AI & GenAI Ecosystem',
    icon: '/assets/icons/ollama.png',
    iconBgClass: 'tool-ollama',
    focus: 'Local LLM Inference, Quantization & Llama',
    level: 'Active'
  },

  // Tools, DevOps & Platforms
  {
    name: 'Git',
    category: 'Tools & DevOps',
    icon: '/assets/icons/git.svg',
    iconBgClass: 'tool-git',
    focus: 'Version Control, Branching & GitOps',
    level: 'Advanced'
  },
  {
    name: 'GitHub',
    category: 'Tools & DevOps',
    icon: '/assets/icons/github.svg',
    iconBgClass: 'tool-github',
    focus: 'CI/CD Actions, Collab & Repositories',
    level: 'Advanced'
  },
  {
    name: 'VS Code',
    category: 'Tools & DevOps',
    icon: '/assets/icons/vscode.svg',
    iconBgClass: 'tool-vscode',
    focus: 'Custom Tooling & AI-Assisted Dev',
    level: 'Advanced'
  },
  {
    name: 'CodeRabbit',
    category: 'Tools & DevOps',
    icon: '/assets/icons/coderabbit.svg',
    iconBgClass: 'tool-coderabbit',
    focus: 'Automated AI Code Review & Security',
    level: 'Active'
  },
  {
    name: 'Vercel',
    category: 'Tools & DevOps',
    icon: '/assets/icons/vercel.svg',
    iconBgClass: 'tool-vercel',
    focus: 'Serverless Edge Deployments & Domains',
    level: 'Active'
  },
  {
    name: 'Cloudflare',
    category: 'Tools & DevOps',
    icon: '/assets/icons/cloudflare.svg',
    iconBgClass: 'tool-cloudflare',
    focus: 'DNS, CDN Caching & Edge Security',
    level: 'Active'
  },
  {
    name: 'Figma',
    category: 'Tools & DevOps',
    icon: '/assets/icons/figma.svg',
    iconBgClass: 'tool-figma',
    focus: 'UI/UX Prototyping & Design Systems',
    level: 'Proficient'
  },
  {
    name: 'Framer',
    category: 'Tools & DevOps',
    icon: '/assets/icons/framer.svg',
    iconBgClass: 'tool-framer',
    focus: 'Interactive Web Motion & Micro-UX',
    level: 'Proficient'
  },
  {
    name: 'Blender',
    category: 'Tools & DevOps',
    icon: '/assets/icons/blender.svg',
    iconBgClass: 'tool-blender',
    focus: '3D Mesh Modeling & Asset Rendering',
    level: 'Intermediate'
  },
  {
    name: 'Power BI',
    category: 'Tools & DevOps',
    icon: '/assets/icons/power-bi.svg',
    iconBgClass: 'tool-higgsfield',
    focus: 'Data Visualization & Business Insights',
    level: 'Certified'
  },
  {
    name: 'Excel',
    category: 'Tools & DevOps',
    icon: '/assets/icons/excel.svg',
    iconBgClass: 'tool-kotlin',
    focus: 'Data Cleaning, Macros & Pivot Tables',
    level: 'Proficient'
  },
  {
    name: 'CapCut',
    category: 'Tools & DevOps',
    icon: '/assets/icons/capcut.png',
    iconBgClass: 'tool-capcut',
    focus: 'High-Impact Video Editing & Motion',
    level: 'Proficient'
  }
];

const competencies = [
  'Systems Thinking',
  'Research & Development',
  'Algorithm Optimization',
  'Prompt Engineering',
  'High-Speed Rapid Learning',
  'Computer Vision Pipelines',
  'Attention to Detail',
  'Obsession on Task Completion',
  'Clear Technical Communication',
  'Performance Profiling'
];

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Core Languages',
    'Web & Full-Stack',
    'AI & GenAI Ecosystem',
    'Tools & DevOps'
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? techItems
      : techItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="section-4" className="section tech-stack-section">
      <div className="section-header-block fade-in">
        <h2 className="section-title">Technical Expertise &amp; Stack</h2>
        <p className="section-subtitle">
          Comprehensive arsenal of programming languages, full-stack frameworks, generative AI ecosystems, and developer tooling.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        className="fade-in fade-in-delay-1"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '36px'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat} {cat === 'All' ? `(${techItems.length})` : `(${techItems.filter((i) => i.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div className="tech-stack-cards-grid">
        {filteredItems.map((item, idx) => (
          <div
            key={item.name}
            className={`tech-stack-card fade-in fade-in-delay-${(idx % 4) + 1}`}
          >
            <div className="tech-card-top">
              <div className={`tech-card-icon-wrap ${item.iconBgClass}`}>
                <img
                  src={item.icon}
                  alt={item.name}
                  width="32"
                  height="32"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="tech-card-badge">{item.level}</span>
            </div>

            <div className="tech-card-body">
              <h4 className="tech-card-name">{item.name}</h4>
              <span className="tech-card-cat">{item.category}</span>
              <p className="tech-card-focus">{item.focus}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Engineering Competencies Cloud */}
      <div className="competencies-block fade-in fade-in-delay-3" style={{ marginTop: '54px' }}>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--yellow)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}
        >
          Core Engineering Competencies &amp; Practices
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {competencies.map((comp) => (
            <div key={comp} className="competency-chip">
              <span className="chip-dot" aria-hidden="true" />
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
