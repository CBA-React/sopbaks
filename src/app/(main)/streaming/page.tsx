import { JSX } from 'react';

import RecentlyWatchedBlock from '@/shared/components/RecentlyWatched/RecentlyWatchedBlock';
import StreamingBanner from '@/shared/components/StreamingBanner/StreamingBanner';
import StreamingItemsBlock from '@/shared/components/StreamingItemsBlock/StreamingItemsBlock';

export default function StreamingPage(): JSX.Element {
    return (
        <main>
            <StreamingBanner />
            <StreamingItemsBlock />
            <RecentlyWatchedBlock />
        </main>
    );
}
