import { JSX } from 'react';

import RecentlyWatchedBlock from '@/shared/components/RecentlyWatched/RecentlyWatchedBlock';
import StreamingBanner from '@/shared/components/StreamingBanner/StreamingBanner';

export default function StreamingPage(): JSX.Element {
    return (
        <main>
            <StreamingBanner />
            <RecentlyWatchedBlock />
        </main>
    );
}
