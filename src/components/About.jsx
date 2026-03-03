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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="about-text"
        >
          <p>
            Merhaba! Ben Miraç, Web ve Mobile Full Stack Geliştirici olarak hem web hem de
            mobil platformlarda uçtan uca çözümler üreten tutkulu bir yazılımcıyım. Teknolojiye
            olan merakım ve problem çözme yeteneğim sayesinde, farklı platformlarda sorunsuz
            çalışan, kullanıcı dostu uygulamalar geliştiriyorum.
          </p>
          <p>
            Web tarafında React, Node.js ve Tailwind CSS gibi modern teknolojileri
            kullanarak performanslı ve ölçeklenebilir uygulamalar oluşturuyorum. Frontend'de
            kullanıcı deneyimini ön planda tutarken, backend tarafında güvenli ve optimize
            edilmiş API'ler geliştiriyorum. Veritabanı yönetimi, authentication sistemleri
            ve cloud servisler konusunda deneyim sahibiyim.
          </p>
          <p>
            Mobil geliştirme tarafında Flutter framework'ü ile iOS ve Android platformları
            için tek kod tabanından native performansta uygulamalar geliştiriyorum. Dart
            dilinin gücünü kullanarak, responsive tasarımlar ve akıcı animasyonlar ile
            kullanıcıları etkileyen mobil deneyimler yaratıyorum. Firebase entegrasyonu,
            state management ve RESTful API bağlantıları konularında bilgiliyim.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
