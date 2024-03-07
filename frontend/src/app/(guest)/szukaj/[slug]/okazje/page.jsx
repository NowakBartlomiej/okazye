'use client'

import { getSearchOccasion } from '@/app/api/fetchSearch'
import OccassionCard from '@/components/occassionCard'
import SkeletonCard from '@/components/skeletonCard'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Page = ({ params }) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = getSearchOccasion(params.slug)

  const occasions = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [])

  return (
    <>
      {isLoading && <SkeletonCard cards={1} />}
      {occasions?.length == 0 && <h1>Brak wyników dla: "{params.slug}"</h1>}
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
    </>
  )
}

export default Page