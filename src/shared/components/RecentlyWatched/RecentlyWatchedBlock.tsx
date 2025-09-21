import { JSX } from 'react';

import RecentlyWatchedItem from '@/shared/components/RecentlyWatched/RecentlyWatchedItem';

const recentlyWatchedData = [
    {
        title: 'Editing Travel Videos with Premiere Pro',
        imgSrc: '/pictures/mockImages/recentlyWatched/recentlyWatched1.jpg',
    },
    {
        title: 'Designing a Personal Portfolio Website',
        imgSrc: '/pictures/mockImages/recentlyWatched/recentlyWatched2.jpg',
    },
    {
        title: 'Daily Mindfulness: 10-Minute Meditation Live',
        imgSrc: '/pictures/mockImages/recentlyWatched/recentlyWatched3.jpg',
    },
    {
        title: 'Behind the Scenes: Fashion Week Prep',
        imgSrc: '/pictures/mockImages/recentlyWatched/recentlyWatched4.jpg',
    },
];

export default function RecentlyWatchedBlock(): JSX.Element {
    return (
        <section className={'text-[24px] font-semibold mt-10'}>
            <p>Recently Watched</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {recentlyWatchedData.map((item) => (
                    <RecentlyWatchedItem
                        key={item.title}
                        title={item.title}
                        imgSrc={item.imgSrc}
                    />
                ))}
            </div>
        </section>
    );
}
