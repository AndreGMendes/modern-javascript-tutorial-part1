const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  // We can add methods to an object and use this keyword to access the properties of the object
  area: function () {
    return this.width * this.height;
  },
};

// Object literals are great for creating objects that only need one instance. If we needed two Rectangles, we would have to create two objects

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 20,
  area: function () {
    return rectangle2.width * rectangle2.height;
  },
};

console.log(rectangle.area());
console.log(rectangle2.area());


// -------------------------------------
// ANDY
// -------------------------------------
const rectangle3 = {
  name: 'Rectangle 3',
  width: 1,
  height: 2,
  theFunction: {
    width: 10,
    height: 20,
    area: function () {
      const width= 100;
      const height= 200;

      let resultA = rectangle3.width * rectangle3.height;
      let resultB = this.width * this.height;
      let resultC = width * height;
      return `${resultA} :: ${resultB} :: ${resultC}`;
    },
  }
};

console.log(rectangle3.theFunction.area());


// ---------------------------------------------------------
// var width = 10000; // Var binds variables to the window object
// var height = 20000; // Var binds variables to the window object

const rectangle4 = {
  name: 'Rectangle 4',
  width: 1,
  height: 2,
  theFunction: {
    width: 10,
    height: 20,
    area: () => {
      const width= 100;
      const height= 200;

      let resultA = rectangle3.width * rectangle3.height;
      let resultB = this.width * this.height;
      let resultC = width * height;

      console.log(window.width)
      return `${resultA} :: ${resultB} :: ${resultC}`;
    },
  }
};

console.log(rectangle4.theFunction.area());