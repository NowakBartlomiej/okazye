import { useRouter } from 'next/navigation'
import React from 'react'
import { Card, CardBody, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, useDisclosure } from "@nextui-org/react";
import { BsPlusCircleFill, BsFillDashCircleFill, BsBoxArrowUpRight, BsFillHouseDoorFill, BsEyeFill, BsFillEyeSlashFill, BsPencilSquare, BsFillTrashFill, BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth';
import { useFollowUnfollowUser, getFollowers } from '@/app/api/followUser';
import { useFollowUnfollowCategory, getCategoryFollowers } from '@/app/api/followCategory';
import DeleteModal from './deleteModal';
import { rateOccasion } from '@/app/api/fetchRating';
import { hasModeratorRole } from '@/app/api/fetchRoles';

const OccassionCard = ({ occasionId, title, description, categoryName, newPrice, oldPrice, rating, url, userName, userId, categoryId, image }) => {
    const router = useRouter()
    const { user } = useAuth();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {data: isModerator, isLoading: mIsLoading} = hasModeratorRole();

    const { data: followers, isLoading, refetch } = getFollowers();
    const { data: categoryFollowers, isLoading: categoryIsLoading, refetch: categoryRefetch } = getCategoryFollowers();
    const {mutate: rate, error} = rateOccasion();
    const {mutate: followUnfollowCategory} = useFollowUnfollowCategory();
    const {mutate: followUnfollowUser} = useFollowUnfollowUser();


    return (
        <>
            <DeleteModal occasionId={occasionId} isOpen={isOpen} occasionTitle={title} onOpenChange={onOpenChange} />

            <div onClick={() => router.push(`/okazja/${occasionId}`)} className='lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2 cursor-pointer'>
                <Card
                    className="border-none bg-white "
                    shadow="sm"
                >
                    <CardBody>
                        {(user?.id == userId || isModerator) && (
                            <div className='flex  w-fit gap-3 mb-4'>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/edytuj/${occasionId}`)
                                    }}
                                    className='text-lg bg-blue-400 text-white hover:bg-blue-300'
                                    startContent={<BsPencilSquare size={18} />}>
                                    Edytuj
                                </Button>

                                <Button
                                    onPress={onOpen}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    className='text-lg bg-red-500 text-white hover:bg-red-400'
                                    startContent={<BsFillTrashFill size={18} />}>
                                    Usuń
                                </Button>
                            </div>
                        )}
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <Image
                                    alt={title}
                                    className="object-cover"
                                    height={200}
                                    shadow="md"
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
                                    width="100%"
                                    placeholder='no-image'
                                />
                            </div>

                            <div className="flex flex-col col-span-6 md:col-span-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">


                                    </div>
                                    <div onClick={(e) => e.stopPropagation()} className='border-2 border-custom-green-100 rounded-md flex items-center gap-5 px-4 py-2'>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                rate({
                                                    occasionId: occasionId,
                                                    rating: -1,
                                                })
                                            }}
                                            disabled={!user} 
                                            className='text-red-600 hover:text-red-500 transition-colors'><BsFillDashCircleFill size={30} /></button>
                                        <span className='text-black font-semibold text-xl'>{rating}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                rate({
                                                    occasionId: occasionId,
                                                    rating: 1,
                                                })
                                            }}
                                            disabled={!user} 
                                            className='text-green-700 hover:text-green-600 transition-colors'><BsPlusCircleFill size={30} /></button>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-3 gap-1">

                                    <h2 className="text-[32px] font-bold">{title}</h2>

                                    {(newPrice && oldPrice) && (
                                        <>
                                            <div className='text-[22px] font-semibold flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <h3 className='text-custom-green-100'>{newPrice} zł</h3>
                                                    <h3 className='text-custom-light-gray-500 line-through'>{oldPrice} zł</h3>
                                                </div>
                                                <div className='bg-custom-green-100 text-white rounded-2xl px-1.5 py-1'>
                                                    <p>{Math.floor(((oldPrice - newPrice) / oldPrice) * 100)}%</p>
                                                </div>
                                            </div>

                                            {/* <small className='text-custom-light-gray-500 text-base'>Najniższa cena z 30 dni {newPrice} zł</small> */}
                                        </>
                                    )
                                    }

                                    {(newPrice && !oldPrice) && (
                                        <>
                                            <div className='text-[22px] font-semibold flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <h3 className='text-custom-green-100'>{newPrice} zł</h3>
                                                </div>
                                            </div>

                                            {/* <small className='text-custom-light-gray-500 text-base'>Najniższa cena z 30 dni {newPrice} zł</small> */}
                                        </>
                                    )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className=' mt-3'>
                            <p className='text-lg'>{description}</p>
                        </div>

                        <div className='flex gap-3 justify-between mt-3'>
                            <Dropdown>

                                <div className='flex flex-col justify-end'>
                                    <DropdownTrigger>
                                        <h2 className='bg-custom-green-100 hover:bg-custom-green-200 transition-colors px-2 py-1 text-white rounded-xl text-base'>Od: {userName}</h2>
                                    </DropdownTrigger>
                                </div>

                                <DropdownMenu aria-label="Static Actions">
                                    {/* <DropdownItem key="profile">Profil</DropdownItem> */}
                                    {user && (
                                        !isLoading && (
                                            followers.find(follower => follower.followerId == user.id && follower.userId == userId)
                                                ? <DropdownItem onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowUser({ userId: userId })
                                                    refetch()
                                                }} key="unfollow">Przestań obserwować</DropdownItem>
                                                : <DropdownItem onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowUser({ userId: userId })
                                                    refetch()
                                                }} key="follow">Obserwuj</DropdownItem>
                                        )
                                    )
                                    }
                                </DropdownMenu>
                            </Dropdown>
                            <div className='flex flex-col gap-2'>
                                {url && (
                                    <Button startContent={<BsBoxArrowUpRight size={20} />} className='bg-custom-green-400 hover:bg-[#1d4c4fcc] transition-colors text-white text-[16px] font-medium'>
                                        <Link target='_blank' href={url}>Przekieruj do okazji</Link>
                                    </Button>
                                )}


                                <div className='bg-custom-light-gray-200 text-black text-base font-medium flex justify-between items-center px-3 py-2 rounded-xl'>
                                    <div className='flex gap-1 items-center'>
                                        <BsStarFill size={20} />
                                        <p>{categoryName}</p>
                                    </div>
                                    {user && (
                                        !categoryIsLoading && (
                                            categoryFollowers.find(categoryFollower => categoryFollower.userId == user.id && categoryFollower.categoryId == categoryId)
                                                ?
                                                <BsFillEyeSlashFill
                                                    className='cursor-pointer hover:text-slate-700 transition-colors'
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        followUnfollowCategory({ categoryId: categoryId })
                                                        categoryRefetch()
                                                    }} size={20} />
                                                :
                                                <BsEyeFill
                                                    className='cursor-pointer hover:text-slate-700 transition-colors'
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        followUnfollowCategory({ categoryId: categoryId })
                                                        categoryRefetch()
                                                    }} size={20} />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default OccassionCard