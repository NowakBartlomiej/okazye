'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import { getUserOccasions } from '@/app/api/fetchOccasions'
import SkeletonCard from '@/components/skeletonCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import OccassionCard from '@/components/occassionCard'

const Page = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = getUserOccasions();

  const occasions = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [])

  return (
    <>
      <Navigation />
      <Sidebar>
        <div className='lg:w-[70%] lg:mx-auto'>
          <div className='grid lg:place-items-center'>
            {isLoading && <SkeletonCard cards={1} />}

            <InfiniteScroll
              dataLength={occasions ? occasions.length : 0}
              next={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={<SkeletonCard cards={1} />}
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
            </InfiniteScroll>
          </div>
        </div>
      </Sidebar>
    </>
  )
}

export default Page