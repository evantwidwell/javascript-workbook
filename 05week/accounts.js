'use strict';

class Account {
  constructor(accountNumber, owner, transactions){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
    // this.balance = 0;
  }
  getBalance(){
    // console.log(`Current transactions  ${this.transactions}`);
    let balance = 0;
    let newTransactions = this.transactions
    if(newTransactions.length == 0){
      return balance
    } else{
    for (let i = 0; i < this.transactions.length ; i++){
      balance = balance + newTransactions[i].amount 
      // console.log(newTransactions[i])
      // console.log(`transaction at ${i} is ${newTransactions[i].amount} to ${newTransactions[i].payee}`)
      // console.log(balance)
    }
    return balance
    }
  }

    deposit(amount){
      if(amount > 0){
      // console.log("new deposit amount " + amount)
      let payee = "deposit"
      // this.balance += amount
      this.transactions.push(new transaction(amount, payee))
      // console.log(this.transactions.amount)
      
      } else{
        console.log("This is not a valid transaction")
      }
    }
      debit(amount, payee){
        // console.log(`Current balance is ${this.getBalance()}`)
        // console.log(`After next transactions, balance is ${this.getBalance() + amount}`)
        if((this.getBalance() + amount) < 0){
          // console.log(this.getBalance())
          console.log("This is not a valid transaction, you are overdrawn")
        } else {
          this.transactions.push(new transaction(amount, payee))
        }
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
console.log(acct1.getBalance()); //200
acct1.debit(-100, "HEB")
console.log(acct1.getBalance()); // 100
acct1.debit(-200, "HEB") //not allowed
console.log(acct1.getBalance()); // 100

acct1.deposit(-200)  // should not be allowed
console.log(acct1.getBalance()); // 100