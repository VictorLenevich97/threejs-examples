import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useBox, Physics } from "@react-three/cannon";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach={"geometry"} />
      <meshLambertMaterial attach={"material"} color="green" />
    </mesh>
  );
}

function Plane() {
  const [ref] = useBox(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
      <meshLambertMaterial attach={"material"} color="lightblue" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
