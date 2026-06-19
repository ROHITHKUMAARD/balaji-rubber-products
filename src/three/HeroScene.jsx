import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { useRef } from "react";

function Ring({
  position,
  scale,
  color,
}) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;

    easing.dampE(
      ref.current.rotation,
      [
        state.pointer.y * 0.15,
        state.pointer.x * 0.2,
        0,
      ],
      0.3,
      delta
    );
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        <torusGeometry
          args={[1, 0.18, 24, 100]}
        />

        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <color
        attach="background"
        args={["#050816"]}
      />

      <fog
        attach="fog"
        args={["#050816", 10, 25]}
      />

      <ambientLight intensity={0.7} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
      />

      <pointLight
        position={[-5, 2, 4]}
        intensity={6}
        color="#22d3ee"
      />

      <Ring
        position={[-3, 1.5, -2]}
        scale={1.2}
        color="#22d3ee"
      />

      <Ring
        position={[2.5, -1, -1]}
        scale={1}
        color="#94a3b8"
      />

      <Ring
        position={[0, 0, -3]}
        scale={1.6}
        color="#ffffff"
      />
    </>
  );
}

function HeroScene() {
  return (
    <Canvas
      dpr={1}
      gl={{
        antialias: true,
        powerPreference:
          "high-performance",
      }}
      camera={{
        position: [0, 0, 10],
        fov: 40,
      }}
    >
      <SceneContent />
    </Canvas>
  );
}

export default HeroScene;