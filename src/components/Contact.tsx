import React, { useState } from 'react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copied, setCopied] = useState(false);

  const myEmail = 'princekumarsingh016592@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    onShowToast('✓ Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2800);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your name.';
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!message.trim()) newErrors.message = 'Please include a brief message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('Please review required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending transition for sleek UX
    setTimeout(() => {
      const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
        subject || `Engineering Inquiry from ${name}`
      )}&body=${encodeURIComponent(
        `Hi Prince,\n\nFrom: ${name} (${email})\n\nMessage:\n${message}\n\nSent from portfolio contact form.`
      )}`;

      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast('✓ Opening mail client to dispatch your message!');

      // Reset form after short delay
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsSuccess(false);
      }, 4000);
    }, 750);
  };

  return (
    <section id="section-5" className="section contact-section-enhanced">
      <div className="section-header-block fade-in">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in discussing an AI system, technical collaboration, or engineering role? Drop me a direct message below.
        </p>
      </div>

      {/* Social & Contact Direct Links */}
      <div className="social-icons fade-in fade-in-delay-1">
        <a
          href="https://www.linkedin.com/in/prince-singh-188676280/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
          id="link-linkedin"
          aria-label="LinkedIn Profile"
          title="Connect on LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
        </a>

        <a
          href="https://github.com/CodeWithPrince989"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
          id="link-github"
          aria-label="GitHub Profile"
          title="Explore GitHub Repositories"
        >
          <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/prince.ipynb?igsh=OWpyc2xwZXgwMHow"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          id="link-instagram"
          aria-label="Instagram Profile"
          title="Follow @prince.ipynb"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
        </a>
      </div>

      {/* Direct Email Action Bar */}
      <div
        className="fade-in fade-in-delay-2"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}
      >
        <a
          href={`mailto:${myEmail}`}
          className="email-link"
          id="link-email"
          style={{ marginBottom: 0 }}
        >
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,4 12,13 2,4" />
          </svg>
          {myEmail}
        </a>

        <button
          onClick={handleCopyEmail}
          type="button"
          className="copy-email-chip-btn"
        >
          {copied ? '✓ Copied to Clipboard' : 'Copy Email 📋'}
        </button>
      </div>

      {/* High-Fidelity Glassmorphic Contact Card */}
      <div className="contact-card-glass fade-in fade-in-delay-3">
        <h3 className="contact-form-title">Send a Direct Transmission</h3>
        <p className="contact-form-subtitle">
          Fill out the details below and I&apos;ll get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row-2col">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                }}
                placeholder="Jane Doe"
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="field-error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email *</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                }}
                placeholder="jane@example.com"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="field-error-msg">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Collaboration / Project Inquiry"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message *</label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
              }}
              placeholder="Tell me about your idea, requirements, or timeline..."
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="field-error-msg">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`contact-submit-btn ${isSuccess ? 'success' : ''}`}
          >
            {isSubmitting ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="spinner-icon" /> Dispatching...
              </span>
            ) : isSuccess ? (
              '✓ Dispatched Successfully!'
            ) : (
              'Send Message ↗'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
