import { JSX } from 'react';

import AdsTable from '@/shared/components/AdsTable/AdsTable';
import DoughnutChart from '@/shared/components/DoughnutChart/DoughnutChart';
import LineChart from '@/shared/components/LineChart/LineChart';
import PerformanceSummaryBlock from '@/shared/components/PerformanceSummaryBlock/PerformanceSummaryBlock';

export default function BusinessPage(): JSX.Element {
    return (
        <main>
            <div className={'mb-6'}>
                <h2 className={'text-[24px] font-semibold'}>
                    Performance Summary
                </h2>
                <p className={'text-[#5D5F63]'}>
                    View your key profile performance metrics from the repoting
                </p>
            </div>
            <PerformanceSummaryBlock />
            <AdsTable />
            <h2 className={'text-[24px] font-semibold mt-10'}>Insights</h2>
            <div className={'flex flex-col lg:flex-row mt-5 gap-5'}>
                <LineChart />
                <DoughnutChart />
            </div>
        </main>
    );
}
