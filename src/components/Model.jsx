// imports
import { useState, useEffect, useRef } from "react";
import { useGLTF, Center, Resize } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useAppContext } from "../context/store";

export default function Model() {
  const context = useAppContext();

  let model = useGLTF(`models/model.glb`);
  const modelRef = useRef();

  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? 1 : 0,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <animated.group scale={scale}>
      <Resize scale={2}>
        <Center>
          <primitive object={model.scene} ref={modelRef} />
        </Center>
      </Resize>
    </animated.group>
  );
}
