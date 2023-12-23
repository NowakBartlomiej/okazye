'use client'
import { getPortalStats } from '@/app/api/fetchStats'
import React from 'react'

const StatsPanels = () => {
    const { data } = getPortalStats();

    return (
        <div className='flex flex-col w-full justify-center items-center gap-4 lg:flex-row lg:gap-10 px-6 py-3'>
        {data?.map((stat, index) => (
            <div 
            className='bg-custom-green-100 text-white w-[75%] rounded-xl px-3 py-2 flex justify-center items-center flex-col gap-0.5 sm:w-[60%] md:w-[55%] lg:w=[50%] lg:max-w-[300px]'
            key={index}>
                <h2 className='font-semibold text-lg sm:text-xl md:text-2xl'>{stat.name}</h2>
                <h3 className='font-medium text-base sm:text-lg md:text-xl'>{stat.count}</h3>
            </div>
        ))}
        </div>
    )
}

export default StatsPanels