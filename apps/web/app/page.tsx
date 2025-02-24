"use client";
import { useState } from 'react';
import AmCharts from '../../storybook/src/stories/AmChart';

export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex h-screen bg-[#fef5f1] pr-8 gap-x-8">
            <div
                className={`bg-white text-center cursor-pointer flex-shrink-0 transition-all duration-300 ${
                    isExpanded ? 'w-[16rem]' : 'w-16'
                }`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
            </div>

            <div
                className={`grid gap-x-6 gap-y-6 flex-1 pt-8 pb-8 ${
                    isExpanded ? 'grid-cols-12' : 'grid-cols-14'
                }`}
                style={{gridTemplateRows: '4.5rem 7.5rem 16.5rem 21.5rem'}}
            >
                <div
                    className={`bg-white rounded-2xl row-start-2 row-span-1 ${
                        isExpanded ? 'col-start-1 col-span-2' : 'col-start-1 col-span-2'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-2 row-span-1 ${
                        isExpanded ? 'col-start-3 col-span-2' : 'col-start-3 col-span-2'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-2 row-span-1 ${
                        isExpanded ? 'col-start-5 col-span-2' : 'col-start-5 col-span-2'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-2 row-span-2 ${
                        isExpanded ? 'col-start-7 col-span-6' : 'col-start-7 col-span-8'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-3 row-span-1 ${
                        isExpanded ? 'col-start-1 col-span-6' : 'col-start-1 col-span-6'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-4 row-span-1 ${
                        isExpanded ? 'col-start-1 col-span-4' : 'col-start-1 col-span-4'
                    }`}
                >
                </div>

                <div
                    className={`bg-white rounded-2xl row-start-4 row-span-1 ${
                        isExpanded ? 'col-start-5 col-span-8' : 'col-start-5 col-span-10'
                    }`}
                >
                </div>
            </div>
        </div>
    );
}
