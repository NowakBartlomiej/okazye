'use client'

import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react"
import { useState } from "react"
import { BsPlusLg } from 'react-icons/bs'
import { getCategories } from "@/app/api/fetchCategories"
import { createOccasion } from "@/app/api/fetchOccasions"

const OccasionForm = () => {
    const { data } = getCategories();
    const { mutate: addOccasion, isError, error } = createOccasion();

    const [occasion, setOccasion] = useState({
        "title": "",
        "description": "",
        "image": "",
        "newPrice": "",
        "oldPrice": "",
        "url": "",
        "categoryId": "",
    })

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();

        Object.entries(occasion).forEach(([key, value]) => {
            if ((value != "") && (value != undefined)) {
                formData.append(key, value);
            }
        })

        addOccasion(formData);
    }

    return (
        <>
            <form onSubmit={onSubmit} className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
                <h1 className="text-2xl font-semibold mb-4">Podaj informacje o swojej znalezionej okazjii</h1>

                <div className="mb-4">
                    <label htmlFor="title">Tytuł okazji <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Input
                        isInvalid={error?.response.data.errors.title ? true : false}
                        errorMessage={error?.response.data.errors.title ? error?.response.data.errors.title[0] : ""}
                        value={occasion.title || ""}
                        onChange={e => setOccasion({ ...occasion, title: e.target.value })}
                        className="w-[50%]"
                        variant="bordered"
                        id="title"
                        placeholder="Podaj krótki tytuł okazji" />
                </div>

                <div className="grid mb-4">
                    <label htmlFor="photo">Zdjęcie okazji</label>
                    <Input
                        isInvalid={error?.response.data.errors.image ? true : false}
                        errorMessage={error?.response.data.errors.image ? error?.response.data.errors.image[0] : ""}
                        id="photo"
                        variant={"underlined"}
                        type="file"
                        onChange={(e) => setOccasion({ ...occasion, image: e.target.files[0] })} />
                </div>

                <div className="flex mb-4 justify-between">
                    <div>
                        <label htmlFor="new-price">Nowa Cena</label>
                        <Input
                            isInvalid={error?.response.data.errors.newPrice ? true : false}
                            errorMessage={error?.response.data.errors.newPrice ? error?.response.data.errors.newPrice[0] : ""}
                            value={occasion.newPrice || ""}
                            onChange={e => setOccasion({ ...occasion, newPrice: e.target.value })}
                            className="w-[100%] max-w-[80%]"
                            variant="bordered"
                            id="new-price"
                            placeholder="Podaj aktualną cenę" />
                    </div>
                    <div>
                        <label htmlFor="old-price">Stara Cena</label>
                        <Input
                            isInvalid={error?.response.data.errors.oldPrice ? true : false}
                            errorMessage={error?.response.data.errors.oldPrice ? error?.response.data.errors.oldPrice[0] : ""}
                            value={occasion.oldPrice || ""}
                            onChange={e => setOccasion({ ...occasion, oldPrice: e.target.value })}
                            className="w-[100%] max-w-[80%]"
                            variant="bordered"
                            id="old-price"
                            placeholder="Podaj starą cenę" />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="url">Link do okazji</label>
                    <Input
                        isInvalid={error?.response.data.errors.url ? true : false}
                        errorMessage={error?.response.data.errors.url ? error?.response.data.errors.url[0] : ""}
                        value={occasion.url || ""}
                        onChange={e => setOccasion({ ...occasion, url: e.target.value })}
                        className="w-[50%]"
                        variant="bordered"
                        id="url"
                        placeholder="Podaj adres URL do okazji" />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="category">Kategoria <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Select
                        isInvalid={error?.response.data.errors.categoryId ? true : false}
                        errorMessage={error?.response.data.errors.categoryId ? error?.response.data.errors.categoryId[0] : ""}
                        onChange={e => setOccasion({ ...occasion, categoryId: e.target.value })}
                        className="w-[50%]"
                        variant="bordered"
                        id="category"
                        label="Wybierz kategorię">
                        {data?.data.map((category) => (
                            <SelectItem id={category.name} key={category.id} value={category.id}>{category.name}</SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="mb-4">
                    <label htmlFor="description">Opis <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
                    <Textarea
                        isInvalid={error?.response.data.errors.description ? true : false}
                        errorMessage={error?.response.data.errors.description ? error?.response.data.errors.description[0] : ""}
                        value={occasion.description || ""}
                        onChange={e => setOccasion({ ...occasion, description: e.target.value })}
                        id="description"
                        placeholder="Opisz swoją okazję"
                        variant="bordered"
                    />
                </div>

                <Button type="submit" className={`text-white bg-custom-green-100 hover:bg-[#28b67dc7]`} startContent={<BsPlusLg size={20} />}>Dodaj swoją okazję</Button>

            </form>
        </>
    )
}

export default OccasionForm