import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  // const earth = useGLTF("./sun/ss.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="white" />
      <spotLight
        position={[0, 50, 0]}
        angle={0.12}
        penumbra={0.000001}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={3}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};


const EarthCanvas = () => {
  return (
    <Canvas
      // shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback= {<CanvasLoader />}>
        <OrbitControls
          autoRotate
          // autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// template_a54pboi
//service_xnarp3r

//4v2UtSkbk2Fe0u60Z