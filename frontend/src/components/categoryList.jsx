import { getCategories } from '@/app/api/fetchCategories';
import { BsFillPlugFill, BsEyeFill } from 'react-icons/bs'
import { Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CategoryList = ({actualCategoryId}) => {
    const router = useRouter();
    const { data: categories, isLoading: categoriesLoading } = getCategories();

    return (
        <aside className='lg:sticky lg:top-2 p-3 rounded-2xl bg-white mx-3 sm:mx-5 md:mx-8 lg:mx-2'>

            <h2 className='text-custom-green-600 text-xl font-semibold mb-3'>Kategorie</h2>
            <ul className=' grid grid-cols-2 gap-3 sm:grid-cols-3  lg:flex lg:flex-col'>
                {categoriesLoading
                    ? (

                        <Skeleton className='rounded-lg'>
                            <li className='bg-custom-light-gray-200 text-custom-green-600 rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2'>
                                <div className='flex items-center gap-2'>
                                    <BsFillPlugFill />
                                    <p>Kategoria</p>
                                </div>
                                <BsEyeFill />
                            </li>
                        </Skeleton>

                    )
                    : (
                        categories?.data.map((category) => (
                            <li onClick={() => router.push(`/kategoria/${category.id}`)} key={category.id} className={`${actualCategoryId == category.id ? 'bg-custom-green-100 text-white' : 'bg-custom-light-gray-200 text-custom-green-600'} hover:bg-custom-green-100 hover:text-white transition-colors rounded-lg px-4 py-3 text-lg font-medium flex items-center justify-between gap-2 cursor-pointer`}>
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
        </aside>
    )
}

export default CategoryList