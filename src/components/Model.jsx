function Model() {
  return (
    <mesh scale={5}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Model;
