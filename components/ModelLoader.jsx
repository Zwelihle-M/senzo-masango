import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <h1 className="py-4 max-w-2xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-Blushpink to-violet-500 ">
        {progress.toFixed(2)}%
      </h1>
    </Html>
  );
};

export default ModelLoader;
