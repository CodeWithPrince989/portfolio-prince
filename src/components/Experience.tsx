import React, { useState } from 'react';
import { ProjectData, ProjectModal } from './ProjectModal';

export const projectsData: ProjectData[] = [
  {
    id: 'snapclass',
    category: 'AI & ML',
    title: 'SnapClass — AI Attendance System',
    role: 'Lead Architect & ML Engineer',
    description:
      'Revolutionizing classroom attendance through real-time dual biometric authentication (computer vision facial recognition and voice acoustic embedding). Eliminates proxy check-ins with sub-second verification.',
    metrics: [
      { label: 'Recognition Speed', value: '< 650ms' },
      { label: 'Biometric Modes', value: 'Face + Voice' },
      { label: 'Accuracy Benchmark', value: '99.4%' }
    ],
    architecture: [
      'Dual Biometric Input: High-res video frame extraction via OpenCV + student audio sample capture via WebRTC.',
      'Feature Extraction: 128-d face landmark descriptors via Dlib & ResNet + acoustic voice spectrogram embeddings via Resemblyzer & Librosa.',
      'Verification Engine: Euclidean & cosine distance ranking against registered vectors stored securely in Supabase Cloud DB.',
      'Real-Time Dispatch: Streamlit analytics dashboard for educators paired with a high-throughput Flask API ingestion tier.'
    ],
    highlights: [
      'Engineered an anti-spoofing liveness detector that rejects static photos and audio playbacks.',
      'Architected Supabase real-time PostgreSQL synchronization for multi-classroom concurrent attendance logging.',
      'Developed a responsive Streamlit educator UI with automated exportable attendance reporting.'
    ],
    tags: ['Python', 'Computer Vision', 'Dlib', 'FaceRecognition', 'Resemblyzer', 'Librosa', 'Flask', 'Streamlit', 'Supabase PostgreSQL'],
    liveUrl: 'https://snapclassai-com.onrender.com/#tech',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: 'https://snapclassai-com.onrender.com/static/img/demo/snap-landing.png'
  },
  {
    id: 'pet-tracker',
    category: 'IoT & Robotics',
    title: 'Smart Pet Health Tracker (36-Hour Hackathon)',
    role: 'Hardware & Embedded IoT Engineer — Team Code Heist',
    description:
      'Full-stack IoT telemetry collar engineered under 36 hours. Continuously captures biometric signals (heart rate, SpO2, core body temperature) and fires instant emergency alerts if vitals cross dangerous thresholds or if the animal wanders outside a defined GPS boundary.',
    metrics: [
      { label: 'Hackathon Sprint', value: '36 Hours' },
      { label: 'Latency', value: 'BLE Real-Time' },
      { label: 'Alert Response', value: 'Instant Push' }
    ],
    architecture: [
      'Embedded Sensor Node: ESP32 micro-controller polling pulse oximeter (MAX30102) and temperature probes via I2C.',
      'Telemetry Broadcast: Low-latency Bluetooth Low Energy (BLE) streaming directly to client mobile applications.',
      'Cloud Backend & Geofencing: FastAPI ingestion microservice syncing location logs with Firebase Realtime Database.',
      'Companion App: Cross-platform Flutter client showing live cardiac curves, oxygen saturation, and geofence safe-zones.'
    ],
    highlights: [
      'Built a fault-tolerant heartbeat alert algorithm that filters false spikes due to animal motion artifacts.',
      'Integrated GPS geofencing polygons to alert owners via push notifications upon perimeter breach.',
      'Completed functional hardware-to-cloud prototype in 36 hours with team Code Heist.'
    ],
    tags: ['ESP32', 'C++', 'FastAPI', 'Firebase Realtime DB', 'Flutter', 'Bluetooth BLE', 'Hardware Hacking'],
    liveUrl: 'https://github.com/CodeWithPrince989',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: '/assets/images/laptop.png'
  },
  {
    id: 'veil-runner',
    category: 'Game Dev',
    title: 'Veil Runner — Global Game Jam 2026',
    role: 'Lead Gameplay Programmer & Systems Architect',
    description:
      'A post-apocalyptic 2D shooter platformer created in a 48-hour pressure sprint. Navigating a irradiated dockyard city, players wield adaptive weapons, battle mutant swarms, and overcome custom-coded bosses.',
    metrics: [
      { label: 'Target Framerate', value: '90 FPS Locked' },
      { label: 'Game Jam Time', value: '48 Hours' },
      { label: 'Boss Encounters', value: '2 Custom AI' }
    ],
    architecture: [
      'State-Machine Player Controller: Multi-axis movement, double jumps, dodge rolls, and dynamic weapon recoil.',
      'Enemy AI Decision Tree: Glitch Merchant (dynamic raycast teleportation & corruption spread) and Mech Titan (2,000 HP bullet patterns + flamethrower cone collision).',
      'Sprite & Particle Pipeline: Custom sprite animation engine optimized using blit pooling and Pygame vector math.',
      'Adaptive Difficulty: Real-time kill-streak multiplier that increases enemy hostility while granting loot drops.'
    ],
    highlights: [
      'Locked steady 90 FPS performance on modest hardware using sprite pooling and bounding-box culling.',
      'Integrated gamepad controller support with haptic rumble triggers for intense boss encounters.',
      'Designed all physics, collision matrices, and combo-scaling mechanics from scratch.'
    ],
    tags: ['Python', 'Pygame', 'Physics Simulation', 'Game AI', 'State Machines', 'Pixel Art'],
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
      'Autonomous robotic vehicle engineered for World Robot Olympiad. Navigated an intricate urban grid without human intervention, identifying, collecting, and sorting municipal waste containers into categorized disposal hubs.',
    metrics: [
      { label: 'Award', value: 'Regional Runner-Up' },
      { label: 'Navigation', value: '100% Autonomous' },
      { label: 'Sorting Precision', value: '100% Success' }
    ],
    architecture: [
      'Sensor Array: Dual light/color optical sensors calibrated to differentiate road tape, junctions, and colored bins.',
      'PID Line Tracking: Proportional-Integral-Derivative steering loop ensuring smooth, high-speed line following.',
      'Robotic Arm Kinematics: Micro-servos geared for mechanical claw pickup, elevation, and designated dump triggers.',
      'Edge Case Management: Handled traffic signal pauses, blind 90° intersections, and payload weight balancing.'
    ],
    highlights: [
      'Finished Runner-Up against top competitive teams at the regional WRO championship.',
      'Developed resilient error recovery logic so the robot self-corrects if sensor readings flicker.',
      'Engineered within strict hardware component limits and strict time constraints.'
    ],
    tags: ['LEGO EV3', 'Robotics', 'PID Control', 'Autonomous Systems', 'Sensor Fusion', 'Embedded Logic'],
    liveUrl: 'https://github.com/CodeWithPrince989',
    githubUrl: 'https://github.com/CodeWithPrince989',
    imageUrl: '/assets/images/lego.png'
  },
  {
    id: 'webgl-portfolio',
    category: 'Web & Graphics',
    title: 'WebGL Fluid Simulation & Portfolio',
    role: 'Creative Developer & Frontend Engineer',
    description:
      'High-performance personal website engineered with interactive WebGL fragment shaders for real-time Navier-Stokes dye dissipation, 4-tier adaptive GPU heuristics, and scroll-linked optical blur effects.',
    metrics: [
      { label: 'Core Vitals', value: '100 Score' },
      { label: 'FPS', value: '60+ Fluid' },
      { label: 'Build Time', value: '< 2.5s Vite' }
    ],
    architecture: [
      'Navier-Stokes Solver: WebGL compute passes calculating divergence, pressure Jacobi iterations, advection, and vorticity.',
      'GPU Tier Detection: Automatically scales dye resolution (from 256 up to 1440) based on hardware concurrency and memory.',
      'Scroll Interpolation: Mathematical smoothstep curves mapping window scroll delta to background optical blur and video alpha.'
    ],
    highlights: [
      'Multi-touch and cursor trail dye dispersion with glowing neon color cycling.',
      'Zero external bloat: Sub-second initial page load with hardware-accelerated animations.',
      'Fully responsive glassmorphism aesthetic across mobile, tablet, and desktop.'
    ],
    tags: ['React', 'TypeScript', 'WebGL', 'GLSL Shaders', 'Vite', 'CSS Glassmorphism', 'Performance Optimization'],
    liveUrl: 'https://prince.win',
    githubUrl: 'https://github.com/CodeWithPrince989/portfolio-prince',
    imageUrl: '/assets/images/4K.jpg'
  }
];

export const Experience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const categories = ['All', 'AI & ML', 'IoT & Robotics', 'Web & Graphics', 'Game Dev'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // 3D Card Tilt Effect on Mouse Move
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section id="section-3" className="section">
      <div className="section-header-block fade-in">
        <h2 className="section-title">Featured Projects &amp; Builds</h2>
        <p className="section-subtitle">
          Engineering solutions spanning AI biometrics, embedded IoT hardware, high-FPS game engines, and creative WebGL shaders.
        </p>
      </div>

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
            className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-modern">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`project-tilt-card fade-in fade-in-delay-${(idx % 4) + 1}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            onClick={() => setSelectedProject(project)}
          >
            {/* Ambient Card Glow Border */}
            <div className="card-ambient-glow" aria-hidden="true" />

            {/* Thumbnail */}
            {project.imageUrl && (
              <div className="project-card-image-wrap">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/1.1.png';
                  }}
                />
                <span className="project-badge">{project.category}</span>
                <div className="project-image-hover-overlay">
                  <span>Inspect Architecture &amp; Live Details 🔍</span>
                </div>
              </div>
            )}

            <div className="project-card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <h3 className="project-card-title">{project.title}</h3>
              </div>

              <p className="project-card-role">{project.role}</p>
              <p className="project-card-desc">{project.description}</p>

              {/* Quick Metrics */}
              {project.metrics && (
                <div className="project-quick-metrics">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="quick-metric-pill">
                      <span className="val">{m.value}</span>
                      <span className="lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="project-tags-cloud">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="tag-pill more">+{project.tags.length - 4} more</span>
                )}
              </div>

              {/* Action Buttons */}
              <div
                className="project-card-actions"
                onClick={(e) => e.stopPropagation()} // Don't trigger modal when clicking external links
              >
                <button
                  type="button"
                  className="card-inspect-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Deep Dive 🔍
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-icon-btn"
                    title="Launch Live Demo"
                  >
                    Demo ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-icon-btn github"
                    title="Source Code"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
