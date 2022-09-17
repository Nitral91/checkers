import BoardCell from "../board-cell/board-cell";
import {BoardColor} from "../../shared/enums/board-color.enum";
import {BoardPositionInterface} from "../../shared/interfaces/board-position.interface";
import {Checker} from "../../shared/interfaces/checker.interface";
import {CheckerController} from "../checker/checker-controller";

export class BoardModel {
    readonly boardSize: number = 8;
    private board: BoardCell[][];
    private checkers: Checker[] = [];

    constructor() {
        this.boardSize = 8;
        this.board = this.init();
    }

    public init(): BoardCell[][] {
        let board = [];

        for (let i = 0; i < this.boardSize; i++) {
            board[i] = [];

            for (let j = 0; j < this.boardSize; j++) {
                let color: BoardColor;

                let position: BoardPositionInterface = {
                    x: i,
                    y: j
                };

                if (i % 2 === 0) {
                    color = j % 2 !== 0 ? BoardColor.white : BoardColor.black;
                } else {
                    color = j % 2 === 0 ? BoardColor.white : BoardColor.black;
                }

                board[i][j] = new BoardCell(color, position);
            }
        }

        board = this.assignCheckers(board);

        return board;
    }

    private assignCheckers(board: BoardCell[][]): BoardCell[][] {
        let whiteCheckerCount = 0;
        let blackCheckerCount = 0;

        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {

                let position: BoardPositionInterface = {
                    x: i,
                    y: j
                };
                let checker;

                if (i < 3) {
                    if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                        let checkerId: string = BoardColor.white + whiteCheckerCount;

                        board[i][j].setChecker(checkerId);

                        checker = new CheckerController().createChecker(checkerId, position, BoardColor.white);

                        whiteCheckerCount++;
                    }
                }

                if (i >= 5) {
                    if ((i % 2 !== 0 && j % 2 === 0) || (i % 2 === 0 && j % 2 !== 0)) {
                        let checkerId: string = BoardColor.black + blackCheckerCount;

                        board[i][j].setChecker(BoardColor.black + blackCheckerCount);

                        console.log('checkerId: ', checkerId);
                        checker = new CheckerController().createChecker(checkerId, position, BoardColor.black);

                        blackCheckerCount++;
                    }
                }

                if (checker) this.checkers.push(checker);
            }
        }

        return board
    }

    public getBoard(): BoardCell[][] {
        return this.board;
    }

    public getCheckers(): Checker[] {
        return this.checkers;
    }
}
