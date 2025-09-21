import { JSX } from 'react';

import StreamingBanner from '@/shared/components/StreamingBanner/StreamingBanner';
import RecentlyWatchedBlock from '@/shared/components/RecentlyWatched/RecentlyWatchedBlock';

export default function StreamingPage(): JSX.Element {
    return (
        <main>
            <StreamingBanner />
            <RecentlyWatchedBlock />
        </main>
    );
}
