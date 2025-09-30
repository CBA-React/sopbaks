import { JSX } from 'react';
import Image from 'next/image';

interface Props {
    avatar: string;
    fullName: string;
    updatedAt: string;
}

export default function FollowedChannel({
    avatar,
    fullName,
    updatedAt,
}: Props): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="relative w-[80px] h-[80px]">
                <div className="absolute inset-0 rounded-full border-4 border-gray-300" />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                        src={avatar}
                        alt={fullName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="absolute top-0 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
            </div>

            <p className="font-semibold text-center">{fullName}</p>
            <p className="text-sm text-gray-500">{updatedAt}</p>
        </div>
    );
}
