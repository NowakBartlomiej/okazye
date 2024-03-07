
import { BsFillPlugFill, BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAuth } from '@/hooks/useAuth';
import { useFollowUnfollowUser, getFollowers, getFollowedUsers } from '@/app/api/followUser';


const UserList = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { mutate: followUnfollowUser } = useFollowUnfollowUser();
  const { data: users, isLoading: usersLoading } = getFollowedUsers();
  const { data: followers, isLoading: followersIsLoading } = getFollowers();

  console.log(followers);

  return (
    <aside className='lg:sticky lg:top-[9.2rem] p-3 rounded-2xl bg-white mx-3 sm:mx-5 md:mx-8 lg:mx-2'>
      <h2 className='text-custom-green-600 text-xl font-semibold mb-3'>Obserwowani</h2>
      <ul className=' grid grid-cols-2 gap-3 sm:grid-cols-3  lg:flex lg:flex-col overflow-y-auto h-[500px]'>
        {users?.data.length == 0 && <h1>Brak obserwujących</h1>}
        {usersLoading
          ? (
            <h1>Loading</h1>
          )
          : (
            users?.data.map((u) => (
              <li key={u.id} className={`bg-custom-light-gray-200 text-custom-green-600'} hover:bg-custom-green-100 hover:text-white transition-colors rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2 cursor-pointer`}>
                <p>{u.name}</p>
                {user && (
                  !followersIsLoading && (
                    followers.find(f => f.userId == u.id)
                    && <BsFillEyeSlashFill
                      className='cursor-pointer hover:text-slate-300 transition-colors'
                      onClick={(e) => {
                        e.stopPropagation();
                        followUnfollowUser({ userId: u.id })
                      }}
                      size={20}
                    />
                  )
                )}

              </li>
            ))
          )
        }
      </ul>
    </aside>
  )
}

export default UserList