class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
}
const animal = new Animal();
animal.greet();