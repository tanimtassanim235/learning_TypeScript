// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number; name: string}) => {
//     return [value];
// }
const createArrayWithGeneric = <T>(value: T) => {
   return [value];   
}

const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next Level",
});


// tuple 

const createArrayWithTuple = (param1: {id: string, name: string}, param2: string) => [
    param1,
    param2,
];

const createArrayTupleWithGeneric = <X,Y> (param1: X, param2: Y) => [
    param1,
    param2
];


const res1 = createArrayTupleWithGeneric("Tanim", false);
const res2 = createArrayTupleWithGeneric(221, {name: "Tanim"});