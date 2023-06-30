import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const Preloader = () => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
    });

    return controls.stop;
  });
  return (
    <motion.div
      className="h-screen w-screen flex justify-center items-center bg-graySeven"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <motion.h1 className="text-9xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blushPink to-primaryPurple">
        {rounded}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
