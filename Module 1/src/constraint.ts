// constraint: strict rules deya


type Student = {id: number; name: string; dateOfBirth: string; class: string};


const addStudentToCourse  = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Hackathon",
        ...studentInfo,
    };
};

const student1 = {
    id: 123,
    name: "Tanim",
    hasPen: true,
};

const student2 = {
    id: 253,
     name: "Tawhid Bin Alam",
     hasCar: true,
     isPublic: true,
     class: '12',
     dateOfBirth: '12-12-25'
};

const result = addStudentToCourse(student2);
console.log(result);