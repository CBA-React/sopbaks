import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReadyToGoLiveBanner(): JSX.Element {
    return (
        <div className="w-full h-[300px] relative rounded-[40px] overflow-hidden mt-10">
            <Image
                src="/pictures/streamingReadyToGoLiveBanner.jpg"
                alt="banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#000000CC]" />
            <div className="absolute inset-0 flex gap-3 flex-col justify-center p-10">
                <h1 className="text-white text-3xl font-bold">
                    Ready to go Live?
                </h1>
                <p className="text-white max-w-[536px]">
                    Share your talents, knowledge, and experiences with viewers
                    around the world. Going live is easy and free!
                </p>
                <div className={'mt-6 flex gap-3'}>
                    <Link href={'#'}>
                        <button
                            className={
                                'px-[30px] py-[12px] bg-[#C32033] text-white font-bold rounded-[12px] cursor-pointer'
                            }
                        >
                            Go Live Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
