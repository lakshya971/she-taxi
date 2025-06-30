export class NotificationService {
    constructor() {}

    async sendNotification(userId: string, message: string): Promise<void> {
        // Logic to send notification to the user
        // Simulate sending notification
        console.log(`Notification sent to user ${userId}: ${message}`);
    }

    async sendBulkNotifications(userIds: string[], message: string): Promise<void[]> {
        // Logic to send bulk notifications to users
        return Promise.all(userIds.map(userId => this.sendNotification(userId, message)));
    }
}