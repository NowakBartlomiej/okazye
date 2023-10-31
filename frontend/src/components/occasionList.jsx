import React from 'react'
import OccassionCard from './occassionCard'
import { BsFillPlugFill, BsEyeFill } from 'react-icons/bs'
import { getOccasions } from '@api/fetchOccasions'
import { getCategories } from '@/app/api/fetchCategories'

const OccasionList = () => {
    const { data, isLoading } = getOccasions();
    const { data: categories, isLoading: categoriesLoading } = getCategories();

    return (
        <div>
            <div className='bg-white text-custom-gray-100 text-[20px] sm:text-[22px] lg:text-[24px] font-semibold flex justify-center py-4 mb-6'>
                <div className=' flex flex-wrap justify-center gap-6 px-5 md:gap-10 lg:gap-14 xl:gap-18'>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Nowe</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Najpopularniejsze</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Dla mnie</span>
                    <span className='hover:text-custom-green-100 transition-colors cursor-pointer'>Obserwowani</span>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/4 '>
                    <div className='bg-gray-400 hidden'>Rekalama</div>
                </div>
                <div className='bg-green-200 w-full grid lg:w-full'>
                    <div>
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
                                ))
                            )
                        }
                    </div>
                </div>
                <div className=' lg:w-1/4 mb-6 border-b-3 border-gray-200 pb-4 lg:pb-0 lg:border-0'>
                    <div className='lg:sticky lg:top-2 p-3 rounded-2xl bg-white mx-3 sm:mx-5 md:mx-8 lg:mx-2'>
                        <h2 className='text-custom-green-600 text-xl font-semibold mb-3'>Kategorie</h2>
                        <ul className=' grid grid-cols-2 gap-3 sm:grid-cols-3  lg:flex lg:flex-col'>
                            {categoriesLoading
                                ? (
                                    <h1>Loading...</h1>
                                )
                                : (
                                    categories?.data.map((category) => (
                                        <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                            <div className='flex items-center gap-2'>
                                                <BsFillPlugFill />
                                                <p>{category.name}</p>
                                            </div>
                                            <BsEyeFill />
                                        </li>
                                    ))
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OccasionList