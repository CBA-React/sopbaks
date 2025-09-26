import { JSX } from 'react';
import Link from 'next/link';

import AdsTable from '@/shared/components/AdsTable/AdsTable';
import Button from '@/shared/components/Button/Button';
import DoughnutChart from '@/shared/components/DoughnutChart/DoughnutChart';
import LineChart from '@/shared/components/LineChart/LineChart';

export default function Ads(): JSX.Element {
    return (
        <main className={'w-[100%]'}>
            <div className="flex lg:justify-end">
                <Link href="/create-campaign" className="w-full lg:w-auto">
                    <Button
                        text={'Create New Campaign'}
                        className="py-[10px] px-10 font-semibold w-full lg:w-auto justify-center"
                    />
                </Link>
            </div>
            <h2 className={'text-[24px] font-semibold mt-10'}>Insights</h2>
            <div className={'flex flex-col lg:flex-row mt-5 gap-5'}>
                <LineChart />
                <DoughnutChart />
            </div>
            <AdsTable />
        </main>
    );
}
