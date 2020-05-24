class Entity {
  constructor(x, y, size, attributes) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.atttributes = { ...attributes };
  }

  draw(context) {
    context.fillStyle = this.attributes.color || "goldenrod";
    context.textBasline = "hanging";
    context.font = "16 px Helvetica";
    context.fillText(
      this.attributes.ascii,
      this.x * this.size +
        (this.atttributes.offset ? this.atttributes.offset.x : 0),
      this.y * this.size +
        (this.atttributes.offset ? this.atttributes.offset.y : 0)
    );
  }
}

export default Entity;
