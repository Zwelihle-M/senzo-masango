import React from "react";

const BlobAnimations = () => {
  return (
    <div className="relative w-full max-w-lg opacity-20 -z-50">
      {/* ellipse 1 */}
      <div className="absolute top-0 left-[800px] w-[650px] h-[650px] bg-gradient-to-r from-primaryPurple to-electricPurple rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      {/* ellipse 2 */}
      <div className="absolute top-[360px] -left-[167px] w-[650px] h-[650px] bg-gradient-to-r from-primaryPurple via-electricPurple to-darkPurple rounded-full mix-blend-multiply filter  blur-3xl  animate-blob animation-delay-8000" />
      {/* ellipse 3 */}
      <div className="absolute top-[500px] left-[650px] w-[650px] h-[650px] bg-gradient-to-r from-darkPurple via-primaryPurple to-darkPurple rounded-full mix-blend-multiply filter  blur-3xl  animate-blob animation-delay-10000" />
      {/* ellipse 4 */}
      <div className="absolute -top-[150px] -left-[70px] w-[650px] h-[650px] bg-gradient-to-r from-electricPurple via-primaryPurple to-darkPurple rounded-full mix-blend-multiply filter  blur-3xl  animate-blob animation-delay-12000 " />
    </div>
  );
};

export default BlobAnimations;
