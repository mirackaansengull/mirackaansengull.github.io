import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../css/Projects.css';

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern bir e-ticaret platformu. React, Node.js ve PostgreSQL kullanılarak geliştirildi. Stripe entegrasyonu, gerçek zamanlı stok takibi ve admin paneli içerir.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Proje Yönetim Aracı',
    description: 'Ekipler için Kanban tabanlı proje yönetim uygulaması. Drag-and-drop özelliği, gerçek zamanlı güncellemeler ve detaylı raporlama.',
    tech: ['Next.js', 'JavaScript', 'Prisma', 'Socket.io'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Chatbot Platformu',
    description: 'GPT-4 tabanlı akıllı müşteri hizmetleri chatbot\'u. Doğal dil işleme ve öğrenme yetenekleri ile müşteri deneyimini iyileştirir.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-heading"
        >
          <span className="projects-heading-number">03.</span>
          Projeler
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-list"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card"
            >
              <div className="project-content">
                <div className="project-main">
                  <p className="project-label">
                    Featured Project
                  </p>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="project-tag"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
                <div className="project-divider" />
                <div className="project-number">
                  <span className="project-number-text">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
