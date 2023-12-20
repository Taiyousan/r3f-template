import { Html } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Tag({ position, text }) {
  return (
    <Html position={position} occlude="blending">
      <div className="tag">{text}</div>
    </Html>
  );
}
