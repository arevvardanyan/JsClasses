class Account{
    static id = 0;
    static allInstances = [];
    constructor(name,balance){
        Account.allInstances.push(this)
        this.name = name
        this.balance = balance
        Account.id += 1
        
    }
    get balance(){
        return this.balance
    }
    set balance(newBalance){
       return  this.balance = newBalance;
        
    }
    credit(money){
        this.balance += money;
        return this.balance
    }
    debit(money){
        this.balance -= money;
        return this.balance
    }
    transferTo(name,ammount){
        for(let i =0;i<Account.allInstances.length;i++){
            if(Account.allInstances[i]["name"] === name ){
                Account.allInstances[i]["balance"] += ammount
            }
        }
        return this
    }
}


const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

console.log(Account.allInstances)
console.log(saving.transferTo("current",522))