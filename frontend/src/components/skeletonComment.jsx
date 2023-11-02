import { Skeleton } from '@nextui-org/react'
import React from 'react'

const SkeletonComment = () => {
    return (
        <div className='border-t-2 py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-5'>
                <Skeleton className="flex rounded-full w-14 h-14" />
                <div className='flex flex-col gap-1'>
                    <Skeleton className='rounded-xl h-4'>
                        <h3 className='font-bold text-base'>Nazwa użytkownika</h3>
                    </Skeleton>
                    <Skeleton className='rounded-xl h-4 w-16'>
                        <p className='text-sm text-custom-light-gray-500'>05.06.2023</p>
                    </Skeleton>
                </div>
            </div>

            <Skeleton className='rounded-xl w-[50%]'>
                <p className='font-normal text-base ml-2.5'>Komentarz użytkownika</p>
            </Skeleton>
            <div className='font-medium text-base flex items-center gap-10'>
                <Skeleton className='rounded-xl'>
                    <div className='flex gap-3 items-center'>
                        <p>Emotka Zareaguj</p>
                    </div>
                </Skeleton>

                <div className='flex gap-3 items-center'>
                    <Skeleton className='rounded-xl'>
                        <p>Emotka Odpowiedz</p>
                    </Skeleton>
                </div>
            </div>
        </div>
    )
}

export default SkeletonComment