class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
    info() {
        this.greet();
    }
}
const animal = new Animal("エウレカ",2);
animal.info();