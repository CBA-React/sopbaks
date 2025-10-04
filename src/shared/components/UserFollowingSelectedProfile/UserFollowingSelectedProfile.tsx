import { JSX } from 'react';
import Image from 'next/image';

import Divider from '@/shared/components/Divider/Divider';

import MoonIcon from 'public/icons/Moon.svg';
import PhoneIcon from 'public/icons/phone.svg';
import ShareIcon from 'public/icons/share.svg';

export default function UserFollowingSelectedProfile(): JSX.Element {
    return (
        <div
            className="mx-auto bg-white p-6 rounded-[20px] order-1 lg:order-2"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            <div className="flex justify-end mb-4">
                <ShareIcon className="w-6 h-6 cursor-pointer" />
            </div>

            <div className="flex flex-col items-center mb-6">
                <Image
                    src="/pictures/mockImages/avatar.png"
                    alt="Joe Dohn"
                    width={96}
                    height={96}
                    className="rounded-full mb-4"
                />
                <h1 className="text-2xl font-bold">Joe Dohn</h1>
                <p className="text-gray-600">@dohnfoodbloger</p>
                <p className="text-gray-500 text-sm mt-1">
                    Food blogger & content creator
                </p>
            </div>

            <div className="flex justify-around mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                    <p className="text-2xl font-bold">548</p>
                    <p className="text-sm text-gray-500">Posts</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">12.7K</p>
                    <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">221</p>
                    <p className="text-sm text-gray-500">Following</p>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">About Me</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Hi there! 👋 I&#39;m a food blogger & video creator
                    passionate about sharing delicious recipes, kitchen hacks,
                    and culinary stories. Let&#39;s make cooking fun, easy, and
                    inspiring
                </p>
            </div>

            <div>
                <h2 className="text-lg font-bold mb-3">Contact Information</h2>

                <Divider />
                <div className="flex items-center gap-3 mb-4 mt-4">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center">
                        <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Phone Number</p>
                        <p className="text-sm text-gray-600">
                            +123 456 789 000
                        </p>
                    </div>
                </div>

                <Divider />
                <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center">
                        <MoonIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Email Address</p>
                        <p className="text-sm text-gray-600">
                            joedohn@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
