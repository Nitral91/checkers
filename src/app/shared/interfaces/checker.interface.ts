import {BoardPositionInterface} from "./board-position.interface";
import {BoardColor} from "../enums/board-color.enum";

export type Checker = {
    getId(): string;
    getPosition(): BoardPositionInterface;
    setPosition(position: BoardPositionInterface): void;
    getColor(): BoardColor;
}

export type WhiteChecker = Checker & { color: BoardColor.white };

export type BlackChecker = Checker & { color: BoardColor.black };
