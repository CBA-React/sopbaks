import { JSX } from 'react';

import StreamItem from '@/shared/components/StreamItem/StreamItem';

const contentFromAPI = [
    {
        id: '1',
        type: 'stream',
        tabId: 'music',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '2',
        type: 'stream',
        tabId: 'music',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '3',
        type: 'stream',
        tabId: 'technology',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '4',
        type: 'stream',
        tabId: 'all',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '5',
        type: 'stream',
        tabId: 'cooking',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
];

interface StreamingItemsBlockProps {
    activeTab: string;
}

export default function StreamingItemsBlock({
    activeTab,
}: StreamingItemsBlockProps): JSX.Element {
    const activeContent = contentFromAPI.filter(
        (item) => item.tabId === activeTab || activeTab === 'all',
    );

    return (
        <section className={'w-full mx-auto px-4 mt-8'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {activeContent.map((item) => (
                    <StreamItem
                        {...item.data}
                        key={item.id}
                        isVerified={true}
                    />
                ))}
            </div>
        </section>
    );
}
