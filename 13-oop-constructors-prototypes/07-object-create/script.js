const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.height === this.width;
  },
};

function createRectangle(heightVAR, widthVAR) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: heightVAR,
    },
    width: {
      value: widthVAR,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());


console.log('\n\n')

// -------------------------------------------
// USING 'CLASS - CONSTRUTOR' VERSION
// -------------------------------------------

class createRectangleCLASS {

  constructor (heightVAR, widthVAR) {
    return Object.create(rectanglePrototypes, { 
      height: {
        value: heightVAR,
      },
      width: {
        value: widthVAR,
      },
    });
  }

}

const rectObject1FromClass = new createRectangleCLASS(10, 20);
console.log(rectObject1FromClass);
console.log(rectObject1FromClass.area());
console.log(rectObject1FromClass.isSquare());

const rectObject2FromClass = new createRectangleCLASS(20, 20);
console.log(rectObject2FromClass.area());




class createRectangleCLASSWITHPROTOTYPE {

  constructor (heightX, widthX) {
    this.height = heightX;
    this.width = widthX;
    
    this.area = this.areaX;
    this.perimeter = function () {
      return 2 * (this.width + this.height);
    }
    this.isSquare = () => {
      return this.height === this.width;
    }

   
  }

    areaX () {
    return this.width * this.height;
  }

}

const rectObject1FromClassWithPrototype = new createRectangleCLASSWITHPROTOTYPE(1000, 1000);
console.log(rectObject1FromClassWithPrototype);
console.log(rectObject1FromClassWithPrototype.area());
console.log(rectObject1FromClassWithPrototype);
console.log(rectObject1FromClassWithPrototype.isSquare());


