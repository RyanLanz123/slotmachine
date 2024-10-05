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

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
}


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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol); //push(append) symbols into array
        }
    }

    [A, B, C]
    
    const reels = [[], [], []]; //represents  column in slots
    for (let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol =  reelSymbols[randomIndex]
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
};

spin();

let balance = deposit(); //let allows adjustment of variables
const numberOfLines = getNumberOfLines(); //const can't be changed (constant)
const bet = getBet(balance, numberOfLines);
