// mapped types 

// map

const arrOfNum: number[] = [1, 4, 6];

const arrayOfStringUsingMap: string[] = arrOfNum.map((num) => num.toString());


type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"];

// type AreaOfString = {
//     height: string;
//     width: string;
// };

type AreaOfString = {
    [key in "height" | "width"]: string;
}


type AreaOfString2 = {
    [key in keyof AreaOfNum]: string;
}

// key diyee height , width taa defined koree output : diyee string hobee etaa ..boltesii


type Area<T> = {
    [key in keyof T]: T[key];
};

const area1: Area<{height: string; width: number}> = {
    height: "sklk",
    width: 23454,
}