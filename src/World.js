class World {
  constructor(width, height, tilesize) {
    this.width = width;
    this.height = height;
    this.tilsize = tilesize;
    this.worldmap = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      this.worldmap[x] = new Array(this.height);
    }
    this.createRandomMap()
  }
  createRandomMap() {
      for (let x=0; x < this.width; x++) {
          for (let y=0; y < this.height; y ++)
      }

  }

}
