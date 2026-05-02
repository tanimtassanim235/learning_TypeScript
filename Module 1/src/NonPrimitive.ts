// array , object
let bazarlist = ['egg', 'sugar', 'fish'];

let mixarr = [12, 'nin', 34, 'halim', 57, 'sabib', 12 , 43];

mixarr.push(23);
// mixarr.push(boolean);

let coordinates: [number, number] = [20, 30];

let TanimNameAndRoll: [string, number] = ['Tanim', 88888888888888888888888888888888888888888888888888888882];

// reference 
const user: {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    organization: "Google"; //literal type 
} = { 
    firstName: "Jhankar",
    lastName: "Mahbub",
    organization: "Google",
};

// user.organization = "Google Web Engine";

console.log(user);