import { JSX } from 'react';

import PerformanceItem from '@/shared/components/PerformanceSummaryBlock/PerformanceItem';

const performanceData = [
    {
        category: 'Engaged Users',
        period: 'All',
        quantity: 1240,
        percentage: '1,2',
        direction: 'down',
    },
    {
        category: 'Post Engagement',
        period: 'All',
        quantity: 120,
        percentage: '4,5',
        direction: 'down',
    },
    {
        category: 'Page Impresions',
        period: 'All',
        quantity: 1670,
        percentage: '4,3',
        direction: 'up',
    },
    {
        category: 'Post Impresions',
        period: 'All',
        quantity: 456,
        percentage: '2,2',
        direction: 'up',
    },
    {
        category: 'Page Views',
        period: 'All',
        quantity: 126,
        percentage: '4,5',
        direction: 'down',
    },
];

export default function PerformanceSummaryBlock(): JSX.Element {
    return (
        <section
            className={'flex flex-col lg:flex-row rounded-[8px]'}
            style={{ boxShadow: '0px 10px 20px 0px #7090B01F' }}
        >
            {performanceData.map((item) => (
                <PerformanceItem
                    key={item.category}
                    category={item.category}
                    period={item.period}
                    quantity={item.quantity}
                    direction={item.direction}
                    percentage={item.percentage}
                />
            ))}
        </section>
    );
}
