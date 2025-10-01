import { JSX } from 'react';

import Button from '@/shared/components/Button/Button';

import TrashIcon from 'public/icons/trash.svg';

const friendshipRequestsData = [
    {
        fullName: 'John Doe',
        membersCount: 764,
        time: '04:35 AM',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'John Doe2',
        membersCount: 764,
        time: '04:35 AM',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        fullName: 'John Doe3',
        membersCount: 764,
        time: '04:35 AM',
        avatar: '/pictures/mockImages/avatar.png',
    },
];

export default function FriendshipRequests(): JSX.Element {
    return (
        <section className="w-full lg:max-w-md mx-auto p-6 bg-white border-[1.9px] border-[#00000008] rounded-[20px]">
            <h2 className="text-[20px] font-semibold text-[#C32033] mb-6">
                Friendship requests
            </h2>

            {friendshipRequestsData.map((request, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={request.avatar}
                                alt="Avatar"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {request.fullName}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {request.membersCount} members
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-gray-400">
                            {request.time}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <button
                            className={
                                'text-white bg-[#AAAAAA] rounded-[10px] py-[8px] px-8 md:px-[60px] flex items-center justify-center cursor-pointer'
                            }
                        >
                            <span className="hidden md:inline">Delete</span>
                            <TrashIcon className="md:hidden w-5 h-5" />
                        </button>
                        <Button
                            text={'Confirm'}
                            className={'w-full justify-center'}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
