import { JSX } from 'react';

import Switch from '@/shared/components/Switch/Switch';

export default function Notification(): JSX.Element {
    return (
        <>
            <h2 className={'text-[20px] font-semibold'}>Push Notifications</h2>
            <div className={'mt-8'}>
                <p className={'font-semibold'}>New followers</p>
                <div className={'flex flex-row justify-between'}>
                    <p>
                        Get notified when someone new follows your profile so
                        you can connect and grow your community.
                    </p>
                    <Switch onChange={() => {}} />
                </div>
            </div>
            <div className={'mt-6'}>
                <p className={'font-semibold'}>Comments on your posts</p>
                <div className={'flex flex-row justify-between'}>
                    <p>
                        Receive alerts when someone comments on your content —
                        stay engaged and respond in real time
                    </p>
                    <Switch onChange={() => {}} />
                </div>
            </div>
            <div className={'mt-6'}>
                <p className={'font-semibold'}>Live stream reminders</p>
                <div className={'flex flex-row justify-between'}>
                    <p>
                        Be the first to know when your favorite creators go live
                        or when your own stream is about to start.
                    </p>
                    <Switch onChange={() => {}} />
                </div>
            </div>
            <h2 className={'text-[20px] font-semibold mt-10'}>
                Email Notifications
            </h2>
            <div className={'mt-8'}>
                <p className={'font-semibold'}>Product updates</p>
                <div className={'flex flex-row justify-between'}>
                    <p>
                        Stay informed about the latest SOPBAKS features,
                        platform improvements, and new tools for creators and
                        businesses.
                    </p>
                    <Switch onChange={() => {}} />
                </div>
            </div>
            <div className={'mt-6'}>
                <p className={'font-semibold'}>Marketing tips & suggestions</p>
                <div className={'flex flex-row justify-between'}>
                    <p>
                        Get smart recommendations to grow your audience, improve
                        engagement, and promote your content more effectively.
                    </p>
                    <Switch onChange={() => {}} />
                </div>
            </div>
        </>
    );
}
