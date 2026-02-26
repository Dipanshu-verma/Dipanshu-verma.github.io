import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaLinkedin, FaGithub, FaEnvelope,
  FaWhatsapp, FaTwitter, FaMapMarkerAlt, FaPhone,
} from 'react-icons/fa';
import { BiSolidSend } from 'react-icons/bi';
import useReveal from './useReveal';

/* ─────────────────────────────────────────────────────────────
   EMAILJS CONFIG  — fill these in after setting up EmailJS.com
   ───────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'service_9xbtd0q';         // ✅
const EMAILJS_TEMPLATE_ID = 'template_qs2a6pd';        // ✅
const EMAILJS_PUBLIC_KEY = 'cwIAMzvc55PBXfyn1';       // ✅

const Contact = () => {
  const formRef = useRef(null);
  const ref = useReveal();

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,            // → {{name}}  in template
          email: form.email,           // → {{email}} in template (Reply To)
          title: form.subject || `Portfolio contact from ${form.name}`,  // → {{title}} in Subject
          message: form.message,         // → {{message}} in template
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });

      // Reset back to idle after 5 s
      setTimeout(() => setStatus('idle'), 5000);

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact" id="Contact" ref={ref}>

      {/* ── LEFT: Info ── */}
      <div className="contact-text reveal-left">
        <span className="s-label">Let's Talk</span>
        <h2 className="s-title">Get In <span>Touch</span></h2>
        <div className="s-line" />

        <p>
          I'm always open to new opportunities, collaborations, and conversations.
          Whether you have a project in mind, a job offer, or just want to say hello — my inbox is open!
        </p>

        <div className="contact-info-list">
          <div className="contact-info-row">
            <span className="c-icon"><BiSolidSend /></span>
            <span>vermadipanshu444@gmail.com</span>
          </div>
          <div className="contact-info-row">
            <span className="c-icon"><FaPhone /></span>
            <span>+91 82096 33900</span>
          </div>
          <div className="contact-info-row">
            <span className="c-icon"><FaMapMarkerAlt /></span>
            <span>India</span>
          </div>
        </div>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/dipanshu-verma-3875a7246/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/Dipanshu-verma" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://wa.me/7414824859" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="mailto:vermadipanshu444@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div className="contact-form reveal-right">
        <form ref={formRef} onSubmit={handleSubmit} noValidate>

          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="cf-name">Your Name *</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                placeholder="e.g. John Smith"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email Address *</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                placeholder="e.g. john@email.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cf-msg">Message *</label>
            <textarea
              id="cf-msg"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
          </div>

          {/* Status feedback */}
          {status === 'success' && (
            <div className="form-feedback form-feedback--success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-feedback form-feedback--error">
              ❌ Something went wrong. Please email me directly at vermadipanshu444@gmail.com
            </div>
          )}

          <button
            type="submit"
            className={`send-btn${status === 'sending' ? ' send-btn--loading' : ''}`}
            id="contact-send-btn"
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? (
              <><span className="btn-spinner" /> Sending…</>
            ) : status === 'success' ? (
              '✅ Sent!'
            ) : (
              '🚀 Send Message'
            )}
          </button>

        </form>
      </div>

    </section>
  );
};

export default Contact;
