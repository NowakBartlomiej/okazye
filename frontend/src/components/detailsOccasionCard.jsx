import React from 'react'
import { Card, CardBody, Image, Button, Avatar } from "@nextui-org/react";
import { BsPlusCircleFill, BsFillDashCircleFill, BsBoxArrowUpRight, BsFillHouseDoorFill, BsEyeFill, BsFillEyeSlashFill, BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth';
import { getFollowers, useFollowUnfollowUser } from '@/app/api/followUser';
import { useFollowUnfollowCategory, getCategoryFollowers } from '@/app/api/followCategory';

const DetailsOccasionCard = ({ title, categoryName, newPrice, oldPrice, rating, url, userName, userId, categoryId, image }) => {
    const { user } = useAuth();

    const {mutate: followUnfollowCategory} = useFollowUnfollowCategory();
    const { data: followers, isLoading } = getFollowers();
    const { data: categoryFollowers, isLoading: categoryIsLoading } = getCategoryFollowers();
    const {mutate: followUnfollowUser} = useFollowUnfollowUser()

    return (
        <Card
            className="border-none bg-white lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt={title}
                            className="object-cover"
                            height={200}
                            shadow="md"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">


                            </div>
                            <div className='border-2 border-custom-green-100 rounded-md flex items-center gap-5 px-4 py-2'>
                                <button className='text-red-600'><BsFillDashCircleFill size={30} /></button>
                                <span className='text-black font-semibold text-xl'>{rating}</span>
                                <button className='text-green-700'><BsPlusCircleFill size={30} /></button>
                            </div>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">

                            <h2 className="text-[40px] font-bold">{title}</h2>

                            {(newPrice && oldPrice) && (
                                <>
                                    <div className='text-[22px] font-semibold flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <h3 className='text-custom-green-100 text-3xl font-semibold'>{newPrice} zł</h3>
                                            <h3 className='text-custom-light-gray-500 text-3xl font-semibold line-through'>{oldPrice} zł</h3>
                                        </div>
                                        <div className='bg-custom-green-100 text-3xl font-semibold text-white rounded-2xl px-2.5 py-1.5'>
                                            <p>{Math.floor(((oldPrice - newPrice) / oldPrice) * 100)}%</p>
                                        </div>
                                    </div>

                                    {/* <small className='text-custom-light-gray-500 text-lg'>Najniższa cena z 30 dni {newPrice} zł</small> */}
                                </>
                            )}
                            {(newPrice && !oldPrice) && (
                                    <>
                                        <div className='text-[22px] font-semibold flex items-center justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <h3 className='text-custom-green-100 text-3xl'>{newPrice} zł</h3>
                                            </div>
                                        </div>

                                        {/* <small className='text-custom-light-gray-500 text-base'>Najniższa cena z 30 dni {newPrice} zł</small> */}
                                    </>
                                )
                                }

                            {url && (
                                <div className='flex justify-center'>
                                    <Button startContent={<BsBoxArrowUpRight size={26} />} className='w-[70%] bg-custom-green-400 hover:bg-[#1d4c4fcc] transition-colors  text-white text-2xl font-semibold py-7'>
                                        <Link target='_blank' href={url}>Pzekieruj do okazji</Link>
                                    </Button>
                                </div>
                            )}


                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div className='flex gap-4'>
                        <Avatar size='lg' className='border-4 border-custom-green-100' />
                        <div>
                            <p className='text-xl font-normal'>Okazję dodał:</p>
                            <div className='flex items-center gap-3'>
                                <p className='text-xl font-bold'>{userName}</p>
                                {user && (
                                    !isLoading && (
                                        followers.find(follower => follower.followerId == user.id && follower.userId == userId)
                                            ?
                                            <BsFillEyeSlashFill
                                                className='cursor-pointer hover:text-slate-700 transition-colors'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowUser({ userId: userId })
                                                    
                                                }} size={20} />
                                            :
                                            <BsEyeFill
                                                className='cursor-pointer hover:text-slate-700 transition-colors'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowUser({ userId: userId })
                                                    
                                                }} size={20} />
                                    )
                                )}



                            </div>
                        </div>
                    </div>

                    <div className='flex mt-4'>
                        <div className='bg-custom-light-gray-200 w-48 text-black text-base font-medium flex justify-between items-center px-3 py-2 rounded-xl'>
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
                                                
                                            }} size={20} />
                                        :
                                        <BsEyeFill
                                            className='cursor-pointer hover:text-slate-700 transition-colors'
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                followUnfollowCategory({ categoryId: categoryId })
                                                
                                            }} size={20} />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default DetailsOccasionCard