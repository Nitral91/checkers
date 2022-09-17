import {CheckerModel} from "./checker-model";
import {BoardPositionInterface} from "../../shared/interfaces/board-position.interface";
import {BoardColor} from "../../shared/enums/board-color.enum";
import {Checker} from "../../shared/interfaces/checker.interface";

export class CheckerController {
    public createChecker(id: string, position: BoardPositionInterface, color: BoardColor): Checker {
        return new CheckerModel(id, position, color);
    }

    public populateChecker(checker: Checker): HTMLElement {
        let checkerEl = document.createElement('div');

        checkerEl.setAttribute('id', checker.getId());
        checkerEl.classList.add('checker', checker.getColor());

        checkerEl.addEventListener('click', () => {
            console.log('checker: ', checker);
        });

        return checkerEl;
    }
}
