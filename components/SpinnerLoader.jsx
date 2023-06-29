import React from "react";
import { TailSpin } from "react-loader-spinner";
const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin
        height="40"
        width="40"
        color="#7F00FF"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default SpinnerLoader;
