import React, { useEffect, useRef } from "react";
import InputManager from "./InputManager";

const ReactRogue = ({ width, height, tilesize }) => {
  // hook to give us handy access to canvas
  const canvasRef = useRef();
  // allows us to call this class and call bind keys on the document
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}: ${JSON.stringify(data)}`);
  };

  useEffect(() => {
    console.log("bind input");
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  // useEffect is a lifecycle hook that
  useEffect(() => {
    console.log("draw to canvas");
    // context
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    ctx.fillStyle = "#000";
    ctx.fillRect(12, 22, 16, 16);
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

export default ReactRogue;
