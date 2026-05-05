// oop: instance of type guard / type narrowing

class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getSleep(numOfHours: number){
        console.log(`${this.name} study ${numOfHours} daily`);
    }
}

class Student extends Person{
    constructor(name: string){
        super(name);
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} study ${numOfHours} hours daily`);
    }
}


class Teacher extends Person{
    constructor(name: string){
        super(name);
    }

    doTeaching(numOfHours: number){
        console.log(`${this.name} teach ${numOfHours} hours daily`);
    }
}

// function guard

const isStudent = (user: Person) => {
    return user instanceof Student;
};


const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(4);
    }
    else if(user instanceof Teacher) {
        user.doTeaching(5);
    }
    else{
        user.getSleep(12);
    }
};

const student1 = new Student("Mr. Hablu");
const teacher1 = new Student("Mr. Bulbul");

getUserInfo(student1);