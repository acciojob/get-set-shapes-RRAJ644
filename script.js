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
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Pass the side value as both width and height
  }

  getPerimeter() {
    return 4 * this.width; // Use `this.width` or `this.height` as both are the same in a square
  }
}

// Example usage:
const square = new Square(5);
console.log(square.getArea()); // Output: 25
console.log(square.getPerimeter()); // Output: 20


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
