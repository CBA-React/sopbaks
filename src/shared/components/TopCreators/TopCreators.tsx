import { JSX } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';

const topCreatorsArray = [
    {
        fullName: 'Guy Hawkins',
        nickName: 'hawksg',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'Jacob Jones',
        nickName: 'jacobs',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'Jenny Wilson',
        nickName: 'jenwils',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'Floyd Miles',
        nickName: 'floydmils',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'Arlene McCoy',
        nickName: 'arlenemc',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'Jerome Bell',
        nickName: 'jbell',
        avatar: '/pictures/mockImages/avatar.png',
    },
];

export default function TopCreators(): JSX.Element {
    return (
        <section
            className={'w-[348px] mt-5'}
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            <div className={'flex flex-row items-center justify-between p-6'}>
                <h2 className={'text-[24px]'}>Top Creator</h2>
                <p className={'text-gray-500'}>See All</p>
            </div>
            <div className={'px-6'}>
                {topCreatorsArray.map((c, i) => (
                    <div key={c.nickName} className={'flex flex-row'}>
                        <p className={'font-bold'}>{i + 1}.</p>
                        <Image
                            width={44}
                            height={44}
                            src={c.avatar}
                            alt={'nickName'}
                        />
                        <div className={'flex flex-col'}>
                            <p className={'text-[16px]'}>{c.fullName}</p>
                            <p className={'text-[12px] text-gray-500'}>
                                @{c.nickName}
                            </p>
                        </div>
                        <Button text={'Follow'} />
                    </div>
                ))}
            </div>
        </section>
    );
}
