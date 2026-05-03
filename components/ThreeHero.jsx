'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

function TorusKnot() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        {/* Shape */}
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        
        {/* Material (this controls look) */}
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="w-full h-[320px] sm:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <pointLight position={[-3, -3, -3]} intensity={1.5} />

        {/* 3D Object */}
        <TorusKnot />

        {/* Optional interaction */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}