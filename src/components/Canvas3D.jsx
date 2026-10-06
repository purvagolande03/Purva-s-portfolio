import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

// Generating random particles around a sphere
const generateParticles = (count) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2.5 + Math.random() * 1.5;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const DigitalCore = () => {
  const coreRef = useRef();
  const particlesRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const shouldReduceMotion = useReducedMotion();

  const particlePositions = useMemo(() => generateParticles(800), []);

  useFrame((state, delta) => {
    if (shouldReduceMotion) return;
    
    // Slow rotation
    const rotationSpeed = 0.2;
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * rotationSpeed;
      coreRef.current.rotation.x += delta * rotationSpeed * 0.5;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * rotationSpeed * 0.8;
      particlesRef.current.rotation.z += delta * rotationSpeed * 0.3;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.5;
      ringRef1.current.rotation.y -= delta * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x -= delta * 0.3;
      ringRef2.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#38bdf8" />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#818cf8" />
      
      {/* Central glowing core */}
      <Sphere ref={coreRef} args={[1.5, 32, 32]}>
        <meshStandardMaterial 
          color="#1e293b" 
          emissive="#38bdf8"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Inner solid core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial 
          color="#0f172a" 
          emissive="#818cf8"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </mesh>

      <mesh ref={ringRef2} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
      </mesh>

      {/* Orbiting Particles */}
      <Points ref={particlesRef} positions={particlePositions} stride={3}>
        <PointMaterial 
          transparent 
          color="#818cf8" 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const Canvas3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
        <DigitalCore />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false} 
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
