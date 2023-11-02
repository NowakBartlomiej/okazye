import React from 'react'
import OccassionCard from './occassionCard'
import { BsFillPlugFill, BsEyeFill } from 'react-icons/bs'
import { getInfiniteOccasions } from '@api/fetchOccasions'
import { getCategories } from '@/app/api/fetchCategories'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonCard from './skeletonCard'
import { Skeleton } from '@nextui-org/react'

const OccasionList = () => {
    const { data: categories, isLoading: categoriesLoading } = getCategories();

    const {data, fetchNextPage, hasNextPage, isLoading} = getInfiniteOccasions();

    const occasions = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.data]
    }, [])

    return (
        <div>
            <div className='bg-white text-custom-gray-100 text-[20px] sm:text-[22px] lg:text-[24px] font-semibold flex justify-center py-4 mb-6'>
                <div className=' flex flex-wrap justify-center gap-6 px-5 md:gap-10 lg:gap-14 xl:gap-18'>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Nowe</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Najpopularniejsze</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Dla mnie</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Obserwowani</span>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/4 '>
                    <div className='bg-gray-400 hidden'>Rekalama</div>
                </div>
                <div className=' w-full lg:w-full grid lg:place-items-center'>
                    
                    {isLoading && <SkeletonCard cards={5}/>}
                    

                    <InfiniteScroll 
                        dataLength={occasions ? occasions.length : 0}
                        next={() => fetchNextPage()}
                        hasMore={hasNextPage}
                        loader={<SkeletonCard cards={5}/>}
                        className='w-full lg:w-full grid lg:place-items-center'
                    >
                        <>
                            {occasions && occasions.map((occasion, index) => (
                                <OccassionCard
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
                    </InfiniteScroll>
                </div>
                <div className=' lg:w-1/4 mb-6 border-b-3 border-gray-200 pb-4 lg:pb-0 lg:border-0'>
                    <div className='lg:sticky lg:top-2 p-3 rounded-2xl bg-white mx-3 sm:mx-5 md:mx-8 lg:mx-2'>
                        <h2 className='text-custom-green-600 text-xl font-semibold mb-3'>Kategorie</h2>
                        <ul className=' grid grid-cols-2 gap-3 sm:grid-cols-3  lg:flex lg:flex-col'>
                            {categoriesLoading
                                ? (
                                   
                                        <Skeleton className='rounded-lg'>
                                            <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <BsFillPlugFill />
                                                    <p>Kategoria</p>
                                                </div>
                                                <BsEyeFill />
                                            </li>
                                        </Skeleton>
                                   
                                )
                                : (
                                    categories?.data.map((category) => (
                                        <li key={category.id} className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                            <div className='flex items-center gap-2'>
                                                <BsFillPlugFill />
                                                <p>{category.name}</p>
                                            </div>
                                            <BsEyeFill />
                                        </li>
                                    ))
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OccasionList