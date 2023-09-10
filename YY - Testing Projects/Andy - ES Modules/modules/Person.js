class Person {
    constructor (name, age) {
        this._name = name,
        this._age = age
    }

    greet () {
        console.log(`${this._name} who has ${this._age} years was created.`)
    }
}


class Car {
    constructor (model, brand) {
        this._model = model,
        this._brand = brand
    }

    greet () {
        console.log(`${this._model} from brand ${this._brand} was created.`)
    }
}


class MobilePhone {
    constructor (model, brand) {
        this._model = model,
        this._brand = brand
    }

    greet () {
        console.log(`${this._model} from brand ${this._brand} was created.`)
    }
}

// A version - Using 'Default' keyword gives error. (With Destructuring without aliases here on Export)
// export {
//     Person 
// }  


// B version - Using 'Default' keyword gives error. (With Destructuring with aliases here on Export)
// export  {
//     Person as PersonCenas 
// }  


// C version - Must use 'Default' keyword. (Without Destructuring without aliases here on Export)
// export default  {
//     Person 
// }  


// D version - Must use 'Default' keyword. (Without Destructuring without aliases here on Export)
export default {
    Person,
    Car
}  

export {
    MobilePhone
}  