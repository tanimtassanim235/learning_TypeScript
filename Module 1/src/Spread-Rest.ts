// spread operator

const friends = ["Rahim", "Mujahid"];

const schoolFriends = ["Akbar", "Shoriful", "Samim"];

const collegeFriends = ["Mr Mowla", "Mr Rihan", "Mr Samir"];

friends.push(...schoolFriends);

// console.log(friends);

const user = {
    name: "Tanim",
    phoneNo: "0130000000"
};

const otherInfo = {hobby: "walking", favouriteColor: "Black"};

const userInfo = {...user, ...otherInfo};

// console.log(userInfo);

// rest opearator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Sent Invitation to ${friend}`);
    })
}


sendInvite("Rihan", "Mujahid", "Boktiar", "Niaz");