import Animal from "./animal";

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    info() {}
}

export default Dog;






