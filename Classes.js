

// CODING FOLLOWS 


// We create the Customer class with it's properties
class Customer {
    constructor(username, password, customerSince) {
        this.username = username;
        this.password = password;
        this.customerSince = customerSince;
    }
// We create an method called appreciationNote to display a Thank you message to customers
// It references their names and when they became a customer

    appreciationNote(){
        console.log("Thank you " + this.username + " you have been a relaiable customer since " + this.customerSince);
    }
}



// Next up is the Account Class
class Account {
    constructor(accountType, balance){
        this.accountType = accountType;
        this.balance = balance;
    }
}


class Checking extends Account {
    constructor (accountType, balance, checkingBalance){
        super(accountType, balance);
        this.checkingBalance = checkingBalance;
    }
    // this method updates the increases of the checking account
    increaseCheckingBalance(addAmount) {
        this.checkingBalance += addAmount;
        console.log("After your deposit, your current balance in your Checking account is " + this.checkingBalance);
        this.balance += addAmount;
        console.log("After your deposit, your total bank balance, including all accounts, is " + this.balance);
    }

    // this method updates the decreases of the checking account
    decreaseCheckingBalance(takeAmount) {
        this.checkingBalance -= takeAmount;
        console.log("After your withdrawal, your current balance in your Checking account is " + this.checkingBalance);
        this.balance -= takeAmount;
        console.log("After your withdrawal, your total bank balance, including all accounts, is " + this.balance);
    }
}

// Savings is a subclass of Account and has additional properties

class Business extends Checking {
    constructor(accountType, balance, checkingBalance, BusinessBalance, interestRate, currentDebt){
        super(accountType, balance, checkingBalance);
        this.BusinessBalance = BusinessBalance;
        this.interestRate = interestRate;
        this.currentDebt = currentDebt;
    }

     // this method updates the increases of the business account
     increaseBusinessBalance() {
        this.BusinessBalance += addAmount;
        console.log("After your deposit, your current balance in your Business account is " + this.BusinessBalance);
        this.balance += addAmount;
        console.log("After your deposit, your total bank balance, including all accounts, is " + this.balance);
     }    
    
      // this method updates the increases of the business account
      decreaseBusinessBalance(takeAmount) {
        this.BusinessBalance -= takeAmount;
        console.log("After your withdrawal, your current balance in your Business account is " + this.BusinessBalance);
        this.balance -= takeAmount;
        console.log("After your withdrawal, your total bank balance, including all accounts, is " + this.balance);
    }
    
    // this methods enables transfer from the checking and the business account
    check2busi(tAmount) {
        this.BusinessBalance += tAmount;
        this.checkingBalance -= tAmount;
        console.log("You have transferred " + tAmount + " from your checking to your business account");
        console.log("Your remaining Checking account balance is " + this.checkingBalance);
        console.log("Your new Business account balance is " + this.BusinessBalance);
    }

     // this methods enables transfer from the checking and the business account
     busi2check(tAmount) {
        this.checkingBalance += tAmount;
        this.BSusinessBalance -= tAmount;
        console.log("You have transferred " + tAmount + " from your checking to your business account");
        console.log("Your remaining Business account balance is " + this.BusinessBalance);
        console.log("Your new Checking account balance is " + this.checkingBalance);
        console.log("Your total account balance remains " + this.balance);
    }

    // takeLoan is a method that is used to give loans to users at specified interest rates
    takeLoan(loanAmount) {
        this.BusinessBalance += loanAmount 
        console.log("After taking this loan, your current business account balance is " + this.BusinessBalance);
        this.balance += loanAmount 
        console.log("After taking this loan, your current account balance (including all accounts) is " + this.balance);
        this.currentDebt += loanAmount * (this.interestRate / 100) * 30
        console.log("After taking this loan, your current debt is " + this.currentDebt + " at an interest rate of " + this.interestRate + "% to be paid over 30 months. Have a good day")
  
    }

    payLoan (payAmount) {
        this.currentDebt -= payAmount;
        console.log("You have made a payment of " + payAmount + ". Your remaining debt is " + this.currentDebt);
    }
}







