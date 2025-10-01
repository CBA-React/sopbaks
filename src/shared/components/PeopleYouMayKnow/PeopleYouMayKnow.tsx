import { JSX } from 'react';

const peopleData = [
    {
        id: 1,
        name: 'Websters Shivaji',
        description: 'President at Websters-shivaji',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 2,
        name: 'Websters Shivaji',
        description: 'Technical Head @ Enactus',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 3,
        name: 'Websters Shivaji',
        description: '3rd Year undergrad student student',
        avatar: '/pictures/mockImages/avatar.png',
    },
    {
        id: 4,
        name: 'Websters Shivaji',
        description: 'Physics Honours student',
        avatar: '/pictures/mockImages/avatar.png',
    },
];

export default function PeopleYouMayKnow(): JSX.Element {
    return (
        <section className="w-full lg:max-w-md mx-auto p-6 bg-white border-[1.9px] border-[#00000008] rounded-[20px]">
            <h2 className="text-xl font-semibold text-[#C32033] mb-6">
                People You May Know
            </h2>

            <div className="space-y-4">
                {peopleData.map((person) => (
                    <div
                        key={person.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                            <img
                                src={person.avatar}
                                alt={person.name}
                                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-medium text-gray-900 truncate">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-gray-600 truncate">
                                    {person.description}
                                </p>
                            </div>
                        </div>

                        <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-800 transition cursor-pointer flex-shrink-0">
                            <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                <span className="text-lg leading-none">+</span>
                            </div>
                            <span className="text-xs">Follow</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
