import React, { useEffect, useRef, useState } from "react";
import InputManager from "./InputManager";

const ReactRogue = ({ width, height, tilesize }) => {
  // hook to give us handy access to canvas
  const canvasRef = useRef();
  const [player, setPlayer] = useState({ x: 64, y: 128 });
  // allows us to call this class and call bind keys on the document
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}: ${JSON.stringify(data)}`);
    // shallow copy of player and placed into newPlayer
    let newPlayer = { ...player };
    newPlayer.x += data.x * tilesize;
    newPlayer.y += data.y * tilesize;
    setPlayer(newPlayer);
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
    ctx.fillRect(player.x, player.y, 16, 16);
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
