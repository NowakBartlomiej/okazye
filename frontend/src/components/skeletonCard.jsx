import React from 'react'
import { Skeleton } from '@nextui-org/react'
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { BsPlusCircleFill, BsFillDashCircleFill, BsBoxArrowUpRight, BsFillHouseDoorFill, BsEyeFill } from 'react-icons/bs'

const SkeletonCard = ({ cards }) => {
    return (
        Array(cards).fill(0).map((_, index) =>
            <Card
                className="border-none bg-white lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2"
                shadow="sm"
                key={index}
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
                                        <span className='text-black font-semibold text-xl'>1</span>
                                        <button className='text-green-700'><BsPlusCircleFill size={30} /></button>
                                    </div>
                                </Skeleton>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">

                                <Skeleton className="rounded-lg w-fit">
                                    <h2 className="text-[32px] font-bold">Tytuł</h2>
                                </Skeleton>

                                <div className='text-[22px] font-semibold flex items-center justify-between'>

                                    <Skeleton className="rounded-lg w-fit">
                                        <div className='flex items-center gap-3'>
                                            <h3 className='text-custom-green-100'>123 zł</h3>
                                            <h3 className='text-custom-light-gray-500 line-through'>444 zł</h3>
                                        </div>
                                    </Skeleton>

                                    <Skeleton className="rounded-lg w-fit">
                                        <div className='bg-custom-green-100 text-white rounded-2xl px-1.5 py-1'>
                                            <p>{Math.floor(((123 - 444) / 1) * 100)}%</p>
                                        </div>
                                    </Skeleton>
                                </div>

                                <Skeleton className="rounded-lg w-fit">
                                    <small className='text-custom-light-gray-500 text-base'>Najniższa cena z 30 dni {123} zł</small>
                                </Skeleton>
                            </div>
                        </div>
                    </div>


                    <div className=' mt-3'>
                        <Skeleton className="rounded-lg h-[50px]">
                            <p className='text-lg'>fasffsa</p>
                        </Skeleton>
                    </div>


                    <div className='flex justify-between mt-3'>

                        <div className='flex flex-col justify-end'>
                            <Skeleton className="rounded-xl">
                                <h2 className='bg-custom-green-100 px-2 py-1 text-white rounded-xl text-base'>Od: afa</h2>
                            </Skeleton>
                        </div>


                        <div className='flex flex-col gap-2'>
                            <Skeleton className="rounded-xl">
                                <Button startContent={<BsBoxArrowUpRight size={20} />} className='bg-custom-green-400 text-white text-[16px] font-medium'>
                                    Pzekieruj do okazji
                                </Button>
                            </Skeleton>
                            <Skeleton className="rounded-xl">
                                <div className='bg-custom-light-gray-200 text-black text-base font-medium flex justify-between items-center px-3 py-2 rounded-xl'>
                                    <div className='flex gap-1 items-center'>
                                        <BsFillHouseDoorFill size={20} />
                                        <p>rara</p>
                                    </div>
                                    <BsEyeFill size={20} />
                                </div>
                            </Skeleton>
                        </div>
                    </div>
                </CardBody>
            </Card>
        )

    )
}

export default SkeletonCard