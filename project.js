// 1. Deposit money
// 2. Determine # of lines to bet on
// 3. Collect bet amount
// 4. Spin slots
// 5. Check if user won
// 6. Give winnings
// 7. Play again

// function deposit(){
//     return
// }

const prompt = require("prompt-sync")();


const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount);