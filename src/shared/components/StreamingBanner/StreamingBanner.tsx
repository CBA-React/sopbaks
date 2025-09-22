import { JSX } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';

import StreamIcon from 'public/icons/stream.svg';

interface StreamingBannerProps {
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

export default function StreamingBanner({
    activeTab,
    onTabChange,
}: StreamingBannerProps): JSX.Element {
    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'technology', label: 'Technology' },
        { id: 'music', label: 'Music' },
        { id: 'cooking', label: 'Cooking' },
        { id: 'art', label: 'Art' },
        { id: 'travel', label: 'Travel' },
        { id: 'fitness', label: 'Fitness' },
        { id: 'education', label: 'Education' },
    ];

    return (
        <section className="w-full h-[600px] relative">
            <Image
                src="/pictures/mockImages/streamingBanner.jpg"
                alt="Streaming Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0">
                <div className="absolute top-8 left-8 right-8">
                    <div className="flex overflow-x-auto lg:overflow-x-visible scrollbar-hide hover:scrollbar-show scroll-smooth">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-4 py-2 font-semibold cursor-pointer whitespace-nowrap flex-shrink-0 lg:flex-shrink ${
                                    activeTab === tab.id
                                        ? 'text-white rounded-lg backdrop-blur-sm'
                                        : 'text-white/70 hover:text-white'
                                }`}
                                onClick={() => onTabChange(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-12 left-8 right-8">
                    <Button icon={<StreamIcon />} text={'Live'} />
                    <p className="text-white text-2xl md:text-3xl font-bold mt-4">
                        Coding a Game with Unity and C#
                    </p>
                    <div className={'mt-4 flex items-center gap-3'}>
                        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                            <Image
                                src={'/pictures/mockImages/avatar.png'}
                                alt={'name'}
                                width={35}
                                height={35}
                            />
                        </div>
                        <p className={'text-white'}>Guy Hawkins</p>
                    </div>
                    <Button
                        text="Watch"
                        className="bg-white !text-black hover:bg-gray-200 mt-4"
                    />
                </div>
            </div>
        </section>
    );
}
