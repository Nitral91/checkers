import {BoardController} from "./modules/board/board-controller";

export class App {
    constructor() {
        new BoardController().init();
    }
}
