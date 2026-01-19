import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import Scene3D from './scene3d';
import '../css/Header.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Scene3D />
      
      <div className="hero-content">
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-title"
          >
            Merhaba, Ben <span className="hero-name">Miraç Kaan Şengül</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-subtitle"
          >
            Full Stack Web & Mobile Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-description"
          >
            Modern web teknolojileri ile etkileyici ve kullanıcı dostu dijital deneyimler yaratıyorum. Her projede inovasyon ve kaliteyi bir araya getirerek, markaların dijital dünyada öne çıkmasını sağlıyorum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-buttons"
          >
            <motion.a
              href="#projects"
              className="hero-button hero-button-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(166 100% 70% / 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Projelerimi Gör
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-button hero-button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bana Ulaş
            </motion.a>
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hero-social-links"
          >
            <motion.a
              href="https://github.com/mirackaansengull"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={24} />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/mirackaansengull"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="mailto:mirac.kaansengull@gmail.com"
              className="hero-social-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail size={24} />
              <span>Email</span>
            </motion.a>
            
            <motion.a
              href="https://twitter.com/mirackaansengull"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter size={24} />
              <span>Twitter</span>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="hero-social-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Portfolio"
            >
              <ExternalLink size={24} />
              <span>Portfolio</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-mouse"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-dot"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
