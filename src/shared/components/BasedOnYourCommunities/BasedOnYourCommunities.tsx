import { JSX } from 'react';

const communitiesData = [
    {
        id: 1,
        name: 'Websters Shivaji',
        membersCount: 764,
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 2,
        name: 'Websters Shivaji',
        membersCount: 764,
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 3,
        name: 'Websters Shivaji',
        membersCount: 764,
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 4,
        name: 'Websters Shivaji',
        membersCount: 764,
        avatar: '/pictures/mockImages/avatar.png',
    },
];

export default function BasedOnYourCommunities(): JSX.Element {
    return (
        <section className="w-full lg:max-w-md mx-auto p-6 bg-white border-[1.9px] border-[#00000008] rounded-[20px]">
            <h2 className="text-xl font-semibold text-[#C32033] mb-6">
                Based on your communities
            </h2>

            <div className="space-y-4">
                {communitiesData.map((community) => (
                    <div
                        key={community.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={community.avatar}
                                alt={community.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-base font-medium text-gray-900">
                                    {community.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {community.membersCount} members
                                </p>
                            </div>
                        </div>

                        <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-800 transition cursor-pointer">
                            <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                <span className="text-lg leading-none">+</span>
                            </div>
                            <span className="text-xs">Join</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
