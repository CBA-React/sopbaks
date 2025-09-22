'use client';

import { JSX, useState } from 'react';

import StreamingBanner from '@/shared/components/StreamingBanner/StreamingBanner';
import StreamingItemsBlock from '@/shared/components/StreamingItemsBlock/StreamingItemsBlock';

export default function StreamingTabsWrapper(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('all');
    return (
        <>
            <StreamingBanner activeTab={activeTab} onTabChange={setActiveTab} />
            <StreamingItemsBlock activeTab={activeTab} />
        </>
    );
}
