
const Gameboard = () => {
    const gameboard = [ 'X', '', '',
                        '', 'O', '',
                        '', 'O', '' ];

    const displayController = () => {
        
    }

    return { gameboard };
};

const Players = () => {
    let player1;
    let player2;
}

(function display() {
    const boxes = document.querySelectorAll('.box');

    for (i = 0; i < 9; i++) {
        boxes[i].textContent = Gameboard.gameboard[i];
        // boxes.forEach(box => {
        //     // box.textContent = Gameboard.gameboard[i];
        //     box.textContent = "0";
        // });
    }
})();

// display();