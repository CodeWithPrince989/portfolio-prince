import React from 'react';

interface ToolItem {
  name: string;
  icon: string;
  className: string;
}

const coreSkills = [
  'Research & Development',
  'Web Development',
  'Clear Communication',
  'Video Editing',
  'Problem Solving',
  'AI Engineering',
  'Obsession on Task Completion',
  'Rapid Learning',
  'Systems Thinking',
  'Attention to Detail'
];

const toolsList: ToolItem[] = [
  { name: 'Python', icon: '/assets/icons/python.svg', className: 'tool-python' },
  { name: 'C++', icon: '/assets/icons/cplusplus.svg', className: 'tool-cpp' },
  { name: 'C', icon: '/assets/icons/c.svg', className: 'tool-c' },
  { name: 'React', icon: '/assets/icons/react.svg', className: 'tool-react' },
  { name: 'Node.js', icon: '/assets/icons/nodejs.svg', className: 'tool-nodejs' },
  { name: 'JavaScript', icon: '/assets/icons/javascript.svg', className: 'tool-js' },
  { name: 'SQL', icon: '/assets/icons/sql.svg', className: 'tool-kotlin' },
  { name: 'HTML5', icon: '/assets/icons/html5.svg', className: 'tool-html' },
  { name: 'CSS3', icon: '/assets/icons/css.svg', className: 'tool-css' },
  { name: 'Kotlin', icon: '/assets/icons/kotlin.svg', className: 'tool-kotlin' },
  { name: 'Hugging Face', icon: '/assets/icons/huggingface.svg', className: 'tool-huggingface' },
  { name: 'Gemini', icon: '/assets/icons/gemini.svg', className: 'tool-gemini' },
  { name: 'Claude', icon: '/assets/icons/claude.png', className: 'tool-claude' },
  { name: 'ChatGPT', icon: '/assets/icons/chatgpt.svg', className: 'tool-chatgpt' },
  { name: 'Ollama', icon: '/assets/icons/ollama.png', className: 'tool-ollama' },
  { name: 'Git', icon: '/assets/icons/git.svg', className: 'tool-git' },
  { name: 'GitHub', icon: '/assets/icons/github.svg', className: 'tool-github' },
  { name: 'VS Code', icon: '/assets/icons/vscode.svg', className: 'tool-vscode' },
  { name: 'CodeRabbit', icon: '/assets/icons/coderabbit.svg', className: 'tool-coderabbit' },
  { name: 'Vercel', icon: '/assets/icons/vercel.svg', className: 'tool-vercel' },
  { name: 'Cloudflare', icon: '/assets/icons/cloudflare.svg', className: 'tool-cloudflare' },
  { name: 'Figma', icon: '/assets/icons/figma.svg', className: 'tool-figma' },
  { name: 'Framer', icon: '/assets/icons/framer.svg', className: 'tool-framer' },
  { name: 'Blender', icon: '/assets/icons/blender.svg', className: 'tool-blender' },
  { name: 'Power BI', icon: '/assets/icons/power-bi.svg', className: 'tool-higgsfield' },
  { name: 'Excel', icon: '/assets/icons/excel.svg', className: 'tool-kotlin' },
  { name: 'CapCut', icon: '/assets/icons/capcut.png', className: 'tool-capcut' },
  { name: 'Kiro', icon: '/assets/icons/kiro.svg', className: 'tool-kiro' }
];

const languageList = [
  'Python',
  'C / C++',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'SQL',
  'HTML & CSS',
  'Kotlin'
];

interface EducationItem {
  institution: string;
  title: string;
  period?: string;
}

const educationList: EducationItem[] = [
  {
    institution: 'Deenbandhu Chhotu Ram University of Science and Technology',
    title: 'B.Tech Computer Science & Engineering — AI/ML, Generative AI',
    period: '2025 - 2029'
  },
  {
    institution: 'PW - Skills',
    title: 'Microsoft Certified Generative AI for All'
  },
  {
    institution: 'Anthropic',
    title: 'Certificate of completion: Claude 101'
  },
  {
    institution: 'Udemy',
    title: 'C++ Complete Training Course for C++ Beginners All In One'
  },
  {
    institution: 'Udemy',
    title: 'Cursor Vibe Coding Pro: Build Any App from Scratch with AI'
  },
  {
    institution: 'NamasteDev.com',
    title: 'Advanced Node.js Engineering'
  },
  {
    institution: 'PW - Skills',
    title: 'Data Analytics with AI Certification'
  },
  {
    institution: 'Sarvodaya Bal Vidyalaya',
    title: 'High School Diploma (Science & Math)',
    period: '2022 - 2024'
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="section-4" className="section">
      <h2 className="section-title fade-in">Skills &amp; Tools</h2>

      {/* Core Competencies */}
      <div className="skills-grid fade-in fade-in-delay-1">
        {coreSkills.map((skill) => (
          <div key={skill} className="skill-item">
            <span className="dot" aria-hidden="true"></span>
            {skill}
          </div>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="tools-section fade-in fade-in-delay-2">
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}
        >
          Tools &amp; Technologies
        </h3>
        <div className="tools-grid">
          {toolsList.map((tool) => (
            <div key={tool.name} className="tool-item">
              <div className={`tool-icon ${tool.className}`}>
                <img
                  src={tool.icon}
                  width="36"
                  height="36"
                  alt={tool.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to text initials if icon fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages & Stacks */}
      <div className="languages-section fade-in fade-in-delay-3">
        <h3>Core Programming &amp; Frameworks</h3>
        <div className="lang-tags">
          {languageList.map((lang) => (
            <span key={lang} className="lang-tag">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="education-section fade-in fade-in-delay-4">
        <h3>Education &amp; Certifications</h3>
        {educationList.map((edu, idx) => (
          <div key={idx} className="education-item">
            <h4>{edu.institution}</h4>
            <p>{edu.title}</p>
            {edu.period && (
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  display: 'block',
                  marginTop: '2px'
                }}
              >
                {edu.period}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
