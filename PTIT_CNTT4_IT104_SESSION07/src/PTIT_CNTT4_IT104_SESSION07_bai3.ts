abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract makeNoise():void;
    public printName():void{
        console.log(this.name);
    }
}
class Cat extends Animal{
    public makeNoise(): void {
        return console.log("Meo Meo");
    }
}
class Dog extends Animal{
    public makeNoise(): void {
        return console.log("Gâu Gâu"); 
    }
}
const meo1 = new Cat ("Mèo Múp");
const cho1 = new Dog("Chó con");
meo1.makeNoise();
meo1.printName();
cho1.makeNoise();
cho1.printName()