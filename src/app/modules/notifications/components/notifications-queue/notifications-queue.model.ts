import {AbstractModel, Queue} from "../../../../shared";
import {NotificationMessage} from "../../index";

export class NotificationsQueueModel implements AbstractModel {
    private queue = new Queue();

    public enqueue(item: NotificationMessage): void {
        this.queue.enqueue(item);
    }

    public dequeue(): void {
        this.queue.dequeue();
    }

    public getList(): NotificationMessage[] {
        return this.queue.getItems<NotificationMessage>();
    }

    public removeById(id: number): void {
        this.queue.drop<NotificationMessage>((item) => item.id !== id);
    }
}
