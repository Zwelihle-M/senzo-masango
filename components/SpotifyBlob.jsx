import React from 'react'
import { motion } from "framer-motion";

const SpotifyBlob = () => {
  return (
    <div className="relative w-full max-w-lg -z-50 opacity-5">
    <motion.div
      className="absolute top-0 left-[800px] w-[600px] h-[650px] bg-gradient-to-r from-[#1DB954] to-[#1DB954] rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"
      initial={{
        y: -300,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
    />



  </div>
  )
}

export default SpotifyBlob