

// ASSIGNMENT 4 CODING FOLLOWS 


var jolly = new Customer ("Jolly James", "January 2020");
jolly.appreciationNote();

var moneyhold = new Business ("Business", 7000,2000,5000,4,0);

var question =+prompt("What account will you like to use? Press 1 for Business, Press 2 for Checking")


function useBusiness() {
    var ask =+ prompt("Press 1 to make a deposit. Press 2 to withdraw. Press 3 to look up your checking account balance. Press 4 to take a loan.")
    if (ask == 1) {
        var addedAmount = +prompt("How much would like to deposit");
        moneyhold.increaseBusinessBalance(addedAmount);
        alert("After your deposit, your current balance in your Business account is " + moneyhold.BusinessBalance);
        alert("After your deposit, your total bank balance, including all accounts, is " + moneyhold.balance);
        document.getElementById("businessbalance").innerHTML = moneyhold.BusinessBalance;
    } else if (ask == 2) {
        var takedAmount = +prompt("How much would like to withdrawal");
        moneyhold.decreaseCheckingBalance(takedAmount);
        alert("After your withdrawal, your current balance in your Business account is " + moneyhold.BusinessBalance);
        alert("After your withdrawal, your total bank balance, including all accounts, is " + moneyhold.BusinessBalance);
        document.getElementById("businessbalance").innerHTML = moneyhold.BusinessBalance;
    } else if (ask == 3){
        alert("Your Business account balance is " + moneyhold.BusinessBalance);
    } else if (ask == 4){
        var loanAmount = +prompt("How much loan will you like to take out?");
        moneyhold.takeLoan(loanAmount);
        moneyhold.currentDebt += loanAmount * (moneyhold.interestRate / 100) * 30
        alert("After taking this loan, your current business account balance is " + moneyhold.BusinessBalance);
        document.getElementById("businessbalance").innerHTML = moneyhold.BusinessBalance;
        alert("After taking this loan, your current debt is " + moneyhold.currentDebt + " at an interest rate of " + moneyhold.interestRate + "% to be paid over 30 months. Have a good day")
        document.getElementById("loanDebt").innerHTML = moneyhold.currentDebt;
    } else {
        alert("Pleas try Again. "  + jolly.appreciationNote());
    }

}
 

function useChecking() {
   var ask =+ prompt("Press 1 to make a deposit. Press 2 to withdraw. Press 3 to look up your checking account balance.")
   if (ask == 1) {
       var addAmount = +prompt("How much would like to deposit");
       moneyhold.increaseCheckingBalance(addAmount);
       alert("After your deposit, your current balance in your Checking account is " + moneyhold.checkingBalance);
       alert("After your deposit, your total bank balance, including all accounts, is " + moneyhold.balance);
       document.getElementById("checkbalance").innerHTML = moneyhold.checkingBalance;
   } else if (ask == 2) {
       var takeAmount = +prompt("How much would like to withdrawal");
       moneyhold.decreaseCheckingBalance(takeAmount);
       alert("After your withdrawal, your current balance in your Checking account is " + this.checkingBalance);
       alert("After your withdrawal, your total bank balance, including all accounts, is " + this.balance);
       document.getElementById("checkbalance").innerHTML = moneyhold.checkingBalance;
   } else if (ask == 3){
       alert("Your Checking account balance is " + moneyhold.checkingBalance);
   } else {
       alert("Pleas try Again. "  + jolly.appreciationNote());
   }

}
 

switch(question) {
    case 1: useBusiness();
            break;
    case 2: useChecking();
            break;
}