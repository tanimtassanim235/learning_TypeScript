const getUser = (input: string | null) => {
    if(input) {
        console.log(`From DB: ${input}`);
    }
    else
    {
        console.log("From DB: All User");
    }
};

getUser(null);