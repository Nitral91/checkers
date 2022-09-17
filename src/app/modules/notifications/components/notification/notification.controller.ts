import {NotificationView} from "./notification.view";
import {NotificationMessage} from "../../model";
import {AbstractController} from "../../../../shared/contracts";

export class NotificationController implements AbstractController {
    private view: NotificationView = new NotificationView();

    public init(): void {
    }

    public getMarkup(message: NotificationMessage): string {
        return this.view.getView(message);
    }
}
