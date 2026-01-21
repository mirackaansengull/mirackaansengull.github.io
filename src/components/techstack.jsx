import { motion } from 'framer-motion';
import '../css/techstack.css';

const techCategories = [
  {
    title: 'Programming Languages',
    technologies: [
      { name: 'C', iconId: 'c' },
      { name: 'C++', iconId: 'cpp' },
      { name: 'Python', iconId: 'python' },
      { name: 'JavaScript', iconId: 'js' },
      { name: 'Dart', iconId: 'dart' },
    ],
  },
  {
    title: 'Backend Development',
    technologies: [
      { name: 'Go', iconId: 'go' },
      { name: 'Node.js', iconId: 'nodejs' },
      { name: 'PHP', iconId: 'php' },
    ],
  },
  {
    title: 'Frontend Development',
    technologies: [
      { name: 'HTML5', iconId: 'html' },
      { name: 'CSS3', iconId: 'css' },
      { name: 'React', iconId: 'react' },
      { name: 'Tailwind CSS', iconId: 'tailwind' },
    ],
  },
  {
    title: 'Mobile Development',
    technologies: [
      { name: 'Flutter', iconId: 'flutter' },
      { name: 'React Native', iconId: 'react' },
    ],
  },
  {
    title: 'Database & Cloud',
    technologies: [
      { name: 'MySQL', iconId: 'mysql' },
      { name: 'PostgreSQL', iconId: 'postgresql' },
      { name: 'MongoDB', iconId: 'mongodb' },
      { name: 'Firebase', iconId: 'firebase' },
      { name: 'AWS', iconId: 'aws' },
    ],
  },
  {
    title: 'Tools, Design & OS',
    technologies: [
      { name: 'Git', iconId: 'git' },
      { name: 'Linux', iconId: 'linux' },
      { name: 'Figma', iconId: 'figma' },
      { name: 'Blender', iconId: 'blender' },
      { name: 'Unreal Engine', iconId: 'unreal' },
      { name: 'Postman', iconId: 'postman' },
    ],
  },
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

        <div className="techstack-categories">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="techstack-category"
            >
              <h3 className="techstack-category-title">{category.title}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="techstack-grid"
              >
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="techstack-card"
                    title={tech.name}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.iconId}&theme=dark`}
                      alt={tech.name}
                      className="techstack-icon"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
