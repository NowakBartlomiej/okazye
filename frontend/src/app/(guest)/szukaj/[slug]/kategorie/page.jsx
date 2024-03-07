'use client'

import { getSearchCategories } from '@/app/api/fetchSearch'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BsFillPlugFill, BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { useAuth } from '@/hooks/useAuth'
import { getCategoryFollowers, useFollowUnfollowCategory } from '@/app/api/followCategory'
import { useRouter } from 'next/navigation'



const Page = ({ params }) => {
  const {user} = useAuth();
  const router = useRouter();
  const {data: categoryFollowers, isLoading: categoryIsLoading, refetch: categoryRefetch} = getCategoryFollowers();

  const {mutate: followUnfollowCategory} = useFollowUnfollowCategory();

  const {data, fetchNextPage, hasNextPage, isLoading} = getSearchCategories(params.slug)
  
  const categories = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [])

  console.log(categories);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {categories?.length == 0 && <h1>Brak wyników dla: "{params.slug}"</h1>}
      <InfiniteScroll
        dataLength={categories ? categories.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h1>Loooo</h1>}
        className='w-full lg:w-full grid lg:place-items-center'
      >
        <ul className='flex flex-col mx-auto  gap-3 sm:grid-cols-3  lg:flex lg:flex-col overflow-y-auto bg-white w-[300px]'>
          {categories && categories.map((category, index) => (
            <li onClick={() => router.push(`/kategoria/${category.id}`)} key={category.id} className={`bg-custom-light-gray-200 hover:bg-custom-green-100 hover:text-white transition-colors rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2 cursor-pointer`}>
            <div className='flex items-center gap-2'>
                <BsFillPlugFill />
                <p>{category.name}</p>
            </div>
            {user && (
                !isLoading && (
                    categoryFollowers.find(categoryFollower => categoryFollower.userId == user.id && categoryFollower.categoryId == category.id)
                        ?
                        <BsFillEyeSlashFill
                            className='cursor-pointer hover:text-slate-300 transition-colors'
                            onClick={(e) => {
                                e.stopPropagation();
                                followUnfollowCategory({ categoryId: category.id })
                                categoryRefetch()
                            }} size={20} />
                        :
                        <BsEyeFill
                            className='cursor-pointer hover:text-slate-300 transition-colors'
                            onClick={(e) => {
                                e.stopPropagation();
                                followUnfollowCategory({ categoryId: category.id })
                                categoryRefetch()
                            }} size={20} />
                )
            )}
        </li>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  )
}

export default Page