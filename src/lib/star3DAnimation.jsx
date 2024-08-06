/* eslint-disable react/no-unknown-property */
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color='#ffffff' size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0, position: "absolute" }}>
      <Canvas camera={{ position: [0, 0, 1] }} style={{ height: "100%", width: "100%" }}>
        <Stars />
      </Canvas>
    </div>
  );
}
