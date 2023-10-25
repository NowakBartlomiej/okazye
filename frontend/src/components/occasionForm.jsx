'use client'

import { createOccasions } from "@/app/api/fetchOccasions"
import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react"
import { useState } from "react"
import { BsPlusLg } from 'react-icons/bs'
import { useRouter } from "next/navigation"
import { getCategories } from "@/app/api/fetchCategories"

const OccasionForm = () => {
    const router = useRouter()
    const {data} = getCategories();
    
    const [occasion, setOccasion] = useState({
        "title": "",
        "description": "",
        "newPrice": "",
        "oldPrice": "",
        "url": "",
        "categoryId": "",
    })

    const onSubmit = (e) => {
        e.preventDefault()
        createOccasions(occasion);
        router.push('/');
    }

    return (
        <>
            <form onSubmit={onSubmit} className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
                <h1 className="text-2xl font-semibold mb-4">Podaj informacje o swojej znalezionej okazjii</h1>

                <div className="mb-4">
                    <label htmlFor="title">Tytuł okazji <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Input value={occasion.title} onChange={e => setOccasion({...occasion, title: e.target.value})} className="w-[50%]" variant="bordered" id="title" placeholder="Podaj krótki tytuł okazji" />
                </div>

                <div className="grid mb-4">
                    <label htmlFor="photo">Zdjęcie okazji</label>
                    <input id="photo" type="file" />
                </div>

                <div className="flex mb-4 justify-between">
                    <div>
                        <label htmlFor="new-price">Nowa Cena</label>
                        <Input value={occasion.newPrice} onChange={e => setOccasion({...occasion, newPrice: e.target.value})} className="w-[100%]" variant="bordered" id="new-price" placeholder="Podaj aktualną cenę" />
                    </div>
                    <div>
                        <label htmlFor="old-price">Stara Cena</label>
                        <Input value={occasion.oldPrice} onChange={e => setOccasion({...occasion, oldPrice: e.target.value})} className="w-[100%]" variant="bordered" id="old-price" placeholder="Podaj starą cenę" />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="url">Link do okazji</label>
                    <Input value={occasion.url} onChange={e => setOccasion({...occasion, url: e.target.value})} className="w-[50%]" variant="bordered" id="url" placeholder="Podaj adres URL do okazji" />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="category">Kategoria <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Select onChange={e => setOccasion({...occasion, categoryId: e.target.value})} className="w-[50%]" variant="bordered" id="category" label="Wybierz kategorię">
                        {data?.data.map((category) => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="mb-4">
                    <label htmlFor="description">Opis <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Textarea
                        value={occasion.description}
                        onChange={e => setOccasion({...occasion, description: e.target.value})}
                        id="description"
                        placeholder="Opisz swoją okazję"
                        variant="bordered"
                    />
                </div>

                <Button type="submit" className="text-white bg-custom-green-100" startContent={<BsPlusLg size={20} />}>Dodaj swoją okazję</Button>

            </form>
        </>
    )
}

export default OccasionForm