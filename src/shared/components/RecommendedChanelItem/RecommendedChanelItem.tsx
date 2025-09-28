import { JSX } from 'react';
import Image from 'next/image';

import OnlineIcon from 'public/icons/online.svg';

export default function RecommendedChanelItem({
    avatar,
    name,
    status,
}): JSX.Element {
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <Image src={avatar} alt={name} width={35} height={35} />
                </div>
                <p className="text-[14px] text-[#00000066]">{name}</p>
            </div>

            {status === 'online' ? <OnlineIcon /> : null}
        </div>
    );
}
