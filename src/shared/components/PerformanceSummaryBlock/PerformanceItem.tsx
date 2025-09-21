import { JSX } from 'react';

import { formatAmount } from '@/utils/formatNumber';

import ArrowDecrease from 'public/icons/performance-decrease-arrow.svg';
import ArrowIncrease from 'public/icons/performance-increase-arrow.svg';

interface Props {
    category: string;
    period: string;
    quantity: number;
    direction: string;
    percentage: string;
}

export default function PerformanceItem({
    category,
    period,
    quantity,
    direction,
    percentage,
}: Props): JSX.Element {
    return (
        <div
            className={
                'flex-1 max-lg:border-b max-lg:border-b-[#DBDEEB] lg:border-r lg:border-r-[#DBDEEB] py-[18px] px-[18px] space-y-2 last:border-r-0 last:border-b-0'
            }
        >
            <p className={'text-[#313131] text-[16px]'}>{category}</p>
            <p className={'text-[#5D5F63] text-[14px]'}>{period}</p>

            <div className={'flex justify-between'}>
                <p className={'text-[32px]'}>{formatAmount(quantity)}</p>
                <div className={'flex justify-between items-center'}>
                    <p className={'text-[#5D5F63] text-[14px]'}>
                        {percentage}%
                    </p>
                    {direction === 'up' && <ArrowIncrease />}
                    {direction === 'down' && <ArrowDecrease />}
                </div>
            </div>
        </div>
    );
}
