class Rectangle {
  constructor(width, height) {
    this._width = width;   // Use _ to signify internal properties
    this._height = height; // Same here
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Pass the side value as both width and height
  }

  getPerimeter() {
    return 4 * this._width; // Use `this.width` or `this.height` as both are the same in a square
  }
}



// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
