import React, { useEffect, useRef, useState } from "react";
import InputManager from "./InputManager";
import Player from "./Player";
import World from "./World";

const ReactRogue = ({ width, height, tilesize }) => {
  // hook to give us handy access to canvas
  const canvasRef = useRef();
  const [world, setWorld] = useState(new World(width, height, tilesize));
  const [player, setPlayer] = useState(new Player(12, 12, tilesize));
  // allows us to call this class and call bind keys on the document
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}: ${JSON.stringify(data)}`);
    // shallow copy of player and placed into newPlayer
    let newPlayer = new Player();
    Object.assign(newPlayer, player);
    newPlayer.move(data.x, data.y);
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
    // ctx.fillRect(player.x, player.y, 16, 16)
    // ctx.fillStyle = "#000"
    world.draw(ctx);
    player.draw(ctx);
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
