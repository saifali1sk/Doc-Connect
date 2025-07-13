import React from 'react';
import './Notifications.css';

const Notifications = () => {
    // Sample notification data for demonstration
    const notifications = [
        { id: 1, message: 'Your appointment with Dr. Smith is confirmed for July 20, 2025.', type: 'success' },
        { id: 2, message: 'Reminder: You have an appointment tomorrow at 10:00 AM.', type: 'reminder' },
        { id: 3, message: 'A new review has been posted for your last visit.', type: 'info' }
    ];

    return (
        <div className="notifications-container">
            <h3>Notifications</h3>
            {notifications.length > 0 ? (
                <ul className="notifications-list">
                    {notifications.map(notification => (
                        <li key={notification.id} className={`notification-item ${notification.type}`}>
                            {notification.message}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have no new notifications.</p>
            )}
        </div>
    );
};

export default Notifications;
