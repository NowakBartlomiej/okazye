'use client'

import { Button, Input } from '@nextui-org/react';
import { BsPlusLg } from 'react-icons/bs';
import React, { useState } from 'react';
import Link from 'next/link';
import { createCategory } from '@/app/api/fetchCategories';
import { useRouter } from 'next/navigation';

const CategoryForm = () => {
    const {mutate: addCategory, error} = createCategory();
    const router = useRouter();
    
    const [category, setCategory] = useState({
        "name": "",
    });

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(category)

        addCategory(category);
    }

    return (
        <>
            <form onSubmit={onSubmit} className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
                <h1 className="text-2xl font-semibold mb-4">Dodaj Kategorię</h1>

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
                        placeholder="Podaj nazwę kategori" />
                </div>

                <Button type="submit" className={`text-white bg-custom-green-100 hover:bg-[#28b67dc7]`} startContent={<BsPlusLg size={20} />}>Dodaj kategorię</Button>
            </form>
        </>
    )
}

export default CategoryForm