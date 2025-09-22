'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as Chart from 'chart.js';

export default function LineChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const periods = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

    // Моковые данные в зависимости от выбранного периода
    const getMockData = (period) => {
        switch (period) {
            case 'Daily':
                return {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        {
                            label: 'Views',
                            data: [
                                8500, 12300, 15600, 18200, 22100, 19800, 14200,
                            ],
                        },
                        {
                            label: 'Followers',
                            data: [1200, 1800, 2300, 2700, 3200, 2900, 2100],
                        },
                    ],
                };

            case 'Weekly':
                return {
                    labels: [
                        'Week 1',
                        'Week 2',
                        'Week 3',
                        'Week 4',
                        'Week 5',
                        'Week 6',
                    ],
                    datasets: [
                        {
                            label: 'Views',
                            data: [85000, 92000, 78000, 105000, 88000, 96000],
                        },
                        {
                            label: 'Followers',
                            data: [12000, 15000, 11500, 18000, 14000, 16500],
                        },
                    ],
                };

            case 'Monthly':
                return {
                    labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                    ],
                    datasets: [
                        {
                            label: 'Views',
                            data: [
                                36000, 26000, 29000, 36000, 40000, 22000, 23000,
                                22000,
                            ],
                        },
                        {
                            label: 'Followers',
                            data: [
                                25000, 33000, 22000, 26000, 33000, 27000, 26000,
                                21000,
                            ],
                        },
                    ],
                };

            case 'Yearly':
                return {
                    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                    datasets: [
                        {
                            label: 'Views',
                            data: [
                                180000, 245000, 320000, 410000, 485000, 520000,
                            ],
                        },
                        {
                            label: 'Followers',
                            data: [15000, 28000, 45000, 78000, 125000, 180000],
                        },
                    ],
                };

            default:
                return {
                    labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                    ],
                    datasets: [
                        {
                            label: 'Views',
                            data: [
                                36000, 26000, 29000, 36000, 40000, 22000, 23000,
                                22000,
                            ],
                        },
                        {
                            label: 'Followers',
                            data: [
                                25000, 33000, 22000, 26000, 33000, 27000, 26000,
                                21000,
                            ],
                        },
                    ],
                };
        }
    };

    // Получаем данные в зависимости от выбранного периода
    const chartData = getMockData(selectedPeriod);

    // Автоматически вычисляем максимальное значение для Y-оси
    const getMaxValue = (data) => {
        const allValues = data.datasets.flatMap((dataset) => dataset.data);
        const maxValue = Math.max(...allValues);
        // Добавляем 20% отступ сверху для красивого отображения
        return Math.ceil((maxValue * 1.2) / 10000) * 10000;
    };

    const maxYValue = getMaxValue(chartData);

    useEffect(() => {
        // Register Chart.js components
        Chart.Chart.register(...Chart.registerables);

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        chartInstance.current = new Chart.Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: chartData.datasets.map((dataset, index) => ({
                    ...dataset,
                    backgroundColor: index === 0 ? '#4CB673' : '#FF8896', // Views: зеленый, Followers: розовый
                    borderRadius: 4,
                    barPercentage: 0.6,
                    categoryPercentage: 0.8,
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: '#dc2626',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            title: function (context) {
                                // Обработка разных форматов меток для разных периодов
                                const label = context[0].label;

                                if (selectedPeriod === 'Monthly') {
                                    const monthNames = {
                                        Jan: 'January',
                                        Feb: 'February',
                                        Mar: 'March',
                                        Apr: 'April',
                                        May: 'May',
                                        Jun: 'June',
                                        Jul: 'July',
                                        Aug: 'August',
                                        Sep: 'September',
                                        Oct: 'October',
                                        Nov: 'November',
                                        Dec: 'December',
                                    };
                                    return monthNames[label] + ' 2025';
                                } else if (selectedPeriod === 'Daily') {
                                    const dayNames = {
                                        Mon: 'Monday',
                                        Tue: 'Tuesday',
                                        Wed: 'Wednesday',
                                        Thu: 'Thursday',
                                        Fri: 'Friday',
                                        Sat: 'Saturday',
                                        Sun: 'Sunday',
                                    };
                                    return dayNames[label] || label;
                                } else {
                                    return label;
                                }
                            },
                            label: function (context) {
                                const value = context.parsed.y;
                                let formattedValue;

                                if (value >= 1000000) {
                                    formattedValue =
                                        (value / 1000000).toFixed(1) + 'M';
                                } else if (value >= 1000) {
                                    formattedValue = value / 1000 + 'k';
                                } else {
                                    formattedValue = value.toString();
                                }

                                if (context.datasetIndex === 1) {
                                    return formattedValue + ' followers';
                                }
                                return formattedValue + ' views';
                            },
                        },
                        // Убираем фильтр - теперь показываем tooltip для всех элементов
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 12,
                                family: 'system-ui, -apple-system, sans-serif',
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: maxYValue, // Динамическое максимальное значение
                        grid: {
                            color: '#e5e7eb',
                            drawBorder: false,
                            lineWidth: 1,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            stepSize: Math.ceil(maxYValue / 5 / 1000) * 1000, // Динамический шаг
                            color: '#9ca3af',
                            font: {
                                size: 12,
                                family: 'system-ui, -apple-system, sans-serif',
                            },
                            callback: function (value) {
                                if (value >= 1000000) {
                                    return (value / 1000000).toFixed(1) + 'M';
                                } else if (value >= 1000) {
                                    return value / 1000 + 'K';
                                }
                                return value;
                            },
                        },
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart',
                },
            },
        });

        // Cleanup function
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [selectedPeriod, chartData, maxYValue]); // Добавил maxYValue в зависимости

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
        setIsDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-sm">
            {/* Custom header with dropdown */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Engagement</h2>

                {/* Legend and Dropdown */}
                <div className="flex items-center gap-6">
                    {/* Legend */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: '#4CB673' }}
                            ></div>
                            <span className="text-sm text-gray-600">Views</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: '#FF8896' }}
                            ></div>
                            <span className="text-sm text-gray-600">
                                Followers
                            </span>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className="relative dropdown-container">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors"
                        >
                            {selectedPeriod}
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                    isDropdownOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                                {periods.map((period) => (
                                    <button
                                        key={period}
                                        onClick={() =>
                                            handlePeriodChange(period)
                                        }
                                        className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                                            selectedPeriod === period
                                                ? 'text-blue-600 bg-blue-50 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div
                style={{ position: 'relative', height: '400px', width: '100%' }}
            >
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}
