import Entity from "./Entity";

class Player extends Entity {
  attributes = {
    name: "Player",
    ascii: "@",
    health: 10,
  };

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  // copy player to allow check to see if player is currently in wall
  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player;
