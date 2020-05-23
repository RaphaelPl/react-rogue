class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  draw(context) {
    context.fillStyle = "#006600";
    context.textBaseline = "hanging";
    context.font = "16px";
    context.fillText("@", this.x * this.size, this.y * this.size);
  }
  // copy player to allow check to see if player is currently in wall
  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player;
