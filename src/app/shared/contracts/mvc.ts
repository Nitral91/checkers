export abstract class AbstractModel {}

export abstract class AbstractController {
    public abstract init(): void;
}

export abstract class AbstractView {
    public abstract getView?(data?: unknown): string;
    public abstract render(data?: unknown): void;
    public abstract clear?(): void;
}
