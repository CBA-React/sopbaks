import Button from '@/shared/components/Button/Button';
import Divider from '@/shared/components/Divider/Divider';
import RecommendedChanelItem from '@/shared/components/RecommendedChanelItem/RecommendedChanelItem';

import LoadMoreIcon from 'public/icons/load-more.svg';
import Logo from 'public/icons/logo.svg';
import StreamIcon from 'public/icons/stream.svg';

const recommendedChannels = [
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Joe Dohn',
        status: 'offline',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Guy Hawkins',
        status: 'online',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Laurel Klaus',
        status: 'offline',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Violet Sirus',
        status: 'online',
    },
];

export default function Sidebar() {
    return (
        <aside className="w-[265px] bg-gray-100 border-r border-gray-300">
            <nav className="p-5">
                <Logo className="w-[150px] h-auto mt-2" />
                <Button
                    text={'Start Streaming'}
                    icon={<StreamIcon />}
                    className={'w-full my-[32px]'}
                />
                <p className={'text-[14px] font-semibold'}>New feeds</p>
                <Divider />
                <p className={'text-[14px] font-semibold mt-[32px]'}>
                    Recommended Channels
                </p>
                <ul className={'mt-4 space-y-5'}>
                    {recommendedChannels.map((channel) => (
                        <li key={channel.name}>
                            <RecommendedChanelItem
                                avatar={channel.img}
                                name={channel.name}
                                status={channel.status}
                            />
                        </li>
                    ))}
                    <li
                        className={
                            'flex flex-row gap-4 cursor-pointer items-center'
                        }
                    >
                        <LoadMoreIcon />
                        <span className={'text-[#00000066]'}>Load more</span>
                    </li>
                </ul>
                <Divider className={'mt-5'} />
            </nav>
        </aside>
    );
}
