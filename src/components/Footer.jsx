import { motion } from 'framer-motion';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="footer-container"
      >
        <p className="footer-text">
          Designed & Built by{' '}
          <span className="footer-link">
            Miraç Kaan Şengül
          </span>
        </p>
        <p className="footer-copyright">
          © 2026 Tüm hakları saklıdır.
        </p>
      </motion.div>
    </footer>
  );
}