import { JSX } from 'react';

import BasedOnYourCommunities from '@/shared/components/BasedOnYourCommunities/BasedOnYourCommunities';
import CreateNewPost from '@/shared/components/CreateNewPost/CreateNewPost';
import FriendshipRequests from '@/shared/components/FriendshipRequests/FriendshipRequests';
import PeopleYouMayKnow from '@/shared/components/PeopleYouMayKnow/PeopleYouMayKnow';
import SocialPost from '@/shared/components/SocialPost/SocialPost';

const socialPostsData = [
    {
        id: 1,
        authorName: 'John Doe',
        viewsCount: 15000,
        updatedAt: '2d',
        content: 'I’ll make Italian Pasta',
        hashTags: ['Italian', 'Food', 'Pasta'],
        avatar: '/pictures/mockImages/avatar.png',
        imageContent: [
            '/pictures/mockImages/socialContent.png',
            '/pictures/mockImages/socialContent.png',
            '/pictures/mockImages/socialContent.png',
            '/pictures/mockImages/socialContent.png',
            '/pictures/mockImages/socialContent.png',
            '/pictures/mockImages/socialContent.png',
        ],
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

export default function Social(): JSX.Element {
    return (
        <main>
            <CreateNewPost />
            <div className="flex flex-col-reverse lg:flex-row gap-4">
                <section className={'grid grid-cols-1 gap-4 items-start'}>
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
                <div className={'space-y-3'}>
                    <FriendshipRequests />
                    <BasedOnYourCommunities />
                    <PeopleYouMayKnow />
                </div>
            </div>
        </main>
    );
}
