class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        return console.log("Meo Meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        return console.log("Gâu Gâu");
    }
}
const meo1 = new Cat("Mèo Múp");
const cho1 = new Dog("Chó con");
meo1.makeNoise();
meo1.printName();
cho1.makeNoise();
cho1.printName();
