import {BoardColor} from "../../shared/enums/board-color.enum";
import {BoardPositionInterface} from "../../shared/interfaces/board-position.interface";

class BoardCell {
    private position: BoardPositionInterface;
    private storedChecker: string;
    private isEmpty: boolean = false;

    public color: BoardColor;

    constructor(color: BoardColor, position: BoardPositionInterface) {
        this.color = color;
        this.position = position;
    }

    public setChecker(checkerId: string): void {
        this.storedChecker = checkerId;
        this.isEmpty = false;
    }

    public getStoredChecker(): string {
        return this.storedChecker;
    }

    public removeChecker(): void {
        this.storedChecker = '';
        this.isEmpty = true;
    }
}

export default BoardCell;
