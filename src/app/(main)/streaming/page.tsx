import { JSX } from 'react';

import ReadyToGoLiveBanner from '@/shared/components/ReadyToGoLiveBanner/ReadyToGoLiveBanner';
import RecentlyWatchedBlock from '@/shared/components/RecentlyWatched/RecentlyWatchedBlock';
import StreamingTabsWrapper from '@/shared/components/StreamingTabsWrapper/StreamingTabsWrapper';

export default function StreamingPage(): JSX.Element {
    return (
        <main>
            <StreamingTabsWrapper />
            <RecentlyWatchedBlock />
            <ReadyToGoLiveBanner />
        </main>
    );
}
