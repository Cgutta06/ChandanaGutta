import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const ThreeScene = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="white" wireframe />
      </mesh>
    </Canvas>
  );
};

export default ThreeScene;