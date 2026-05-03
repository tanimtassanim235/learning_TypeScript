const kgtoGM = (input: string | number): string | number | undefined => {
    if(typeof input === "number")
    {
        return input * 1000;
    }
    else if(typeof input === 'string')
    {
        const [value] = input.split(" ")
        return `Converted Output is: ${Number(value)*1000} `;
    }
};

const res1 = kgtoGM(3) as number;
const res2 = kgtoGM("2 kg");

console.log(res2);