import {AbstractController} from "../../../../shared/contracts";
import {NotificationsQueueView} from "./notifications-queue.view";
import {NotificationsQueueModel} from "./notifications-queue.model";
import {NotificationMessage} from "../../model";

export class NotificationsQueueController implements AbstractController {
    private model: NotificationsQueueModel;
    private view: NotificationsQueueView;

    constructor(private notificationDelay = 6000) {
    }

    public init(): void {
        this.model = new NotificationsQueueModel();
        this.view = new NotificationsQueueView();

        this.view.closeHandler(this.close.bind(this));
    }

    public showMessage(message: NotificationMessage): void {
        this.model.enqueue(message);
        this.view.render(this.model.getList());

        setTimeout(() => {
            this.model.dequeue();
            this.view.render(this.model.getList());
        }, this.notificationDelay);
    }

    public close(id: number): void {
        this.model.removeById(id);
        this.view.render(this.model.getList());
    }
}
