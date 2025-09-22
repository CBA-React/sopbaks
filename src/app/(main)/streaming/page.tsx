import { JSX } from 'react';

// an old block from old design
import GainingPopularity from '@/shared/components/GainingPopularity/GainingPopularity';
import ReadyToGoLiveBanner from '@/shared/components/ReadyToGoLiveBanner/ReadyToGoBanner';
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
