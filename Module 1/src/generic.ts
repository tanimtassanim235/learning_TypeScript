type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers: GenericArray<number> = [4, 7, 11];

const isEligibleList: GenericArray<boolean> = [true, false, true, false];


const sqrFunc = (value: number) => {
    return value * value;
};

sqrFunc(3);


const userList: GenericArray<{name: string; age: number}> = [
    {
        name: 'Mr. X',
        age: 22,
    },
    {
        name: 'Mr. Y',
        age: 25,
    }
]

// object kee {} bracket err modee defined kortee hobee