let balance = 0;
let transaction = [];

function deposit(amount1) {

    balance = balance + amount1
    transaction.push("Deposited " + amount1);
    console.log("Successfully Deposited", amount1)
}

function withdraw(amount2) {

    balance = balance - amount2;
    transaction.push("Withdraw " + amount2);
    console.log("Successfully withdraw", amount2)

}

function checkbalance() {
    console.log("Current Balance", balance);
    transaction.push(balance + " is remaining");
}

function transactionhistory() {
    if (transaction.length == 0) {
        console.log("No Transaction History")
    }
    else {
        console.log("Transaction history", transaction)
    }
}

let inpamount = Number(prompt("Enter your amount"))
inpamount = parseInt(inpamount)

do {
    alert("eNTER VALID AMOUNT")
    inpamount = Number(prompt("Enter your amount"))

} while (isNaN(inpamount) || inpamount === 0 || inpamount < 0);

deposit(inpamount)


let inpwithdraw = Number(prompt("Enter Withdraw amount"))
inpwithdraw = parseInt(inpwithdraw)


do {
    if (isNaN(inpwithdraw) || inpwithdraw === 0 || inpwithdraw < 0) {
        alert("Please Enter Withdraw a Valid amount!")
        inpwithdraw = Number(prompt("Enter Withdraw amount"))
    }
    else if (inpwithdraw > balance) {
        alert("You Dont't have enough balance to withdraw")
        inpwithdraw = Number(prompt("Enter Withdraw amount"))
    }


} while ((isNaN(inpwithdraw) || inpwithdraw === 0 || inpwithdraw < 0) || (inpwithdraw > balance));

withdraw(inpwithdraw)


checkbalance();
transactionhistory();