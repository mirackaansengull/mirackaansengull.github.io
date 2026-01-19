import { motion } from 'framer-motion';
import '../css/About.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-heading"
        >
          <span className="about-heading-number">01.</span>
          Hakkımda
        </motion.h2>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="about-text"
          >
            <p>
              Merhaba! Ben Miraç, web geliştirme ve yazılım mühendisliği konusunda
              tutkulu bir geliştiriciyim. Kariyerim boyunca, startup'lardan büyük
              şirketlere kadar çeşitli projelerde yer aldım.
            </p>
            <p>
              Modern web teknolojileri ile kullanıcı odaklı, performanslı ve
              ölçeklenebilir uygulamalar geliştirmek benim uzmanlık alanım.
              Temiz kod yazmayı ve sürdürülebilir mimari tasarlamayı önemsiyorum.
            </p>
            <p>
              Şu anda freelance projeler üzerinde çalışıyor ve yeni teknolojileri
              keşfetmeye devam ediyorum. İşbirliği fırsatlarına her zaman açığım!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="about-image-wrapper"
          >
            <div className="about-image-container">
              <div className="about-image-overlay" />
              <div className="about-image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="about-image-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
