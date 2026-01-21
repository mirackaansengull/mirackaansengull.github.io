import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../css/Navbar.css';

const navItems = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Teknolojiler', href: '#tech' },
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navbar"
    >
      <div className="navbar-container">
        <motion.a
          href="#"
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          onClick={closeMenu}
        >
          <span>{'<'}</span>
          <span className="logo-spacing">{'MKS/>'}</span>
        </motion.a>

        <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
            >
              <a href={item.href} className="nav-link" onClick={closeMenu}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="navbar-contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeMenu}
        >
          İletişime Geç
        </motion.a>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
}
