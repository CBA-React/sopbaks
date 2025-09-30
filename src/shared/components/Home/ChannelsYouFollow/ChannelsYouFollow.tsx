import { JSX } from 'react';

import FollowedChannel from '@/shared/components/Home/ChannelsYouFollow/FollowedChannel';

const users = [
    {
        id: 1,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 2,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 3,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 4,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 5,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 6,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 7,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 8,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 9,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
    {
        id: 10,
        avatar: '/pictures/mockImages/avatar.png',
        fullName: 'Guy Hawkins',
        updatedAt: '14m ago',
    },
];

// function AddChannelButton(): JSX.Element {
//     return (
//         <div className="flex flex-col items-center gap-2 cursor-pointer group">
//             <div className="w-[80px] h-[80px] bg-[#C32033] rounded-full flex items-center justify-center hover:bg-[#a01a2a] transition-colors">
//                 <svg
//                     width="32"
//                     height="32"
//                     viewBox="0 0 32 32"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         d="M16 8V24M8 16H24"
//                         stroke="white"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                     />
//                 </svg>
//             </div>
//             <p className="font-semibold text-center text-sm">Add Channel</p>
//         </div>
//     );
// }

export default function ChannelsYouFollow(): JSX.Element {
    return (
        <section>
            <h2 className={'text-[24px] font-semibold mb-4'}>
                Channels You Follow
            </h2>
            <div
                style={{ boxShadow: '0px 4px 50px 0px #0000000F' }}
                className={
                    'overflow-x-auto rounded-[20px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400'
                }
            >
                <div className={'flex flex-row gap-10 px-5 py-10 min-w-max'}>
                    {users.map((user) => (
                        <FollowedChannel
                            key={user.id}
                            avatar={user.avatar}
                            fullName={user.fullName}
                            updatedAt={user.updatedAt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
