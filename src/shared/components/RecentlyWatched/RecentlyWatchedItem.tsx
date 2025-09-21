import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import StreamIcon from 'public/icons/stream.svg';

interface Props {
    title: string;
    imgSrc: string;
}

export default function RecentlyWatchedItem({
    title,
    imgSrc,
}: Props): JSX.Element {
    return (
        <div
            className="flex flex-col w-full rounded-[14px] bg-white relative"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            <div className="relative w-full h-[200px] sm:h-[180px] lg:h-[160px] xl:h-[260px] rounded-t-[14px] overflow-hidden">
                <Image
                    src={imgSrc}
                    alt="Recently Watched Item Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <Link href={'#'}>
                <div
                    className={
                        'bg-[#C32033] h-[44px] w-[42px] flex items-center justify-center rounded-[40px] absolute top-[140px] sm:top-[120px] lg:top-[140px] xl:top-[200px] left-5'
                    }
                >
                    <StreamIcon />
                </div>
            </Link>
            <p className="mt-8 text-sm lg:text-base font-medium line-clamp-2 p-5 pt-3">
                {title}
            </p>
        </div>
    );
}
