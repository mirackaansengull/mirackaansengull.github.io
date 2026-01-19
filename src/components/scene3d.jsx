import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import '../css/scene3d.css';

// Tek dalga - üst kısım boş, alt kısım dolu (nokta kullanarak)
function WaveSpheres() {
  const pointsRef = useRef();
  const positionsRef = useRef();
  const timeRef = useRef(0);
  const waveLineIndicesRef = useRef([]);
  const fillIndicesRef = useRef([]);
  
  // Dalga parametreleri (performans optimizasyonu)
  const waveWidth = 30; // Header'ın tamamını kaplamak için genişletildi
  const waveHeight = 12; // Header'ın tamamını kaplamak için yükseklik
  const pointsPerWave = 1000; // Dalga çizgisi üzerinde nokta sayısı (optimize edildi)
  const fillDensity = 120; // Alt kısımda her X pozisyonu için dikey küre sayısı (optimize edildi)
  const fillDepth = 2; // Alt kısımda Z ekseninde derinlik katmanları (optimize edildi)
  const horizontalDensity = 0.7; // Her X pozisyonu için yatay küre sayısı (optimize edildi)
  
  // Toplam küre sayısı: dalga çizgisi + alt kısım doldurma
  const waveLineCount = pointsPerWave;
  const fillPointsPerWave = Math.floor(pointsPerWave * horizontalDensity);
  const fillCount = fillPointsPerWave * fillDensity * fillDepth;
  const totalCount = waveLineCount + fillCount;
  
  // Dalga noktalarını oluştur
  const wavePoints = useMemo(() => {
    const points = [];
    
    // Dalga çizgisi için parametreler
    const waveAmplitude = 2.5;
    const wavePhase = 0;
    
    // 1. Dalga çizgisindeki noktalar
    for (let i = 0; i < pointsPerWave; i++) {
      const t = i / pointsPerWave;
      const x = (t - 0.5) * waveWidth;
      
      // Yumuşak S eğrisi dalga fonksiyonu
      const wave1 = Math.sin(t * Math.PI * 2 + wavePhase) * waveAmplitude;
      const wave2 = Math.sin(t * Math.PI * 4 + wavePhase * 1.5) * waveAmplitude * 0.5;
      const wave3 = Math.sin(t * Math.PI * 6 + wavePhase * 2) * waveAmplitude * 0.25;
      const waveY = wave1 + wave2 + wave3;
      
      points.push({
        x,
        baseY: waveY,
        baseZ: 0,
        offsetX: 0,
        offsetY: 0,
        offsetZ: 0,
        t,
        isWaveLine: true,
      });
    }
    
    // 2. Alt kısmı doldur (dalganın altında kalan alan) - tam dolu
    const bottomY = -waveHeight / 2; // En alt nokta
    
    // Daha sık X pozisyonları için doldurma (boşlukları önlemek için)
    const fillPointsPerWave = Math.floor(pointsPerWave * horizontalDensity);
    
    for (let i = 0; i < fillPointsPerWave; i++) {
      const t = i / fillPointsPerWave;
      const x = (t - 0.5) * waveWidth;
      
      // Bu X pozisyonundaki dalga yüksekliğini hesapla
      const wave1 = Math.sin(t * Math.PI * 2 + wavePhase) * waveAmplitude;
      const wave2 = Math.sin(t * Math.PI * 4 + wavePhase * 1.5) * waveAmplitude * 0.5;
      const wave3 = Math.sin(t * Math.PI * 6 + wavePhase * 2) * waveAmplitude * 0.25;
      const waveY = wave1 + wave2 + wave3;
      
      // Dalganın altından en alta kadar doldur
      const fillHeight = waveY - bottomY;
      const fillStep = Math.max(0.05, fillHeight / fillDensity); // Daha küçük adımlar
      
      for (let j = 0; j < fillDensity; j++) {
        const fillY = waveY - (j * fillStep) - (fillStep * 0.1); // Dalganın hemen altından başla
        
        // Z ekseninde derinlik katmanları
        for (let k = 0; k < fillDepth; k++) {
          const z = (k / fillDepth - 0.5) * 0.4; // Z ekseninde dağılım
          
          // X ve Y'de minimal rastgelelik (daha sıkı doldurma)
          const xOffset = (Math.random() - 0.5) * 0.1; // X'te hafif rastgelelik
          const yOffset = (Math.random() - 0.5) * (fillStep * 0.25); // Y'de hafif rastgelelik
          
          points.push({
            x: x + xOffset,
            baseY: fillY + yOffset,
            baseZ: z,
            offsetX: 0,
            offsetY: 0,
            offsetZ: 0,
            t,
            isWaveLine: false,
            originalWaveY: waveY, // Animasyon için orijinal dalga yüksekliğini sakla
          });
        }
      }
    }
    
    return points;
  }, []);

  // Nokta geometry ve material (çok daha performanslı)
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(totalCount * 3);
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    positionsRef.current = positions;
    return geom;
  }, [totalCount]);

  const material = useMemo(() => new THREE.PointsMaterial({
    color: '#B0D4FF',
    size: 0.018, // Nokta boyutu
    transparent: true,
    opacity: 0.165,
    sizeAttenuation: true,
    depthWrite: false,
  }), []);

  // Performans için: sabit değerleri dışarı çıkar
  const bottomY = -waveHeight / 2;
  const waveSpeed = 0.4;
  const waveAmplitude = 2.5;
  
  // İndeksleri bir kez hesapla ve cache'le
  useMemo(() => {
    if (waveLineIndicesRef.current.length === 0) {
      wavePoints.forEach((point, index) => {
        if (point.isWaveLine) {
          waveLineIndicesRef.current.push(index);
        } else {
          fillIndicesRef.current.push(index);
        }
      });
    }
  }, [wavePoints]);
  
  useFrame((state, delta) => {
    if (pointsRef.current && positionsRef.current && wavePoints.length > 0) {
      timeRef.current += delta;
      
      // Performans: Sadece animasyon fazını bir kez hesapla
      const animatedPhase = timeRef.current * waveSpeed;
      const xOffsetPhase = timeRef.current * 0.3;
      const positions = positionsRef.current;
      
      // Performans: Dalga çizgisi noktalarını güncelle
      const waveLineIndices = waveLineIndicesRef.current;
      for (let i = 0; i < waveLineIndices.length; i++) {
        const index = waveLineIndices[i];
        const point = wavePoints[index];
        
        // Optimize: Math.sin hesaplamalarını minimize et
        const t2 = point.t * Math.PI * 2 + animatedPhase;
        const t4 = point.t * Math.PI * 4 + animatedPhase * 1.5;
        const t6 = point.t * Math.PI * 6 + animatedPhase * 2;
        
        const currentWaveY = 
          Math.sin(t2) * waveAmplitude +
          Math.sin(t4) * waveAmplitude * 0.5 +
          Math.sin(t6) * waveAmplitude * 0.25;
        
        const xOffset = Math.sin(xOffsetPhase + point.t * Math.PI) * 0.1;
        
        const posIndex = index * 3;
        positions[posIndex] = point.x + xOffset;
        positions[posIndex + 1] = currentWaveY;
        positions[posIndex + 2] = point.baseZ;
      }
      
      // Performans: Fill noktalarını güncelle (daha optimize)
      const fillIndices = fillIndicesRef.current;
      for (let i = 0; i < fillIndices.length; i++) {
        const index = fillIndices[i];
        const point = wavePoints[index];
        
        // Optimize: Aynı t değeri için dalga yüksekliğini tekrar hesapla
        const t2 = point.t * Math.PI * 2 + animatedPhase;
        const t4 = point.t * Math.PI * 4 + animatedPhase * 1.5;
        const t6 = point.t * Math.PI * 6 + animatedPhase * 2;
        
        const currentWaveY = 
          Math.sin(t2) * waveAmplitude +
          Math.sin(t4) * waveAmplitude * 0.5 +
          Math.sin(t6) * waveAmplitude * 0.25;
        
        const xOffset = Math.sin(xOffsetPhase + point.t * Math.PI) * 0.1;
        
        const originalWaveY = point.originalWaveY;
        const originalFillHeight = originalWaveY - bottomY;
        const currentFillHeight = currentWaveY - bottomY;
        const ratio = originalFillHeight > 0 ? currentFillHeight / originalFillHeight : 1;
        
        const posIndex = index * 3;
        positions[posIndex] = point.x + xOffset;
        positions[posIndex + 1] = bottomY + (point.baseY - bottomY) * ratio;
        positions[posIndex + 2] = point.baseZ;
      }
      
      // Buffer'ı güncelle
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} frustumCulled={true} />
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d-container">
      {/* Background gradient */}
      <div className="scene3d-background" />
      
      {/* Grid pattern */}
      <div className="scene3d-grid" />
      
      {/* 3D Wave Animation */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ position: 'absolute', inset: 0 }}
        gl={{ 
          alpha: true, 
          antialias: false, // Performans için antialiasing kapalı
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        dpr={[1, 1.5]} // DPR sınırlandırıldı (performans için)
      >
        <WaveSpheres />
      </Canvas>
    </div>
  );
}
