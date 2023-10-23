'use client'

import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react"
import {BsPlusLg} from 'react-icons/bs'

const Page = () => {
  return (
    <main className='flex items-center justify-center mt-6'>
        <form className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
            <h1 className="text-2xl font-semibold mb-4">Podaj informacje o swojej znalezionej okazjii</h1>

            <div className="mb-4">
                <label htmlFor="title">Tytuł okazji <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                <Input className="w-[50%]" variant="bordered" id="title" placeholder="Podaj krótki tytuł okazji"/>
            </div>
        
            <div className="grid mb-4">
                <label htmlFor="photo">Zdjęcie okazji</label>
                <input id="photo" type="file"/>
            </div>

            <div className="flex mb-4 justify-between">
                <div>
                    <label htmlFor="new-price">Nowa Cena</label>
                    <Input className="w-[100%]" variant="bordered" id="new-price" placeholder="Podaj aktualną cenę"/>
                </div>
                <div>
                    <label htmlFor="old-price">Stara Cena</label>
                    <Input className="w-[100%]" variant="bordered" id="old-price" placeholder="Podaj starą cenę"/>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="url">Link do okazji</label>
                <Input className="w-[50%]" variant="bordered" id="url" placeholder="Podaj adres URL do okazji"/>
            </div>

            <div className="mb-4 flex flex-col">
                <label htmlFor="category">Kategoria <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                <Select className="w-[50%]" variant="bordered" id="category" label="Wybierz kategorię">
                    <SelectItem value={"elektronika"}>Elektronika</SelectItem>
                    <SelectItem value={"monitory"}>Monitory</SelectItem>
                </Select>
            </div>

            <div className="mb-4">
                <label htmlFor="description">Opis <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                <Textarea 
                    id="description"
                    placeholder="Opisz swoją okazję"
                    variant="bordered"
                />
            </div>
            
            <Button type="submit" className="text-white bg-custom-green-100" startContent={<BsPlusLg size={20}/>}>Dodaj swoją okazję</Button>
            
        </form>
    </main>
  )
}

export default Page