// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName : string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance;
    }

}


const tanimAccount = new BankAccount(153, "Tanim", 200);

tanimAccount.addBalance(120);
console.log(tanimAccount);