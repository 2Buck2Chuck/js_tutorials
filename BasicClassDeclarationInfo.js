//There are different parts/areas of class creation we need to understand
//First, I like to create a class with a class declaration seen below:

class Rectangle {
  constructor() {
    //constructor goes here
  }
  //prototype methods go here
}

//You can also initialize a class using a class expression:

let Rectangle = class /*Rectangle2*/ {
  constructor() {
    //constructor goes here
  }
  //prototype methods goes here
}

/*Rectangle2*/
//You can optionally give a class a second name when using a class expression
//This name is local to the class's body



//The constructor method of a class is a special method for creating and initializing an object created with a class
//The purpose of a constructor is to create a new object and set values for any existing object properties
//There can only be one constructor method per class

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    //The "this" keyword is used because it refers to the new object that becomes the current instance object at initialization
    //The new object is returned as the return value of the constructor
    //We essentially assign the constructor arguments to the newly initialized object of the class
  }
  //Like I said before, the prototype methods go here (what are we doing with these values?)
  calcArea() {
    return this.height * this.width;
  }
  calcPerimeter() {
    return (this.height * 2) + (this.width * 2);
  }
static description = 'I am a rectangle';
static descriptionFunction() {
  return 'I am also a rectangle';
  }
}

let rectangleOne = new Rectangle(20,30);
console.log(rectangleOne.height);
console.log(rectangleOne.width);
console.log(rectangleOne.calcArea());
console.log(rectangleOne.calcPerimeter());
console.log(Rectangle.description);
console.log(Rectangle.descriptionFunction());

//Returns: 20 30 600 100 'I am a rectangle' 'I am also a rectangle'

//calcArea and calcPerimeter are examples of instance methods that use instance data from an instance of the class
//The description property is a static property and the descriptionFunction() is a static method that do not use instance data cnd can be called directly on the class itself
//static properties and methods use the 'static' keyword
