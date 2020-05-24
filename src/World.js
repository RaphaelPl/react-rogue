import { Map } from "rot-js";
import Player from "./Player";

class World {
  constructor(width, height, tilesize) {
    this.width = width;
    this.height = height;
    this.tilesize = tilesize;
    this.entities = [new Player(0, 0, 16)];

    // create 2d array for the world map on the canvas
    this.worldmap = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.worldmap[x] = new Array(this.height);
    }
  }

  // grab player from list of entities
  get player() {
    return this.entities[0];
  }

  moveToSpace(entity) {
    for (let x = entity.x; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.worldmap[x][y] === 0) {
          entity.x = x;
          entity.y = y;
          return;
        }
      }
    }
  }
  // check to see if player or entity is within a wall by checking the co-ords
  isWall(x, y) {
    return (
      this.worldmap[x] === undefined ||
      this.worldmap[y] === undefined ||
      this.worldmap[x][y] === 1
    );
  }

  movePlayer(dx, dy) {
    // CREATE COPY OF PLAYER TO CHECK FOR WALLS
    let tempPlayer = this.player.copyPlayer();
    tempPlayer.move(dx, dy);
    if (this.isWall(tempPlayer.x, tempPlayer.y)) {
      console.log(`Way blocked at ${tempPlayer.x}: ${tempPlayer.y}`);
    } else {
      this.player.move(dx, dy);
    }
  }

  //   randomly places 1 or 0 in each element of the 2d array
  createCellularMap() {
    let map = new Map.Cellular(this.width, this.height, { connected: true });
    map.randomize(0.5);
    var userCallback = (x, y, value) => {
      if (x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1) {
        this.worldmap[x][y] = 1;
        return;
      }
      this.worldmap[x][y] = value === 0 ? 1 : 0;
    };
    map.create(userCallback);
    map.connect(userCallback, 1);
  }
  //   draw looks into array and if 1 draws a wall, if 0 moves to next element
  // draw player and entities
  draw(context) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.worldmap[x][y] === 1) this.drawWall(context, x, y);
      }
    }
    // draw items with entity array
    this.entities.forEach((entity) => {
      entity.draw(context);
    });
  }

  // draw and define the wall space
  drawWall(context, x, y) {
    context.fillStyle = "#5f0b0d";
    context.fillRect(
      x * this.tilesize,
      y * this.tilesize,
      this.tilesize,
      this.tilesize
    );
  }
}

export default World;
