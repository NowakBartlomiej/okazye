'use client'

import { getCategory } from '@/app/api/fetchCategories';
import { getOccasionsByCategory } from '@/app/api/fetchOccasions'
import CategoryList from '@/components/categoryList';
import OccassionCard from '@/components/occassionCard';
import SkeletonCard from '@/components/skeletonCard';
import { Skeleton } from '@nextui-org/react';
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Page = ({ params }) => {
  const { data, isFetching, hasNextPage } = getOccasionsByCategory(params.id);

  const { data: category, isFetching: isFetchingCategory } = getCategory(params.id);

  const occasions = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [])


  return (
    <div>
      <div className='sticky top-[4rem] z-30 shadow-md bg-white text-custom-green-400 text-[20px] sm:text-[22px] lg:text-[24px] tracking-wider font-bold  py-4 mb-6'>
        <div className='flex justify-center'>
          {isFetchingCategory
            ? <Skeleton className='rounded-lg'>
              <h1>Kategoria</h1>
            </Skeleton>
            : <h1>{category?.data.name}</h1>
          }
        </div>
      </div>



      <div className='flex flex-col-reverse lg:flex-row'>
        <div className='lg:w-1/4 '>
          <div className='bg-gray-400 hidden'>Rekalama</div>
        </div>

        <div className=' w-full lg:w-full grid lg:place-items-center gap-4'>
          {isFetching && <SkeletonCard cards={5} />}

          {!isFetching && <InfiniteScroll
            dataLength={occasions ? occasions.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<SkeletonCard cards={5} />}
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
                  userId={occasion.user.id}
                  categoryId={occasion.category.id}
                  image={occasion.image}
                />
              ))}
            </>
          </InfiniteScroll>}

          {occasions?.length == 0 && <h2 className='flex justify-center text-2xl'>Brak Okazji</h2>}
        </div>

        <div className='lg:w-1/4 mb-6 border-b-3 border-gray-200 pb-4 lg:pb-0 lg:border-0'>
          <CategoryList actualCategoryId={params.id}/>
        </div>
      </div>
    </div>
  )
}

export default Page