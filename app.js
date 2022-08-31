// function Account(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
// }

// const john = new Account('john', 200);
// const bob = new Account('bob', 0);

// Account.prototype.bank = 'HSBC';
// Account.prototype.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`)
// }

// console.log(john.bank);
// console.log(bob);

// class Account {
//   constructor(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
//   }
//   bank = 'HSBC';
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
//   }
// }

// const john = new Account('john', 100);
// john.deposit(600);
// console.log(john.bank)

const john = {
    name: 'john',
    age: 24,
    greet : function (){
        console.log(this);
        console.log(`hello, I'm ${this.name} and I'm ${this.age} years old`)
    }
}

const susan = {
    name: 'susan',
    age: 21
}

john.greet();

//this will fail

susan.greet();