// imports
import { CameraControls, OrbitControls } from "@react-three/drei";

// components
import Model from "./Model";
import Tag from "./Tag";

// tags array
const tags = [
  {
    text: "React",
    position: [6, 5, 1],
  },
  {
    text: "Three.js",
    position: [-6, 0.5, 0],
  },
  {
    text: "Drei",
    position: [4, 0.5, 2],
  },
  {
    text: "Gsap",
    position: [-4, 0.5, -2],
  },
];

export default function Scene() {
  return (
    <>
      <CameraControls />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {tags.map((tag, index) => (
        <Tag key={index} position={tag.position} text={tag.text} />
      ))}
      <Model />
    </>
  );
}
