const DEFAULT_HTML_TAG = "div";
const DEFAULT_CONTAINER_ID = "app-container-id";

export class ViewContainer {
    public container: HTMLElement;

    public createContainer(id: string, className?: string, tag?: string): void {
        const containerTag = tag || DEFAULT_HTML_TAG;
        const containerId = this.getContainerId(id);
        const container = document.createElement(containerTag);

        container.setAttribute("id", containerId);

        if (className) {
            container.classList.add(className);
        }

        document.body.append(container);
        this.container = container;
    }

    public clear(): void {
        if (this.container) {
            this.container.innerHTML = "";
        }
    }

    private getContainerId(id?: string): string {
        return id || `${DEFAULT_CONTAINER_ID}-${Date.now()}`;
    }
}
