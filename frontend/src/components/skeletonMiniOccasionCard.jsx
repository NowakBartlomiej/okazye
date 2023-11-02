import { Skeleton, Badge, Image } from '@nextui-org/react'
import React from 'react'

const SkeletonMiniOccasionCard = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Skeleton className="rounded-lg w-[200px] h-[133px]" />

            <Skeleton className='rounded-lg h-[32px]'>
                <h2 className='text-center font-bold text-2xl'>Tytuł okazji</h2>
            </Skeleton>
            
            <Skeleton className='rounded-lg h-[28px]'>
                <h3 className='text-center font-bold text-xl text-custom-green-100'>123,45 zł</h3>
            </Skeleton>
        </div>
    )
}

export default SkeletonMiniOccasionCard