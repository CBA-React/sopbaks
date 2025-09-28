import { JSX } from 'react';

import DiscoverBanner from '@/shared/components/DiscoverBanner/DiscoverBanner';
import DiscoverPageTabs from '@/shared/components/DiscoverPageTabs/DiscoverPageTabs';
import TopCreators from '@/shared/components/TopCreators/TopCreators';

export default function Discover(): JSX.Element {
    return (
        <main className={'w-[100%]'}>
            <DiscoverBanner />
            <div
                className={'flex flex-col-reverse lg:flex-row justify-between'}
            >
                <div className="flex-1 min-w-0">
                    <DiscoverPageTabs />
                </div>
                <div className="lg:flex-shrink-0 lg:w-[348px] mt-8">
                    <TopCreators />
                </div>
            </div>
        </main>
    );
}
