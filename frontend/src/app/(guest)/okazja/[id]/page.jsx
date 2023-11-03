'use client'

import React from 'react'
import { getOccasion } from '@/app/api/fetchOccasions'
import DetailsOccasionCard from '@/components/detailsOccasionCard';
import { Card, CardBody, Skeleton } from '@nextui-org/react';
import MiniOccasionCard from '@/components/miniOccasionCard';
import CommentInput from '@/components/commentInput';
import Comment from '@/components/comment';
import SkeletonDetailsOccasionCard from '@/components/skeletonDetailsOccasionCard';

const Page = ({ params }) => {
    const { data, isFetching } = getOccasion(params.id);
    
    return (
        <div className='flex flex-col-reverse lg:flex-row mt-8'>
            <div className='lg:w-1/4 '>
                <div className='bg-gray-400 hidden'>Rekalama</div>
            </div>

            <div className=' w-full lg:w-full grid lg:place-items-center gap-4'>
                {isFetching && <SkeletonDetailsOccasionCard />}
                {!isFetching &&
                    <DetailsOccasionCard
                        categoryName={data.category.name}
                        newPrice={data.newPrice}
                        oldPrice={data.oldPrice}
                        rating={data.rating}
                        title={data.title}
                        url={data.url}
                        userName={data.user.name}
                    />
                }

                {isFetching ? (
                    <Card className='lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2 bg-white'>
                        <CardBody className='flex gap-2'>

                            <h2 className='text-3xl font-bold'>O okazji</h2>

                            <Skeleton className="rounded-xl w-[50%]">
                                <p className='text-lg'>Opis</p>
                            </Skeleton>
                        </CardBody>
                    </Card>

                )
                    : (
                        <Card className='lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2 bg-white'>
                            <CardBody className='flex gap-2'>
                                <h2 className='text-3xl font-bold'>O okazji</h2>
                                <p className='text-lg'>{data.description}</p>
                            </CardBody>
                        </Card>
                    )
                }



                <Card className='lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2 bg-white'>
                    <CardBody className='flex gap-4'>
                        <h2 className='text-3xl font-bold'>Sprawdź też</h2>
                        <div className='grid place-items-center gap-8 sm:flex sm:justify-around'>
                            <MiniOccasionCard />
                            <MiniOccasionCard />
                            <MiniOccasionCard />
                        </div>
                    </CardBody>
                </Card>

                <Card className='lg:w-9/12 mb-3 mx-3 sm:mx-5 md:mx-8 lg:mx-2 bg-white'>
                    <CardBody className='flex gap-4'>
                        <h2 className='text-3xl font-bold'>Dyskusja</h2>
                        <CommentInput />

                        <Comment />
                        <Comment />
                        <Comment />
                    </CardBody>
                </Card>

            </div>

            <div className='lg:w-1/4 '>
                <div className='bg-gray-400 hidden'>Rekalama</div>
            </div>
        </div>
    )
}

export default Page