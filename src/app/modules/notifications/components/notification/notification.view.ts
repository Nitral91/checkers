import {AbstractView} from "../../../../shared";
import {NotificationMessage} from "../../model";
import {CLOSE_BUTTON} from "../../constants";

export class NotificationView implements AbstractView {
    public getView(message?: NotificationMessage): string {
        return `
            <div class="notification-message">
                <span class="message-text _${message.type}">${message.message}</span>
                <button type="button" data-type="${CLOSE_BUTTON}" data-id="${message.id}">x</button>
            </div>`;
    }

    public render(): void {}
}
