class World {
  constructor(width, height, tilesize) {
    this.width = width;
    this.height = height;
    this.tilsize = tilesize;

    // create 2d array for the world map on the canvas
    this.worldmap = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.worldmap[x] = new Array(this.height);
    }
    this.createRandomMap();
  }
//   randomly places 1 or 0 in each element of the 2d array
  createRandomMap() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.worldmap[x][y] = Math.round(Math.random());
      }
    }
  }
//   draw looks into array and if 1 draws a wallm, if 0 moves to next element
  draw(context) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.worldmap[x][y] === 1) this.drawWall(context, x, y);
      }
    }
  }
  drawWall(context, x, y) {
    context.fillStyle = "#000";
    context.fillRect(
      x * this.tilesize,
      y * this.tilesize,
      this.tilsize,
      this.tilesize
    );
  }
}

export default World
