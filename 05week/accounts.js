'use strict';

class Account {
  constructor(accountNumber, owner, transactions){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
    this.balance = 0;
  }
    

    deposit(amount){
      if(amount > 0){
      console.log("new deposit amount " + amount)
      let payee = "deposit"
      this.balance += amount
      this.transactions.push(new transaction(amount, payee))
      } else{
        console.log("This is not a valid transaction")
      }
    }
      debit(payee, amount){
        if(this.balance - amount < 0){
          console.log("This is not a valid transaction")
        } else {
          this.balance = this.balance - amount
          this.transactions.push(new transaction(amount, payee))
          // console.log(this.transactions)
        }
      }
      getBalance(){
        console.log(`Current balance is ${this.balance}`);
        // let balance = 0;
        // for (let i =0; i <= this.transactions.length; i++){
        //   // console.log(this.transactions[i][amount])
        //   console.log(balance)
        //   // balance += this.transactions[i][amount]
        //   // console.log(balance)
        //   console.log(this.transactions.length)
        // }
      // }
    }
}
  class transaction{
    constructor(amount, payee){
    
    this.amount = amount
    this.payee = payee
  }
  }

let acct1 = new Account("5553429", "John Doe");

console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.getBalance()); // 0
acct1.deposit(100)
acct1.deposit(100)
console.log(acct1.getBalance()); // 100

acct1.deposit(-200)  // should not be allowed
console.log(acct1.getBalance()); // 100