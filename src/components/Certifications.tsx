import React from 'react';

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  category: 'Degree' | 'Certification' | 'Award' | 'Engineering Program';
  periodOrYear: string;
  description: string;
  skills: string[];
  badgeColor: 'yellow' | 'cyan' | 'green' | 'purple';
  credentialUrl?: string;
}

const credentials: Credential[] = [
  {
    id: 'dcrust-btech',
    title: 'B.Tech in Computer Science & Engineering (AI/ML & GenAI)',
    issuer: 'Deenbandhu Chhotu Ram University of Science and Technology',
    category: 'Degree',
    periodOrYear: '2025 - 2029',
    description:
      'Rigorous four-year engineering curriculum focused on Artificial Intelligence, Machine Learning architectures, Generative AI models, Discrete Mathematics, and Systems Programming.',
    skills: ['AI/ML Architecture', 'Data Structures & Algorithms', 'Operating Systems', 'Generative AI', 'Computer Networks'],
    badgeColor: 'yellow'
  },
  {
    id: 'pw-microsoft-genai',
    title: 'Microsoft Certified Generative AI for All',
    issuer: 'PW - Skills & Microsoft',
    category: 'Certification',
    periodOrYear: 'Certified',
    description:
      'Comprehensive specialization covering foundations of Generative AI, transformer architectures, Azure OpenAI services, prompt engineering, and enterprise AI safety.',
    skills: ['Transformers', 'Azure OpenAI', 'Prompt Engineering', 'LLM Deployment', 'Responsible AI'],
    badgeColor: 'cyan'
  },
  {
    id: 'anthropic-claude-101',
    title: 'Claude 101 Certificate of Completion',
    issuer: 'Anthropic',
    category: 'Certification',
    periodOrYear: 'Certified',
    description:
      'Official certification in Anthropic Claude ecosystem: architectural nuances of Claude models, Constitutional AI principles, advanced system prompting, function calling, and API orchestration.',
    skills: ['Anthropic SDK', 'Constitutional AI', 'Tool Use', 'Structured Output', 'Prompt Engineering'],
    badgeColor: 'yellow'
  },
  {
    id: 'wro-runner-up',
    title: 'Regional Runner-Up — Autonomous Robotics',
    issuer: 'World Robot Olympiad (WRO)',
    category: 'Award',
    periodOrYear: 'Honors & Award',
    description:
      'Engineered an autonomous robot using EV3 LEGO Mindstorms to solve dynamic navigation, automated trash bin identification, color classification, and drop-off without mid-run human intervention.',
    skills: ['Autonomous Robotics', 'PID Steering', 'Optical Sensor Fusion', 'Mechanical Kinematics', 'Rapid Problem Solving'],
    badgeColor: 'green'
  },
  {
    id: 'namastedev-nodejs',
    title: 'Advanced Node.js Engineering',
    issuer: 'NamasteDev.com',
    category: 'Engineering Program',
    periodOrYear: 'Certified',
    description:
      'In-depth mastery of V8 JavaScript engine internals, Libuv asynchronous I/O thread pool, Node.js event loop phases, Streams, Buffers, Worker Threads, and high-concurrency microservices.',
    skills: ['Node.js Internals', 'Libuv & Event Loop', 'Streams & Buffers', 'Cluster Module', 'API Performance'],
    badgeColor: 'cyan'
  },
  {
    id: 'udemy-cpp-mastery',
    title: 'C++ Complete Training Course for Beginners All In One',
    issuer: 'Udemy',
    category: 'Certification',
    periodOrYear: 'Certified',
    description:
      'Rigorous foundation in C++ programming: pointers, dynamic memory management, references, OOP principles (inheritance, polymorphism, abstraction), and Standard Template Library (STL).',
    skills: ['C++', 'Pointer Arithmetic', 'Memory Management', 'STL Containers', 'OOP Principles'],
    badgeColor: 'yellow'
  },
  {
    id: 'pw-data-analytics',
    title: 'Data Analytics with AI Certification',
    issuer: 'PW - Skills',
    category: 'Certification',
    periodOrYear: 'Certified',
    description:
      'Hands-on credential covering exploratory data analysis, data storytelling with Power BI, statistical analysis with Python Pandas, and automated analytics using AI workflows.',
    skills: ['Data Analytics', 'Power BI Dashboards', 'Pandas & NumPy', 'SQL Queries', 'Statistical Inference'],
    badgeColor: 'cyan'
  },
  {
    id: 'udemy-vibe-coding',
    title: 'Cursor Vibe Coding Pro: Build Any App with AI',
    issuer: 'Udemy',
    category: 'Certification',
    periodOrYear: 'Certified',
    description:
      'Modern software engineering workflows leveraging next-gen AI coding assistants, autonomous agent tool calling, iterative prompt-to-app deployment, and full-stack acceleration.',
    skills: ['Agentic Workflows', 'Cursor AI', 'Full-Stack Velocity', 'Rapid Prototyping', 'Code Review Automation'],
    badgeColor: 'purple'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="section-credentials" className="section credentials-section">
      <div className="section-header-block fade-in">
        <h2 className="section-title">Certifications &amp; Credentials</h2>
        <p className="section-subtitle">
          Continuous formal learning, verified technical certifications, academic achievements, and competition honors.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="credentials-grid">
        {credentials.map((cred, idx) => (
          <div
            key={cred.id}
            className={`credential-card fade-in fade-in-delay-${(idx % 4) + 1}`}
          >
            {/* Header / Issuer */}
            <div className="credential-top">
              <div className="issuer-meta">
                <span className={`credential-badge badge-${cred.badgeColor}`}>
                  {cred.category}
                </span>
                <span className="credential-period">{cred.periodOrYear}</span>
              </div>
              <span className="credential-verified-mark" title="Verified Credential">
                ✓
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="credential-title">{cred.title}</h3>
            <p className="credential-issuer">{cred.issuer}</p>

            {/* Description */}
            <p className="credential-desc">{cred.description}</p>

            {/* Competency Tags */}
            <div className="credential-skills-wrap">
              {cred.skills.map((skill) => (
                <span key={skill} className="credential-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
