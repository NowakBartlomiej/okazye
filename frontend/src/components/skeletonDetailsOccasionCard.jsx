import React from 'react'
import { Card, CardHeader, CardBody, Image, Button, Avatar, Skeleton } from "@nextui-org/react";
import { BsPlusCircleFill, BsFillDashCircleFill, BsBoxArrowUpRight, BsFillHouseDoorFill, BsEyeFill } from 'react-icons/bs'
import Link from 'next/link'

const SkeletonDetailsOccasionCard = () => {
    return (
        <Card
            className="border-none bg-white lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Skeleton className="rounded-xl">
                            <div className="h-[200px] rounded-xl bg-default-300"></div>
                        </Skeleton>
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">


                            </div>
                            <Skeleton className="rounded-lg">
                                <div className='border-2 border-custom-green-100 rounded-md flex items-center gap-5 px-4 py-2'>
                                    <button className='text-red-600'><BsFillDashCircleFill size={30} /></button>
                                    <span className='text-black font-semibold text-xl'>123</span>
                                    <button className='text-green-700'><BsPlusCircleFill size={30} /></button>
                                </div>
                            </Skeleton>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                            <Skeleton className="rounded-lg w-fit h-[40px]">
                                <h2 className="text-[40px] font-bold">Tytuł</h2>
                            </Skeleton>

                            <div className='text-[22px] font-semibold flex items-center justify-between'>
                                <Skeleton className="rounded-lg w-fit">
                                    <div className='flex items-center gap-3'>
                                        <h3 className='text-custom-green-100 text-3xl font-semibold'>100 zł</h3>
                                        <h3 className='text-custom-light-gray-500 text-3xl font-semibold line-through'>123 zł</h3>
                                    </div>
                                </Skeleton>
                                <Skeleton className="rounded-lg w-fit">
                                    <div className='bg-custom-green-100 text-3xl font-semibold text-white rounded-2xl px-2.5 py-1.5'>
                                        <p>{Math.floor(((123 - 100) / 100) * 100)}%</p>
                                    </div>
                                </Skeleton>
                            </div>

                            <Skeleton className="rounded-lg w-fit h-[20px]">
                                <small className='text-custom-light-gray-500 text-lg'>Najniższa cena z 30 dni {100} zł</small>
                            </Skeleton>
                            <Skeleton className="rounded-xl">
                                <div className='flex justify-center'>
                                    <Button startContent={<BsBoxArrowUpRight size={26} />} className='w-[70%] bg-custom-green-400 text-white text-2xl font-semibold py-7'>
                                        <Link target='_blank' href={'/'}>Pzekieruj do okazji</Link>
                                    </Button>
                                </div>
                            </Skeleton>

                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div className='flex gap-4'>
                        <Skeleton className="flex rounded-full w-14 h-14" />
                        <div className='flex flex-col gap-3'>
                            <Skeleton className="rounded-xl h-[20px]">
                                <p className='text-xl font-normal'>Okazję dodał:</p>
                            </Skeleton>

                            <Skeleton className="rounded-xl h-[20px]">
                                <div className='flex items-center gap-3'>
                                    <p className='text-xl font-bold'>Nazwa użytkownika</p>
                                    <BsEyeFill size={20} />
                                </div>
                            </Skeleton>
                        </div>
                    </div>

                    <Skeleton className="rounded-xl">
                        <div className='flex mt-4'>
                            <div className='bg-custom-light-gray-200 w-48 text-black text-base font-medium flex justify-between items-center px-3 py-2 rounded-xl'>
                                <div className='flex gap-1 items-center'>
                                    <BsFillHouseDoorFill size={20} />
                                    <p>Kategoria</p>
                                </div>
                                <BsEyeFill size={20} />
                            </div>
                        </div>
                    </Skeleton>
                </div>
            </CardBody>
        </Card>
    )
}

export default SkeletonDetailsOccasionCard