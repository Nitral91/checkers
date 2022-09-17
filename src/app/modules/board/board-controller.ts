import {BoardModel} from "./board-model";
import {BoardView} from "./board-view";

export class BoardController {
    private model: BoardModel;
    private view: BoardView;

    public init(): void {
        this.model = new BoardModel();
        this.view = new BoardView();

        this.view.render(this.model.getBoard(), this.model.getCheckers());
    }
}
