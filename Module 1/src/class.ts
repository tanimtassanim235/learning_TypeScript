// oop - class - object

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name:string, species: string, sound: string)
    {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} is making sound`);
    }
}

const cat = new Animal("Meio Meio", "Cat", "Meao Meao");

cat.makeSound();

// parameter properties

class Animal2 {
   

    constructor(public name:string,public species: string, public sound: string)
    {
    }

    makeSound(){
        console.log(`${this.name} is making sound`);
    }
}
