import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";

function BoltPattern() {
  const bolts = [];

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;

    bolts.push(
      <mesh
        key={i}
        position={[
          0.18,
          Math.cos(angle) * 1.05,
          Math.sin(angle) * 1.05,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <cylinderGeometry
          args={[0.12, 0.12, 0.15, 32]}
        />
        <meshStandardMaterial color="#111111" />
      </mesh>
    );
  }

  return bolts;
}

function RiceRoller({ progress }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const targetRotation =
      progress * (Math.PI * 3);

    group.current.rotation.y +=
      (
        targetRotation -
        group.current.rotation.y
      ) * 0.08;

    group.current.rotation.x +=
      (
        0.15 -
        group.current.rotation.x
      ) * 0.08;

    group.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 0.8
      ) * 0.05;
  });

  return (
    <Float
      speed={0.35}
      rotationIntensity={0}
      floatIntensity={0.08}
    >
      <group
        ref={group}
        rotation={[0.15, 0, 0]}
        scale={0.82}
      >
        {/* RUBBER BODY */}
        <mesh
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[1.7, 1.7, 5.6, 128]}
          />

          <meshPhysicalMaterial
            color="#1565c0"
            roughness={0.35}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* REAR FLANGE */}
        <mesh
          position={[-2.85, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[1.85, 1.85, 0.18, 128]}
          />

          <meshPhysicalMaterial
            color="#e5e7eb"
            metalness={1}
            roughness={0.12}
          />
        </mesh>

        {/* FRONT FLANGE */}
        <mesh
          position={[2.85, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[1.95, 1.95, 0.22, 128]}
          />

          <meshPhysicalMaterial
            color="#f8fafc"
            metalness={1}
            roughness={0.1}
          />
        </mesh>

        {/* INNER FLANGE */}
        <mesh
          position={[2.72, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[1.35, 1.35, 0.25, 128]}
          />

          <meshPhysicalMaterial
            color="#cbd5e1"
            metalness={1}
            roughness={0.14}
          />
        </mesh>

        {/* STEEL SLEEVE */}
        <mesh
          position={[2.6, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[1.05, 1.05, 0.7, 128]}
          />

          <meshPhysicalMaterial
            color="#9ca3af"
            metalness={1}
            roughness={0.18}
          />
        </mesh>

        {/* INNER BORE */}
        <mesh
          position={[2.45, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[0.72, 0.72, 1.25, 128]}
          />

          <meshStandardMaterial
            color="#020617"
            roughness={1}
          />
        </mesh>

        {/* DEEP BORE */}
        <mesh
          position={[2.1, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[0.55, 0.55, 2.2, 128]}
          />

          <meshStandardMaterial
            color="#000000"
            roughness={1}
          />
        </mesh>

        <BoltPattern />
      </group>
    </Float>
  );
}

function ProductScene({
  progress = 0,
}) {
  return (
    <div
      className="
        h-[760px]
        w-full
        relative
        overflow-visible
      "
    >
    {/* PREMIUM RUBBER */}
<div className="hidden lg:flex absolute top-[28%] left-[-12%] items-center gap-4 z-20">
  <span className="text-[11px] tracking-[5px] uppercase text-cyan-300 whitespace-nowrap">
    Premium Rubber Compound
  </span>
  <div className="w-48 h-px bg-cyan-400/70" />
</div>

{/* STEEL CORE */}
<div className="hidden lg:flex absolute bottom-[35%] left-[-10%] items-center gap-4 z-20">
  <span className="text-[11px] tracking-[5px] uppercase text-cyan-300 whitespace-nowrap">
    Steel Core
  </span>
  <div className="w-40 h-px bg-cyan-400/70" />
</div>


{/* PRECISION FLANGE */}
<div className="hidden lg:flex absolute top-[38%] right-[-28%] items-center gap-4 z-20">
  <div className="w-48 h-px bg-cyan-400/70" />
  <span className="text-[11px] tracking-[5px] uppercase text-cyan-300 whitespace-nowrap">
    Precision Flange
  </span>
</div>

{/* INNER BORE */}
<div className="hidden lg:flex absolute bottom-[39%] right-[-18%] items-center gap-4 z-20">
  <div className="w-40 h-px bg-cyan-400/70" />
  <span className="text-[11px] tracking-[5px] uppercase text-cyan-300 whitespace-nowrap">
    Inner Bore
  </span>
</div>

      <Canvas
        camera={{
          position: [9, 2.3, 8],
          fov: 30,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference:
            "high-performance",
        }}
      >
        <ambientLight intensity={1.3} />

        <directionalLight
          position={[10, 10, 8]}
          intensity={3}
        />

        <directionalLight
          position={[-10, 5, 5]}
          intensity={2}
        />

        <spotLight
          position={[0, 10, 8]}
          intensity={3}
          angle={0.35}
          penumbra={1}
        />

        <Environment preset="city" />

        <RiceRoller
          progress={progress}
        />

        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={0.35}
          scale={15}
          blur={2.5}
          far={10}
        />
      </Canvas>
    </div>
  );
}

export default ProductScene;