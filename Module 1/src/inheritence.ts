class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`Eni etoo ${numOfHours} ghontaa sleep koree`);
  }
}

class Student extends Parent{}

const student_1 = new Student(`Mr. Fakibaaz`, 18, "Bangladesh");

student_1.getSleep(12);
