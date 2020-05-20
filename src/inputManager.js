// creating a class to handle the player input via obsever pattern
class inputManager {
  observer = [];

  subscribe(fn) {
    this.observer.push(fn);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }
  broadcast(action, data) {
    this.observers.forEach((subscriber) => subscriber(action, data));
  }
  handleKeys = (e) => {
    e.preventDefault();

    //   create a managr for the keys being pressed to determine movement
    switch (e.keyCode) {
      //   left arrow, action is move and the data being passed in is a vector
      case 37:
        this.broadcast("move", { x: -1, y: 0 });
        break;
      //   up arrow, action move and data is vector
      case 38:
        this.broadcast("move", { x: 0, y: -1 });
        break;
      //   right arrow
      case 39:
        this.broadcast("move", { x: 1, y: 0 });
        break;
      // down arrow
      case 38:
        this.broadcast("move", { x: 0, y: 1 });
        break;
    }
  };
}
