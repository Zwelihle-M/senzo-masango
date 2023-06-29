import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload ,Environment,Text  } from "@react-three/drei";

import ModelLoader from "./ModelLoader";

export default function KrkClassicModel() {

    function Model(props) {
        const { scene } = useGLTF("/krk_classic_5.glb");
        return <primitive object={scene} {...props} />;
      }

  return (
      <Canvas
      // Set device pixel ratio
      dpr={[1, 2]}
      // Set camera field of view
      camera={{ fov: 45 }}
      // Set canvas position style
      style={{ position: "relative" }}
      // Enable shadows
      shadows
      // Preserve the canvas buffer after rendering
      gl={{ preserveDrawingBuffer: true }}
      // Only update the canvas when it's demanded
      frameloop="demand"
    >
      {/* Control camera orbit */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        touchEnabled={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* Add ambient light */}
      <ambientLight intensity={1} />
      {/* Add hemisphere light */}
      <hemisphereLight intensity={0.1} />
      {/* Add point light */}
      <pointLight
        position={[10, 20, 10]}
        intensity={1}
        distance={50}
        color="#ffffff"
      />
      {/* Add spot light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Environment preset="city" />
 
      {/* Load model and show loading screen */}
      <Suspense fallback={<ModelLoader  />}>
        <Model scale={1} position={[0, -1, 0]}/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
