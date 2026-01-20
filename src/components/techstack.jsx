import { motion } from 'framer-motion';
import '../css/techstack.css';

const techCategories = [
  {
    title: 'Programming Languages',
    technologies: [
      { name: 'C', icon: 'C' },
      { name: 'C++', icon: 'C++' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Kotlin', icon: 'K' },
    ],
  },
  {
    title: 'Backend Development',
    technologies: [
      { name: 'Go', icon: 'Go' },
      { name: 'Node.js', icon: 'Node' },
      { name: 'PHP', icon: 'PHP' },
    ],
  },
  {
    title: 'Frontend Development',
    technologies: [
      { name: 'HTML5', icon: 'HTML5' },
      { name: 'CSS3', icon: 'CSS3' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: 'TW' },
    ],
  },
  {
    title: 'Mobile Development',
    technologies: [
      { name: 'Flutter', icon: 'Flutter' },
      { name: 'React Native', icon: 'RN' },
    ],
  },
  {
    title: 'Database & Cloud',
    technologies: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'AWS', icon: '☁️' },
    ],
  },
  {
    title: 'Tools, Design & OS',
    technologies: [
      { name: 'Git', icon: 'Git' },
      { name: 'Linux', icon: '🐧' },
      { name: 'Figma', icon: 'Figma' },
      { name: 'Blender', icon: 'Blender' },
      { name: 'Unreal Engine', icon: 'UE' },
      { name: 'Adobe Photoshop', icon: 'PS' },
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
