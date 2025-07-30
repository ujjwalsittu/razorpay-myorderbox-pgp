"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Trail } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    let t = 0;
    const id = requestAnimationFrame(function animate() {
      t += 0.01;
      if (ref.current) {
        ref.current.position.y = Math.sin(t) * 2;
        ref.current.rotation.y += 0.01;
      }
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Trail
        width={2}
        length={5}
        color={"hotpink"}
        target={ref as React.RefObject<THREE.Object3D>}
        attenuation={(w) => w * 0.5}
      />
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="hotpink"
          emissive="hotpink"
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
}

export default function SpaceScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {mounted && (
        <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* Star background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Floating sphere with trail */}
          <FloatingSphere />

          {/* Planets */}
          <mesh position={[-10, 5, -10]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>

          <mesh position={[12, -4, -12]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="green" />
          </mesh>

          {/* Postprocessing Effects */}
          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
            />
            <DepthOfField
              focusDistance={0.02}
              focalLength={0.02}
              bokehScale={3}
            />
          </EffectComposer>

          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </div>
  );
}
