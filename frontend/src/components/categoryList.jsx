import { getCategories } from '@/app/api/fetchCategories';
import { BsFillPlugFill, BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAuth } from '@/hooks/useAuth';
import { followUnfollowCategory, getCategoryFollowers } from '@/app/api/followCategory';

const CategoryList = ({actualCategoryId}) => {
    const router = useRouter();
    const {user} = useAuth();
    const { data: categories, isLoading: categoriesLoading } = getCategories();
    const {data: categoryFollowers, isLoading: categoryIsLoading, refetch: categoryRefetch} = getCategoryFollowers();

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
                                {user && (
                                    !categoryIsLoading && (
                                        categoryFollowers.find(categoryFollower => categoryFollower.userId == user.id && categoryFollower.categoryId == category.id)
                                            ?
                                            <BsFillEyeSlashFill
                                                className='cursor-pointer hover:text-slate-300 transition-colors'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowCategory({ categoryId: category.id })
                                                    categoryRefetch()
                                                }} size={20} />
                                            :
                                            <BsEyeFill
                                                className='cursor-pointer hover:text-slate-300 transition-colors'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    followUnfollowCategory({ categoryId: category.id })
                                                    categoryRefetch()
                                                }} size={20} />
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

export default CategoryList