const user = {
    id: 123,
    name: {
        firstName: "Tanim",
        middleName: "Bin",
        lastName: "Tassanim",
    },
    gender: "male",
    favColor: "black",
};

const {favColor, name: {middleName: myMiddleName}} = user;

console.log(myMiddleName);