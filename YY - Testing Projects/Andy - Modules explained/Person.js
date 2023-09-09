class Person {
    constructor (name, age) {
        this._name = name,
        this._age = age
    }

    greet () {
        console.log(`${this._name} who has ${this._age} years was created.`)
    }
}

module.exports = {
    Person,
}
