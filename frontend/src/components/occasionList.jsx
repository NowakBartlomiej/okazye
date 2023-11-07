'use client'

import React from 'react'
import OccassionCard from './occassionCard'
import { getInfiniteOccasions } from '@api/fetchOccasions'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonCard from './skeletonCard'
import { useRouter } from 'next/navigation'
import CategoryList from './categoryList'

const OccasionList = ({occasionFilter}) => {
    const router = useRouter();
    
    const {data, fetchNextPage, hasNextPage, isLoading, refetch, isFetching} = getInfiniteOccasions(occasionFilter);

    const occasions = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.data]
    }, [])

    return (
        <div>
            <div className='bg-white text-custom-gray-100 text-[20px] sm:text-[22px] lg:text-[24px] font-semibold flex justify-center py-4 mb-6'>
                <div className=' flex flex-wrap justify-center gap-6 px-5 md:gap-10 lg:gap-14 xl:gap-18'>
                    <span onClick={() => router.push('/nowe')} className={`hover:text-custom-green-100 transition-colors cursor-pointer ${occasionFilter == "latest-occasions" && 'text-custom-green-100'}`}>Nowe</span>
                    <span onClick={() => router.push('/najpopularniejsze')} className={`hover:text-custom-green-100 transition-colors cursor-pointer ${occasionFilter == "most-popular-occasions" && 'text-custom-green-100'}`}>Najpopularniejsze</span>
                    <span onClick={() => console.log("Dla mnie")} className='hover:text-custom-green-100 transition-colors cursor-pointer'>Dla mnie</span>
                    <span onClick={() => console.log("Obserwowani")} className='hover:text-custom-green-100 transition-colors cursor-pointer'>Obserwowani</span>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/4 '>
                    <div className='bg-gray-400 hidden'>Rekalama</div>
                </div>
                <div className=' w-full lg:w-full grid lg:place-items-center'>
                    
                    {isFetching && <SkeletonCard cards={5}/>}
                    
                    {!isFetching && <InfiniteScroll 
                        dataLength={occasions ? occasions.length : 0}
                        next={() => fetchNextPage()}
                        hasMore={hasNextPage}
                        loader={<SkeletonCard cards={5}/>}
                        className='w-full lg:w-full grid lg:place-items-center'
                    >
                        <>
                            {occasions && occasions.map((occasion, index) => (
                                    <OccassionCard
                                        occasionId={occasion.id}
                                        key={index}
                                        categoryName={occasion.category.name}
                                        description={occasion.description}
                                        newPrice={occasion.newPrice}
                                        oldPrice={occasion.oldPrice}
                                        rating={occasion.rating}
                                        title={occasion.title}
                                        url={occasion.url}
                                        userName={occasion.user.name}
                                    />
                            ))}
                        </>
                    </InfiniteScroll> }
                    
                </div>
                <div className='lg:w-1/4 mb-6 border-b-3 border-gray-200 pb-4 lg:pb-0 lg:border-0'>
                    <CategoryList />
                </div>
            </div>
        </div>
    )
}

export default OccasionList