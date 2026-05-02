// const userAge = 21

const jobEligible = (age: number) => {
    // if(age >= 21)
    // {
    //     console.log("You are eligible");
    // }
    // else
    // {
    //     console.log("You are not eligible");
    // }

    // use ternary
    const result = age >= 21 ? "You are eligible" : "You are not eligible";
    console.log(result);
}

// jobEligible(21);


// nullish coalescing operator: null / undefined

const userTheme = undefined;
const location = null;

const selectedLocation = location ?? "IP address"


const selectedTheme = userTheme ?? "Light theme";

console.log(selectedLocation);
console.log(selectedTheme);