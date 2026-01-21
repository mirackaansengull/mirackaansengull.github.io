import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../css/Contact.css';

const socialLinks = [
  { icon: Github, href: 'https://github.com/mirackaansengull', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mira%C3%A7-kaan-%C5%9Feng%C3%BCl-8560232a8/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mirac.kaansengull@gmail.com', label: 'Email' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-label"
        >
          04. Sırada Ne Var?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="contact-title"
        >
          İletişime Geç
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="contact-description"
        >
          Yeni projelere ve fırsatlara her zaman açığım. Bir sorum, teklifin veya
          sadece merhaba demek istersen, sana dönüş yapmaktan mutluluk duyarım!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="mailto:hello@example.com"
          className="contact-button"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(166 100% 70% / 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Merhaba De 👋
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="contact-social-links"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
