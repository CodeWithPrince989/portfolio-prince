import React, { useState } from 'react';

interface Project {
  id: string;
  category: 'AI & ML' | 'IoT & Robotics' | 'Web & Graphics' | 'Game Dev';
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 'snapclass',
    category: 'AI & ML',
    title: 'SnapClass - AI Powered Attendance System',
    role: 'Lead Architect & ML Engineer',
    description:
      'Next-generation automated classroom management using computer vision and voice biometrics for frictionless, tamper-proof student check-ins.',
    highlights: [
      'Dual Biometrics: High-fidelity facial recognition with Dlib and custom voice embeddings using Resemblyzer & Librosa.',
      'Reactive Frontend & Flask Service: Streamlit dashboard with a robust Flask API landing layer.',
      'Supabase Real-time Cloud: Real-time PostgreSQL database with role-based auth, automated reporting, and secure sync.'
    ],
    tags: ['Python', 'Streamlit', 'Flask', 'FaceRecognition', 'Resemblyzer', 'Supabase', 'Computer Vision'],
    liveUrl: 'https://snapclassai-com.onrender.com/#tech',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: 'https://snapclassai-com.onrender.com/static/img/demo/snap-landing.png'
  },
  {
    id: 'pet-tracker',
    category: 'IoT & Robotics',
    title: 'Smart Pet Health Tracker (36-Hour Hackathon)',
    role: 'Hardware & IoT Engineer — Team Code Heist',
    description:
      'Real-time IoT wearable for domestic pets that continuously monitors vitals and streams telemetry over Bluetooth to a companion mobile application.',
    highlights: [
      'ESP32 Architecture: Wired multi-sensor array measuring real-time heart rate, SpO2, and body temperature.',
      'GPS Geofencing: Triggers immediate instant push alerts when pets breach designated safe virtual perimeters.',
      'End-to-End Pipeline: ESP32 telemetry → FastAPI microservices → Firebase RTDB → Flutter mobile app.'
    ],
    tags: ['ESP32', 'FastAPI', 'Firebase', 'Flutter', 'Bluetooth BLE', 'C++', 'IoT'],
    liveUrl: 'https://github.com/CodeWithPrince989',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: '/assets/images/laptop.png'
  },
  {
    id: 'veil-runner',
    category: 'Game Dev',
    title: 'Veil Runner — Global Game Jam 2026',
    role: 'Lead Gameplay Programmer & Systems Designer',
    description:
      'Post-apocalyptic 2D action platformer shooter built from scratch in 48 hours during Global Game Jam 2026.',
    highlights: [
      'Dynamic Boss Encounters: Glitch Merchant (teleportation & corruption bullets) and Mech Titan (2,000 HP, plasma & flamethrower).',
      'Combo & Upgrades Engine: Real-time scaling damage output, collectable heart upgrades, and haptic controller feedback.',
      'Optimized 90 FPS rendering pipeline built with Pygame and custom frame pacing.'
    ],
    tags: ['Python', 'Pygame', 'Game Architecture', 'Physics Engine', 'Level Design'],
    liveUrl: 'https://globalgamejam.org/games/2026/veil-runner-2',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: '/assets/images/8K.jpg'
  },
  {
    id: 'wro-robotics',
    category: 'IoT & Robotics',
    title: 'Autonomous Smart City Robot — WRO Runner Up',
    role: 'Autonomous Systems & Navigation Engineer',
    description:
      'World Robot Olympiad competition entry: autonomous robot programmed to navigate complex urban grids and sort resources.',
    highlights: [
      'Autonomous line-following and real-time obstacle avoidance on mapped city street grids.',
      'Color sensor calibration for autonomous identification and sorting of city bins into color-coded collection zones.',
      'Awarded Regional Runner-Up for robust edge-case handling and zero human interventions.'
    ],
    tags: ['LEGO EV3', 'Robotics', 'Autonomous Navigation', 'Sensor Fusion', 'PID Controllers'],
    liveUrl: 'https://github.com/CodeWithPrince989',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: '/assets/images/lego.png'
  },
  {
    id: 'webgl-portfolio',
    category: 'Web & Graphics',
    title: 'Interactive WebGL Fluid Simulation Portfolio',
    role: 'Creative Developer & Frontend Engineer',
    description:
      'Futuristic personal portfolio featuring real-time Navier-Stokes fluid cursor simulation, adaptive GPU tiers, and scroll-synchronized visual blending.',
    highlights: [
      'Interactive WebGL fragment shaders for dynamic multi-color dye dispersion and pressure simulation.',
      'Smooth scroll-synchronized blur, opacity, and background video pacing.',
      'Zero external bloat: ultra-fast initial load with sub-second time-to-interactive.'
    ],
    tags: ['React', 'TypeScript', 'WebGL', 'GLSL', 'Vite', 'CSS3 Architecture'],
    liveUrl: 'https://prince.win',
    githubUrl: 'https://github.com/CodeWithPrince989/portfolio-prince',
    imageUrl: '/assets/images/4K.jpg'
  }
];

export const Experience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'IoT & Robotics', 'Web & Graphics', 'Game Dev'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="section-3" className="section">
      <h2 className="section-title fade-in">Projects &amp; Experience</h2>

      {/* Category Filter Pills */}
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
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              border:
                activeCategory === cat
                  ? '1px solid var(--yellow)'
                  : '1px solid rgba(255, 255, 255, 0.15)',
              background:
                activeCategory === cat
                  ? 'rgba(245, 166, 35, 0.2)'
                  : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === cat ? 'var(--yellow)' : 'var(--white)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-container">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`experience-item fade-in fade-in-delay-${(idx % 4) + 1}`}
          >
            <h3>{project.category}</h3>
            <p className="subtitle">{project.title}</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic', fontSize: '13px', marginBottom: '8px' }}>
              {project.role}
            </p>
            <p>{project.description}</p>

            <ul className="experience-bullets" style={{ marginTop: '12px', marginBottom: '16px' }}>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(0, 229, 255, 0.08)',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(0, 229, 255, 0.25)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {project.liveUrl && (
                <div className="project-link">
                  <span style={{ color: 'var(--yellow)' }}>Live Demo: </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project ↗
                  </a>
                </div>
              )}
              {project.githubUrl && (
                <div className="project-link">
                  <span style={{ color: 'var(--yellow)' }}>Source Code: </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              )}
            </div>

            {/* Preview Card */}
            {project.imageUrl && (
              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="snapclass-preview-card"
                style={{ marginTop: '18px' }}
              >
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback if external image isn't available
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/1.1.png';
                  }}
                />
                <div className="snapclass-preview-overlay">
                  <span>Explore {project.title} ↗</span>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
