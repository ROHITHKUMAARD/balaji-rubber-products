import { useGLTF } from "@react-three/drei";

function IndustrialModel() {
  const model = useGLTF("/models/machine.glb");

  return (
    <primitive
      object={model.scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
}

export default IndustrialModel;