import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import "../styles/Stakeholders.css";
import CTA from "./CTA";

function FloatingCard({ position, title, points, iconColor, size }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(t) * 0.3;
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.02;
    groupRef.current.scale.setScalar(hovered ? 1.05 : 1);
  });

  return (
    <group
      ref={groupRef}
      position={position}
      scale={[1, 1, 1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[size.width, size.height, 0.3]} />
        <meshStandardMaterial
          color="#111"
          transparent
          opacity={0.2}
          roughness={0.05}
          metalness={0.8}
          emissive={hovered ? iconColor : "#000"}
          emissiveIntensity={hovered ? 0.1 : 0}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[size.width + 0.2, size.height + 0.2, 0.1]} />
        <meshBasicMaterial color={iconColor} transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, size.height / 2 - 1, 0.2]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color={iconColor}
          emissive={iconColor}
          emissiveIntensity={0.2 + Math.sin(Date.now() * 0.001) * 0.1}
        />
      </mesh>

      <Html
        position={[0, 0, 0.35]}
        zIndexRange={[0, 100]}
        center={true}
        distanceFactor={10}
        transform
        wrapperClass="stakeholder-html"
        style={{ pointerEvents: "none" }}
      >
        <div className={`stakeholder-card ${hovered ? 'hovered' : ''}`}>
          <h3>{title}</h3>
          <ul>
            {points.map((p, i) => (
              <li key={i}>
                <span className="icon">●</span>
                <span className="text">{p}</span>
              </li>

            ))}
          </ul>
        </div>
      </Html>
    </group>
  );
}

export default function Stakeholders3D() {

  const fov = 60;

    const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Slider config for small screens
  const isMobile = windowSize.width <= 768;
   const scrollRef = useRef(null);

  const cameraZ = isMobile ? 12 : 15;

  // Calculate visible height in world units
  const visibleHeight =
    2 * Math.tan((fov * Math.PI) / 360) * cameraZ;

  // 70vh equivalent
  const meshHeight = isMobile
    ? visibleHeight * 0.8
    : 16;




  useEffect(() => {
    const handleResize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stakeholders = [
    {
      title: "3D Enthusiasts & Innovators",
      iconColor: "#8b5cf6",
      points: [
        "Upload STL files & check printability",
        "Get feedback on errors",
        "Connect with designers",
        "Get multiple printer quotes",
        "Choose services by price, quality, reviews",
      ],
    },
    {
      title: "3D Designers",
      iconColor: "#b8b8ff",
      points: [
        "Receive client requests",
        "Work with pre-analyzed STL files",
        "Save time with validation insights",
        "Showcase expertise via ratings",
        "Earn by offering modeling services",
      ],
    },
    {
      title: "3D Printing Providers",
      iconColor: "#dbafe9",
      points: [
        "Receive validated STL files",
        "Get jobs matched to machines/materials",
        "Submit competitive quotes",
        "Reduce print failures & waste",
        "Reach global customers",
      ],
    },
  ];
  const [activeCard, setActiveCard] = useState(0);



  // Card positions
  const getPositions = () => {
    if (isMobile) {
      // Arrange cards horizontally for scrolling
      return stakeholders.map((_, idx) => [(idx - activeCard) * 12, 0, 0]);    } else {
      // Desktop layout
      return [[-11, 0, 0], [0, 0, 0], [11, 0, 0]];
    }
  };

  const positions = getPositions();
  const cardSize = {
    width: isMobile ? 7 : 10,
    height: meshHeight,
  };
  const cameraPos = isMobile ? [windowSize.width / 100, 0, 12] : [0, 0, 15];
  return (
    <section className="stakeholders-section" style={{ minHeight: "100vh", padding: "2rem", position: "relative", overflow: "hidden" }}>
      <h2
        className="section-title"
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginBottom: "3rem",
          background: "linear-gradient(90deg, #00f5ff 5%, #7d98f3 50%, #8b5cf6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "fadeInUp 1s ease-out",
        }}
      >
        How We Empower You
      </h2>

      <div className="canvas-scroll-wrapper">
        {isMobile && (
          <button className="scroll-arrow left"
            onClick={() => scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' })}>
            ⟵
          </button>
        )}

        {/* Horizontal scroll wrapper for mobile */}
        <div className={`canvas-wrapper ${isMobile ? 'mobile-scroll' : ''}`} ref={scrollRef}>
          <Canvas
            style={{ width: "100%", minHeight: isMobile ? "300px" : "100vh", cursor: isMobile ? 'grab' : 'auto' }}
            camera={{ position: cameraPos, fov: 60 }}
          >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#8b5cf6" />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#00f5ff" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {stakeholders.map((s, idx) => (
              <FloatingCard
                key={idx}
                position={positions[idx]}
                title={s.title}
                points={s.points}
                iconColor={s.iconColor}
                size={cardSize}
              />
            ))}
          </Canvas>
        </div>
          {isMobile && (
          <button className="scroll-arrow right"
            onClick={() => scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' })}>
            ⟶
          </button>
        )}


      </div>

      

      {isMobile && <div className="scroll-hint">⟵ Swipe →</div>}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <CTA variant="joinCommunity" />
      </div>
    </section>
  );
}
