// function add(num1: number, num2: number): number
// {
//     return num1 + num2;
// }


const addNor = (num1: number, num2: number) => num1 + num2;

// addNor(2, 3);

// object => function => method

const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value: number):number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};

poorUser.addBalance(250000);


const arr: number[] = [1, 4, 6 ,8]

const sqrArray = arr.map((elem: number) => elem * elem);
