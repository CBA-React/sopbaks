'use client';

import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

import { formatNumber } from '@/utils/formatNumber';

Chart.Chart.register(
    Chart.ArcElement,
    Chart.Tooltip,
    Chart.Legend,
    Chart.DoughnutController,
);

const DoughnutChart = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart.Chart | null>(null);

    const data = {
        female: 2378,
        male: 1245,
        unspecified: 856,
    };

    const total = data.female + data.male + data.unspecified;

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart.Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Female', 'Male', 'Unspecified'],
                datasets: [
                    {
                        data: [data.female, data.male, data.unspecified],
                        backgroundColor: ['#C32033', '#54A93F', '#FF8896'],
                        borderColor: ['#C32033', '#54A93F', '#FF8896'],
                        borderWidth: 2,
                        hoverBackgroundColor: [
                            '#C32033CC',
                            '#54A93FCC',
                            '#FF8896CC',
                        ],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (
                                context: Chart.TooltipItem<'doughnut'>,
                            ) {
                                const value = context.raw as number;
                                const percentage = (
                                    (value / total) *
                                    100
                                ).toFixed(1);
                                return `${context.label}: ${context.raw} (${percentage}%)`;
                            },
                        },
                    },
                },
                cutout: '60%',
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div
            className="mx-auto p-6 bg-white rounded-[12px] max-w-[300px]"
            style={{ boxShadow: '0px 10px 20px 0px #7090B01F' }}
        >
            <h2 className="text-2xl font-bold text-left mb-5">Viewed by:</h2>

            <div className="relative h-64 mb-6">
                <canvas ref={chartRef}></canvas>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className={'flex items-center justify-center'}>
                        <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: '#C32033' }}
                        ></div>
                        <p className="font-semibold text-[#2B2B2B80]">
                            Female:{' '}
                        </p>
                    </div>
                    <p>{formatNumber(data.female)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className={'flex items-center justify-center'}>
                        <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: '#54A93F' }}
                        ></div>
                        <p className="font-semibold text-[#2B2B2B80]">Male: </p>
                    </div>
                    <p>{formatNumber(data.male)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className={'flex items-center justify-center'}>
                        <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: '#FF8896' }}
                        ></div>
                        <p className="font-semibold text-[#2B2B2B80]">
                            Unspecified:{' '}
                        </p>
                    </div>
                    <p>{formatNumber(data.unspecified)}</p>
                </div>
            </div>
            <div className="text-right mt-4">
                <p className="text-[20px] font-semibold">
                    Total: {formatNumber(total)}
                </p>
            </div>
        </div>
    );
};

export default DoughnutChart;
