const Players = (name, symbol) => {
    return {name, symbol}
}

const player1 = Players('player1', 'X');
const player2 = Players('player2', 'O');


const Gameboard = (() => {
    const boxes = [...document.querySelectorAll('.box')];
    const resetBtn = document.querySelector('.reset');

    const gameboard = [ 'X', '', '',
                        '', 'O', '',
                        '', 'O', '' ];

    const assign = () => {
        for (i = 0; i < 9; i++) {
            gameboard[i] = boxes[i].textContent;
        }
    };

    const changePlayer = () => {
        let symbol = player1.symbol ? player2.symbol : player2.symbol;
        return symbol;
    }

    let symbol = changePlayer();

    function applySymbol() {
        for (i = 0; i < 9; i++) {
            let box = boxes[i];
            box.addEventListener('click', () => {
                if (box.textContent === "") {
                    box.textContent = symbol;
                    assign();
                    changePlayer();
                }

                if (checkWinCondition() === true) {
                    alert('win');
                }
            }, { once: true });
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

    const reset = () => {
        resetBtn.addEventListener('click', () => {
            for (i = 0; i < 9; i++) {
                gameboard[i] = '';
                boxes[i].textContent = '';
            }
        });
    }
 
    const gameStart = () => {
        applySymbol();

        if (checkWinCondition() === false) {
            reset();
        } 

        else if (!boxes.forEach(box === "")) {
            reset();
        }
    }

    return {
        gameStart
    };

})();


Gameboard.gameStart();