import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../css/Projects.css';

const projects = [
  {
    title: 'Anticogold',
    description: 'Kapsamlı e-kuyumcu platformu. Flutter ile geliştirilen mobil uygulama ve Go tabanlı backend altyapısı ile çoklu kullanıcı rolleri desteklenmektedir. Admin, Toptancı, Bayi ve Müşteri olmak üzere 4 farklı giriş yolu ile her kullanıcı tipine özel arayüz ve işlevsellik sunulmaktadır. PayTR ödeme entegrasyonu ve Brinks kargo entegrasyonu ile tam entegre bir e-ticaret deneyimi sağlanmaktadır.',
    tech: ['Flutter', 'Go', 'MongoDB', 'Firebase','Render'],
    github: null,
    live: 'https://play.google.com/store/search?q=anticogold&c=apps&hl=tr',
    featured: true,
  },
  {
    title: 'Eventra',
    description: 'Lisans tezi projesi. Türkiye\'deki 9 farklı etkinlik kategorisindeki işletmeleri tek bir platformda toplayan kapsamlı uygulama. Her işletme için detaylı bilgiler sunulmaktadır: Google Maps entegrasyonu ile yol tarifleri ve konum bilgisi, fiyat bilgileri, Google Maps puanları ve yorumları, işletme detayları ve iletişim bilgileri. Kullanıcılar kategorilere göre filtreleme yapabilir, işletmeleri harita üzerinde görüntüleyebilir ve detaylı bilgilere erişebilir.',
    tech: ['Flutter', 'Google Maps API', 'Google Places API','Go','MongoDB','Render',],
    github: 'https://github.com/mirackaansengull/eventra',
    live: null,
    featured: true,
  },
  {
    title: 'Lokanta/Cafe Takip Sistemi',
    description: 'Restoran ve kafeler için dijital sipariş takip sistemi. Müşteriler online menü üzerinden kendi masalarına sipariş verebilir ve takip edebilir. Kullanıcı dostu arayüz ile hızlı ve kolay sipariş verme deneyimi sunar. Web sitesi prototipi olarak geliştirilmiş, PHP backend ve MSSQL veritabanı ile güçlendirilmiştir.',
    tech: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MSSQL'],
    github: 'https://github.com/mirackaansengull/Lokanta-Cafe-Takip-Sistemi',
    live: null,
    featured: true,
  },
  {
    title: 'Akıllı Kampüs Sağlık ve Güvenlik Bildirim Uygulaması',
    description: 'Kampüs içerisindeki sağlık ve güvenlik olaylarının yönetilmesi için geliştirilen mobil uygulama. Kotlin ile MVVM mimarisi kullanılarak geliştirildi, Jetpack Compose ile modern UI tasarımı. Go backend ile RESTful API servisi, Firebase Authentication ve Firestore entegrasyonu. GPS tabanlı konum desteği ile Google Maps üzerinde olayların harita üzerinde görüntülenmesi. Bildirim takip sistemi, tür bazlı filtreleme, admin paneli ile durum yönetimi ve Brevo ile e-posta bildirimleri. Render platformunda deploy edilmiş, ölçeklenebilir bir sistem.',
    tech: ['Kotlin', 'Go', 'Firebase', 'Google Maps', 'Jetpack Compose','Render'],
    github: 'https://github.com/mirackaansengull/mobilprogramlama',
    live: null,
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
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={22} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    )}
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
