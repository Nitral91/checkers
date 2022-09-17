import BoardCell from "../board-cell/board-cell";
import {Checker} from "../../shared/interfaces/checker.interface";
import {CheckerController} from "../checker/checker-controller";

export class BoardView {
    render(board: BoardCell[][], checkers: Checker[]): void {
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board');

        board.forEach((row, xIndex) => {
            const boardRow = document.createElement('div');
            boardRow.classList.add('row')

            row.forEach((rowCell, yIndex) => {
                const boardCell = document.createElement('div');
                boardCell.classList.add('cell', rowCell.color);

                let checker = checkers.find(item => {
                    return item.getId() === rowCell.getStoredChecker();
                })

                if (checker) {
                    let checkerEl = new CheckerController().populateChecker(checker);

                    boardCell.appendChild(checkerEl);
                }

                boardRow.appendChild(boardCell);
            });

            boardContainer.appendChild(boardRow);
        })

        document.querySelector('body').appendChild(boardContainer);
    }
}
