
const Gameboard = (() => {
    const boxes = [...document.querySelectorAll('.box')];
    let symbol = 'X';

    const gameboard = [ 'X', '', '',
                        '', 'O', '',
                        '', 'O', '' ];

    const display = () => {

        for (i = 0; i < 9; i++) {
            boxes[i].textContent = gameboard[i];
        }
    };

    const fillBox = index => {
        let box = gameboard[index];
        if (box === "") {
            box = symbol;
        }
    }

    const changeSymbol = () => {
        symbol = 'X' ? 'O' : 'X';
    }

    const applySymbol = () => {
        for (i = 0; i < 9; i++) {
            let box = boxes[i];
            let current = gameboard[i];
            box.addEventListener('click', () => {
                if (box.textContent === ""){
                    box.textContent = symbol;
                    current += symbol;
                    console.log(gameboard[i]);
                }
                // console.log(box);
            });
        }
    }

    const checkWinCondition = () => {
        if  (gameboard[0] === symbol && gameboard[1] === symbol && gameboard[2] === symbol
            || gameboard[3] === symbol && gameboard[4] === symbol && gameboard[5] === symbol
            || gameboard[6] === symbol && gameboard[7] === symbol && gameboard[8] === symbol
            || gameboard[0] === symbol && gameboard[3] === symbol && gameboard[6] === symbol
            || gameboard[1] === symbol && gameboard[4] === symbol && gameboard[7] === symbol
            || gameboard[2] === symbol && gameboard[5] === symbol && gameboard[8] === symbol
            || gameboard[0] === symbol && gameboard[4] === symbol && gameboard[8] === symbol
            || gameboard[2] === symbol && gameboard[4] === symbol && gameboard[6] === symbol) {
                return true;
            }
            
        else {
            return false;
        }
    };

    const restart = () => {
        boxes.forEach(box => box.textContent = '');
    }
 
    const gameStart = () => {
        applySymbol();

        if (checkWinCondition() === false) {
            restart();
        } 

        else if (!boxes.forEach(box === "")) {
            restart();
        }
    }

    return {
        display,
        applySymbol,
        gameStart,
        gameboard
    };

})();

const Players = () => {
    let player1;
    let player2;
}


Gameboard.display();
// Gameboard.applySymbol();
Gameboard.gameStart();