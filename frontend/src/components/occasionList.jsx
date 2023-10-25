import React from 'react'
import OccassionCard from './occassionCard'
import { BsFillPlugFill, BsEyeFill } from 'react-icons/bs'
import {getOccasions} from '@api/fetchOccasions'

const OccasionList = () => {
    const {data, isLoading} = getOccasions();
    
    return (
        <div>
            <div className='bg-white text-custom-gray-100 text-[20px] sm:text-[22px] lg:text-[24px] font-semibold flex justify-center py-4 mb-8'>
                <div className=' flex flex-wrap justify-center gap-6 px-5 md:gap-10 lg:gap-14 xl:gap-18'>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Nowe</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Najpopularniejsze</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Dla mnie</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Obserwowani</span>
                </div>
            </div>


            <div className='grid md:grid-cols-12 gap-6 mx-5 md:mx-4'>
                <div className=' md:col-span-4 lg:col-span-3'>
                    <div className='bg-white p-3 rounded-2xl'>
                        <h2 className='text-custom-green-600 text-2xl font-semibold mb-3'>Kategorie</h2>

                        <ul className=' flex flex-col gap-3'>
                            <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsFillPlugFill />
                                    <p>Elektornika</p>
                                </div>
                                <BsEyeFill />
                            </li>
                            <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsFillPlugFill />
                                    <p>Elektornika</p>
                                </div>
                                <BsEyeFill />
                            </li>
                            <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsFillPlugFill />
                                    <p>Elektornika</p>
                                </div>
                                <BsEyeFill />
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=' md:col-span-8 lg:col-span-9 xl:col-span-6'>
                    {isLoading
                        ? (
                            <h1>Loading...</h1>
                        )
                        : (
                            data?.data.map((occasion) => (
                                <OccassionCard 
                                    key={occasion.id}
                                    categoryName={occasion.category.name}
                                    description={occasion.description}
                                    newPrice={occasion.newPrice}
                                    oldPrice={occasion.oldPrice}
                                    rating={occasion.rating}
                                    title={occasion.title}
                                    url={occasion.url}
                                    userName={occasion.user.name}
                                />
                                // console.log(occasion.category.name)
                            ))
                        )
                    }
                </div>


            </div>
        </div>
    )
}

export default OccasionList