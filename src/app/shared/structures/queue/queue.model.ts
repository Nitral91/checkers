export interface QueueModel {
    enqueue<T>(item: T): void;

    dequeue(): void;

    getItems(): unknown[];

    drop?(params?: unknown): void;
}
