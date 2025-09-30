import { JSX } from 'react';

import Business from '@/shared/components/Home/Business/Business';
import ChannelsYouFollow from '@/shared/components/Home/ChannelsYouFollow/ChannelsYouFollow';
import Streaming from '@/shared/components/Home/Streaming/Streaming';
import SocialPost from '@/shared/components/SocialPost/SocialPost';
import CreateNewPost from '@/shared/components/CreateNewPost/CreateNewPost';

const socialPostsData = [
    {
        id: 1,
        authorName: 'John Doe',
        viewsCount: 15000,
        updatedAt: '2d',
        content: 'I’ll make Italian Pasta',
        hashTags: ['Italian', 'Food', 'Pasta'],
        avatar: '/pictures/mockImages/avatar.png',
        imageContent: '/pictures/mockImages/socialContent.png',
        likes: 200,
        dislikes: 1,
        commentCount: 234,
    },
    {
        id: 2,
        authorName: 'John Doe',
        viewsCount: 15000,
        updatedAt: '2d',
        content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        hashTags: ['Italian', 'Food', 'Pasta'],
        avatar: '/pictures/mockImages/avatar.png',
        likes: 200,
        dislikes: 1,
        commentCount: 234,
    },
    {
        id: 3,
        authorName: 'John Doe',
        viewsCount: 15000,
        updatedAt: '2d',
        content: 'Test',
        hashTags: ['Italian', 'Food', 'Pasta'],
        avatar: '/pictures/mockImages/avatar.png',
        likes: 200,
        dislikes: 1,
        commentCount: 234,
    },
];

export default function HomePage(): JSX.Element {
    return (
        <main>
            <CreateNewPost />
            <ChannelsYouFollow />
            <div className={'mt-4 flex justify-between'}>
                <p className={'text-[24px] font-semibold'}>Social</p>

                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors group cursor-pointer">
                    <span className="text-sm font-medium">View All</span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                    >
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <section
                className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start mt-8'
                }
            >
                {socialPostsData.map((socialPost) => (
                    <SocialPost
                        imageContent={socialPost.imageContent}
                        avatar={socialPost.avatar}
                        key={socialPost.id}
                        authorName={socialPost.authorName}
                        viewsCount={socialPost.viewsCount}
                        updatedAt={socialPost.updatedAt}
                        content={socialPost.content}
                        hashTags={socialPost.hashTags}
                        likes={socialPost.likes}
                        dislikes={socialPost.dislikes}
                        commentCount={socialPost.commentCount}
                    />
                ))}
            </section>
            <Business />
            <Streaming />
        </main>
    );
}
