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

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter number of lines to bet (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while (true){
        const bet = prompt("Enter total bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again.")
        } else {
            return numberBet;
        }
    }
}

let balance = deposit(); //let allows adjustment of variables
const numberOfLines = getNumberOfLines(); //const can't be changed (constant)
const bet = getBet(balance, numberOfLines);
