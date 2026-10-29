import React, { useEffect } from 'react';

export interface ProjectData {
  id: string;
  category: 'AI & ML' | 'IoT & Robotics' | 'Web & Graphics' | 'Game Dev';
  title: string;
  role: string;
  description: string;
  highlights: string[];
  architecture?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  metrics?: { label: string; value: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="project-modal-container">
        {/* Header Bar */}
        <div className="project-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="modal-category-badge">{project.category}</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              Deep Dive &amp; Architecture
            </span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="project-modal-body">
          {/* Hero Image */}
          {project.imageUrl && (
            <div className="modal-image-wrapper">
              <img
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/images/1.1.png';
                }}
              />
              <div className="modal-image-overlay">
                <h3 id="modal-title">{project.title}</h3>
                <p className="modal-role">{project.role}</p>
              </div>
            </div>
          )}

          {/* Key Metrics / Highlights if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-card">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className="modal-section">
            <h4>Overview &amp; Problem Solved</h4>
            <p>{project.description}</p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="modal-section">
            <h4>System Architecture &amp; Engineering</h4>
            <ul className="modal-highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Architecture Pipeline if available */}
          {project.architecture && (
            <div className="modal-section">
              <h4>Pipeline &amp; Dataflow</h4>
              <div className="modal-pipeline-cards">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="pipeline-step">
                    <span className="step-num">0{idx + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Badges */}
          <div className="modal-section">
            <h4>Tech Stack &amp; Libraries</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="modal-tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="project-modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn primary"
            >
              Launch Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn secondary"
            >
              View GitHub Repo ↗
            </a>
          )}
          <button onClick={onClose} className="modal-action-btn outline">
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
