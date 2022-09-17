import "./style.css";
import {NotificationsQueueController} from "./app/modules/notifications/components/notifications-queue/notifications-queue.controller";
import {NotificationMessageType} from "./app/modules/notifications/model";
import {App} from "./app/app";

// TODO: notifications demo
function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const messages = [
    {
        id: 0,
        type: NotificationMessageType.Info,
        message: "Info",
    },
    {
        id: 0,
        type: NotificationMessageType.Warning,
        message: "Warning",
    },
    {
        id: 0,
        type: NotificationMessageType.Success,
        message: "Success",
    },
];

const notifications = new NotificationsQueueController(12000);

notifications.init();

notifications.showMessage(messages[0]);

setInterval(() => {
    const index = randomIntFromInterval(0, 2);
    const message = { ...messages[index], id: Date.now() + Math.ceil(Math.random()) };

    notifications.showMessage(message);
}, 4000);

new App();
