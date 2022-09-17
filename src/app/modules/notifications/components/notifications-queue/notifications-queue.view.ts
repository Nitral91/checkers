import {AbstractView, ViewContainer} from "../../../../shared";
import {appConfig} from "../../../../app.config";
import {NotificationMessage} from "../../model";
import {NotificationController} from "../notification/notification.controller";
import {CLOSE_BUTTON} from "../../constants";

export class NotificationsQueueView extends ViewContainer implements AbstractView {
    constructor() {
        super();

        this.init();
    }

    public init(): void {
        super.createContainer(appConfig.notificationsContainerSelector);
    }

    public render(messages: NotificationMessage[]): void {
        super.clear();
        this.container.innerHTML = `
            <div class="notifications">
                ${messages.map((message: NotificationMessage) => new NotificationController().getMarkup(message)).join("")}
            </div>
        `;
    }

    public closeHandler(handler: (id: number) => void): void {
        this.container.addEventListener("click", (event: Event) => {
            if (!event.target) {
                return;
            }

            const target = event.target as HTMLElement

            if (target.dataset.type === CLOSE_BUTTON) {
                handler(Number(target.dataset.id));
            }
        });
    }
}
