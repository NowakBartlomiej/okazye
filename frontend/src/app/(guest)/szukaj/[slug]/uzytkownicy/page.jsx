'use client'

import { getSearchUsers } from '@/app/api/fetchSearch'
import { Avatar, Tooltip } from '@nextui-org/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BsFillPlugFill, BsEyeFill, BsFillEyeSlashFill, BsEyeSlash } from 'react-icons/bs'
import { useAuth } from '@/hooks/useAuth'
import { getFollowers, useFollowUnfollowUser } from '@/app/api/followUser'

const Page = ({ params }) => {
  const {user} = useAuth();
  
  const { data, fetchNextPage, hasNextPage, isLoading } = getSearchUsers(params.slug)
  const {mutate: followUnfollowUser } = useFollowUnfollowUser();

  const users = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [])

  const {data: followers, isLoading: isLoadingFollowers, refetch} = getFollowers();

  return (
    <>
      {isLoading && <h1>loading...</h1>}
      {users?.length == 0 && <h1>Brak wyników dla: "{params.slug}"</h1>}
      <InfiniteScroll
        dataLength={users ? users.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h1>loading...</h1>}
        className='w-[57%] md:w-[40%] mx-auto lg:w-[500px] grid lg:place-items-center'
      >
        <>
          {users && users.map((userMap, index) => (
            <div key={index} className='py-4 flex items-center justify-between gap-4 mb-4 px-3 rounded-xl shadow-xl bg-white w-full'>
              <div className='flex items-center gap-5'>
                <Avatar size='lg' className='border-4 border-custom-green-100' />
                <div>
                  <h3 className='font-bold text-base'>{userMap.name}</h3>
                </div>
                <div>
                </div>
              </div>
              <div>
                {user && (
                    !isLoadingFollowers && (
                      followers.find(follower => follower.followerId == user.id && follower.userId == userMap.id)
                      ? 
                      <Tooltip content="Przestań obserwować" placement='bottom' size='md'>
                        <div className='cursor-pointer' onClick={(e) => {
                          e.stopPropagation();
                          followUnfollowUser({userId: userMap.id})
                          refetch()
                        }}>
                          <BsFillEyeSlashFill size={22}/>
                        </div>
                      </Tooltip>
                      
                      : 
                      <Tooltip content="Obserwuj" placement='bottom' size='md'>
                        <div className='cursor-pointer' onClick={(e) => {
                          e.stopPropagation();
                          followUnfollowUser({userId: userMap.id})
                          refetch()
                        }}>
                          <BsEyeFill size={22}/>
                        </div>
                      </Tooltip>
                    )
                )}
              </div>
            </div>
          ))}

        </>
      </InfiniteScroll>
    </>
  )
}

export default Page