'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import { Text } from '@react-three/drei';

// function FilmReel() {
//   const meshRef = useRef();

//   useFrame(() => {
//     meshRef.current.rotation.z += 0.01;
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
//       <mesh ref={meshRef}>
//         {/* Film reel shape */}
//         <cylinderGeometry args={[1.2, 1.2, 0.3, 64]} />

//         <meshStandardMaterial
//           color="#d4af37"
//           metalness={1}
//           roughness={0.25}
//         />
//       </mesh>
//     </Float>
//   );
// }
function FilmReel() {
  const groupRef = useRef();

  // useFrame(() => {
  //   groupRef.current.rotation.z += 0.01;
  // });
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    groupRef.current.rotation.z = t * 0.5;

    // slight tilt for cinematic feel
    groupRef.current.rotation.x = Math.sin(t) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Main disc */}
      <mesh>
        <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.3} />
      </mesh>

      {/* Center hole */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Side holes (fake reel holes) */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.9, Math.sin(angle) * 0.9, 0]}
          >
            <cylinderGeometry args={[0.15, 0.15, 0.25, 32]} />
            <meshStandardMaterial color="black" />
          </mesh>
        );
      })}
    </group>
  );
}

function Title() {
  return (
    <Text
      position={[0, -2, 0]}
      fontSize={0.4}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      RAAS MEDIA & ENTERTAINMENT
    </Text>
  );
}

function Lights() {
  return (
    <>
      <spotLight position={[5, 5, 5]} intensity={2} angle={0.3} />
      <spotLight position={[-5, 5, 5]} intensity={2} angle={0.3} />
      <ambientLight intensity={0.3} />
    </>
  );
}

function Particles() {
  const particles = new Array(80).fill();

  return particles.map((_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]}
    >
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#d4af37" />
    </mesh>
  ));
}

export default function ThreeHero() {
  return (
    <div className="w-full h-[350px] sm:h-[450px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Lights />
        <FilmReel />
        <Title />
        <Particles />
      </Canvas>
    </div>
  );
}