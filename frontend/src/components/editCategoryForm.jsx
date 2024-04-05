'use client'

import { getCategory, updateCategory } from '@/app/api/fetchCategories'
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs';

const EditCategoryForm = ({ categoryName, categoryId }) => {
    const {data} = getCategory(categoryId);
    const { mutate: editCategory, error } = updateCategory();
    console.log(data)


    const [category, setCategory] = useState({
        "categoryId": categoryId,
        "name": data.name,
    })

    const onSubmit = (e) => {
        e.preventDefault()

        editCategory(category);
    }
    return (
        <form onSubmit={onSubmit} className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
            <h1 className="text-2xl font-semibold mb-4">Edytuj Kategorię</h1>
            
            <div className="mb-4">
                    <label htmlFor="name">Nazwa kategori <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Input
                        isInvalid={error?.response.data.errors.name ? true : false}
                        errorMessage={error?.response.data.errors.name ? error?.response.data.errors.name[0] : ""}
                        value={category.name || ""}
                        onChange={e => setCategory({ ...category, name: e.target.value })}
                        className="w-[50%]"
                        variant="bordered"
                        id="title"
                        placeholder="Edytuj kategorię" />
                </div>

                <Button type="submit" className={`text-white bg-custom-green-100 hover:bg-[#28b67dc7]`} startContent={<BsPencilSquare size={20} />}>Edytuj kategorię</Button>
        </form>
    )
}

export default EditCategoryForm