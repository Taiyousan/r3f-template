// imports
import {
  CameraControls,
  Center,
  ContactShadows,
  Environment,
  Resize,
} from "@react-three/drei";

// components
import Model from "./Model";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 15, 10]} />
      {/* <Environment preset="forest" /> */}
      <CameraControls />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -2, 0]}
        opacity={0.5}
        width={10}
        height={10}
        blur={0.5}
        far={10}
      />

      <Center>
        <Model />
      </Center>
    </>
  );
}
