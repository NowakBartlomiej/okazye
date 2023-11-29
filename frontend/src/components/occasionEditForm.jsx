'use client'

import React, { useState } from 'react'

import { Input, Select, SelectItem, Textarea, Button, Image } from "@nextui-org/react"
import { getCategories } from '@/app/api/fetchCategories';
import { getOccasion, updateOccasion } from '@/app/api/fetchOccasions';
import { BsPlusLg } from 'react-icons/bs'

const OccasionEditForm = ({ occasionId }) => {

  const { data } = getOccasion(occasionId)
  const { data: categories } = getCategories();
  const { mutate: editOcasion, error } = updateOccasion();

  const [occasion, setOccasion] = useState({
    'id': data.id,
    "title": data.title,
    "description": data.description,
    "image": "",
    "newPrice": data.newPrice ? data.newPrice.replace('.', ',') : "",
    "oldPrice": data.oldPrice ? data.oldPrice.replace('.', ',') : "",
    "url": data.url ? data.url : "",
    "categoryId": data.category.id,
  })

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();

    Object.entries(occasion).forEach(([key, value]) => {
      if ((value != "") && (value != undefined)) {
        formData.append(key, value);
      }
    })
    // if ((occasion.image == "") || (occasion.image == undefined) || (occasion.image == null)) {
    //   formData.append("image", data.image);
    // }

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

    editOcasion(occasion);
  }

  return (
    <>
      <form onSubmit={onSubmit} className='bg-white rounded-2xl px-6 py-5 text-custom-green-600 text-lg font-medium md:w-[700px]'>
        <h1 className="text-2xl font-semibold mb-4">Podaj informacje o swojej znalezionej okazjii</h1>

        <div className="mb-4">
          <label htmlFor="title">Tytuł okazji <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
          <Input
            isInvalid={error?.response.data.errors?.title ? true : false}
            errorMessage={error?.response.data.errors?.title ? error?.response.data.errors.title[0] : ""}
            value={occasion.title || ""}
            onChange={e => setOccasion({ ...occasion, title: e.target.value })}
            className="w-[50%]"
            variant="bordered"
            id="title"
            placeholder="Podaj krótki tytuł okazji" />
        </div>

        <div className="grid mb-4">
          <Image 
            alt={occasion.title} 
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data.image}`}
            width={'70%'}
            />
          <label htmlFor="photo">Zdjęcie okazji</label>
          <Input
            isInvalid={error?.response.data.errors?.image ? true : false}
            errorMessage={error?.response.data.errors?.image ? error?.response.data.errors.image[0] : ""}
            id="photo"
            variant={"underlined"}
            type="file"
            onChange={(e) => setOccasion({ ...occasion, image: e.target.files[0] })} />
        </div>

        <div className="flex mb-4 justify-between">
          <div>
            <label htmlFor="new-price">Nowa Cena</label>
            <Input
              isInvalid={error?.response.data.errors?.newPrice ? true : false}
              errorMessage={error?.response.data.errors?.newPrice ? error?.response.data.errors.newPrice[0] : ""}
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
              isInvalid={error?.response.data.errors?.oldPrice ? true : false}
              errorMessage={error?.response.data.errors?.oldPrice ? error?.response.data.errors.oldPrice[0] : ""}
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
            isInvalid={error?.response.data.errors?.url ? true : false}
            errorMessage={error?.response.data.errors?.url ? error?.response.data.errors.url[0] : ""}
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
            isInvalid={error?.response.data.errors?.categoryId ? true : false}
            errorMessage={error?.response.data.errors?.categoryId ? error?.response.data.errors.categoryId[0] : ""}
            selectedKeys={[`${occasion.categoryId}`]}
            onChange={e => setOccasion({ ...occasion, categoryId: e.target.value })}
            className="w-[50%]"
            variant="bordered"
            id="category"
            label="Wybierz kategorię">
            {categories?.data.map((category) => (
              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <label htmlFor="description">Opis <span className="text-custom-light-gray-500 font-light">(wymagane)</span></label>
          <Textarea
            isInvalid={error?.response.data.errors?.description ? true : false}
            errorMessage={error?.response.data.errors?.description ? error?.response.data.errors.description[0] : ""}
            value={occasion.description || ""}
            onChange={e => setOccasion({ ...occasion, description: e.target.value })}
            id="description"
            placeholder="Opisz swoją okazję"
            variant="bordered"
          />
        </div>

        <Button type="submit" className={`text-white bg-custom-green-100 hover:bg-[#28b67dc7]`} startContent={<BsPlusLg size={20} />}>Edytuj okazję</Button>

      </form>
    </>
  )
}

export default OccasionEditForm