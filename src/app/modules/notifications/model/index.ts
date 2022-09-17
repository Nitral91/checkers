export enum NotificationMessageType {
    Warning = "warning",
    Success = "success",
    Info = "info",
}

export interface NotificationMessage {
    id: number;
    type: NotificationMessageType;
    message: string;
}
