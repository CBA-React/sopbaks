import { JSX } from 'react';

import DiscoverBanner from '@/shared/components/DiscoverBanner/DiscoverBanner';
import Tabs from '@/shared/components/Tabs/Tabs';
import BlogItem from '@/shared/components/BlogItem/BlogItem';
import StreamItem from '@/shared/components/StreamItem/StreamItem';
import TopCreators from '@/shared/components/TopCreators/TopCreators';

export default function Discover(): JSX.Element {
    return (
        <main className={'max-w-[1100px]'}>
            <DiscoverBanner />
            <div className={'flex flex-row justify-between'}>
                <Tabs />
                <TopCreators />
            </div>
        </main>
    );
}

{/*<StreamItem*/}
{/*    postTitle={'Real Estate'}*/}
{/*    postImage={'/pictures/mockImages/realEstate.png'}*/}
{/*    authorTitle={'Capital Funding Group'}*/}
{/*    authorName={'Guy Hawkins '}*/}
{/*    authorAvatar={'/pictures/mockImages/avatar.png'}*/}
{/*/>*/}
{/*<BlogItem*/}
{/*    postImage={'/pictures/mockImages/realEstate.png'}*/}
{/*    tags={['Italian', 'Food', 'Pasta']}*/}
{/*    postTitle={'I will make Italian Pasta'}*/}
{/*    authorName={'Joe Dohn'}*/}
{/*    postedTime={'2d'}*/}
{/*    authorAvatar={'/pictures/mockImages/avatar.png'}*/}
{/*    viewsCount={'15k'}*/}
{/*/>*/}
