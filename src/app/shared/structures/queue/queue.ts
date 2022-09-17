import { QueueModel} from "./queue.model";

export class Queue implements QueueModel {
    private items: unknown[] = [];

    public enqueue<T>(item: T): void {
        this.items = [...this.items, item];
    }

    public dequeue(): void {
        this.items = this.items.slice(1);
    }

    public getItems<T>(): T[] {
        return this.items as T[];
    }

    public drop<T>(rule: (prop: T) => boolean): void {
        this.items = (this.items as T[]).filter(rule);
    }
}
