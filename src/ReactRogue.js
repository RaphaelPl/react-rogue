import React, { useEffect, useRef } from "react";

const ReactROgue = ({ width, height, tilesize }) => {
  // hook to give us handy access to canvas
  const canvasRef = useRef();

  // useEffect is a lifecycle hook that
  useEffect(() => {
    console.log("draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    ctx.fillStyle='#0000'
    // ctx.
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default ReactROgue;
