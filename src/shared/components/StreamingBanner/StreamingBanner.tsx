import { JSX } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';

import StreamIcon from 'public/icons/stream.svg';

export default function StreamingBanner(): JSX.Element {
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
