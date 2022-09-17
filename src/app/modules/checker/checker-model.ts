import {BoardPositionInterface} from "../../shared/interfaces/board-position.interface";
import {BoardColor} from "../../shared/enums/board-color.enum";
import {Checker} from "../../shared/interfaces/checker.interface";

export class CheckerModel implements Checker {
    private id: string;
    private position: BoardPositionInterface;
    private color: BoardColor;

    constructor(id: string, position: BoardPositionInterface, color: BoardColor) {
        this.id = id;
        this.color = color;
        this.position = position;
    }

    public getId(): string {
        return this.id;
    }

    public getPosition(): BoardPositionInterface {
        return this.position;
    }

    public setPosition(position: BoardPositionInterface): void {
        this.position = position;
    }

    public getColor(): BoardColor {
        return this.color;
    }
}
