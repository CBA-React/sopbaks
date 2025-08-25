import { JSX } from 'react';

import Notification from 'public/icons/notification.svg';

interface NotificationBellProps {
    hasNotifications?: boolean;
}

export default function NotificationIcon({
    hasNotifications,
}: NotificationBellProps): JSX.Element {
    return (
        <div className="relative w-8 h-8 cursor-pointer">
            <Notification className="w-full h-full" />
            {hasNotifications && (
                <span className="absolute top-[3px] right-[5px] w-[10px] h-[10px] bg-green-500 rounded-full border border-white" />
            )}
        </div>
    );
}
