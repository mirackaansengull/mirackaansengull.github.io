import { motion } from 'framer-motion';
import '../css/techstack.css';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript', icon: '📘', category: 'Language' },
  { name: 'Next.js', icon: '▲', category: 'Framework' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Git', icon: '📦', category: 'Version Control' },
  { name: 'GraphQL', icon: '◈', category: 'API' },
  { name: 'Redis', icon: '🔴', category: 'Cache' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section id="tech" className="techstack-section">
      <div className="techstack-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="techstack-heading"
        >
          <span className="techstack-heading-number">02.</span>
          Teknolojiler
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="techstack-grid"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="techstack-card"
            >
              <span className="techstack-icon">
                {tech.icon}
              </span>
              <span className="techstack-name">
                {tech.name}
              </span>
              <span className="techstack-category">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
