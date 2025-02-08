//--- Sheet 3p2 Assignment 3 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 3p2 Assignment 4 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 3p1 Assignment 4 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 2p2 Assignment 6 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 2p1 Assignment 7 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 1p2 Assignment 6 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 1p2 Assignment 7 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----


//--- Sheet 1p1 Assignment 10 --------------------------------------------------------
//-- HTML Code -----

//-- Javascript Code -----

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    static isSquare(rectangle) {
        return rectangle.width * rectangle.height
    }
}

// Usage
const rect = new Rectangle(12, 6);
console.log(rect(getArea)); // 72
console.log(Rectangle.isSquare(rect)); // false

const square = new Rectangle(8, 8);
console.log(rect(square.getArea)); // 64
console.log(Rectangle.isSquare(square)); // true