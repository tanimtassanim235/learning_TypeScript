interface IUser {
    name: string;
    age: number;
}

const user1: IUserWithRole = {
    name: "Mr. X",
    age: 26,
    role: "admin"
}

// interface: object type: array, object, function

type Role = {
    role: "admin" | "user";
};

interface IUserWithRole extends IUser {
    role: "admin" | "user";
}

interface IFriends {
    [index: number] : string
}

const friends: IFriends = ["A", "B", "C"];