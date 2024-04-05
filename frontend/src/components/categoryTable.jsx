'use client'

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Button, useDisclosure } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { BsFillPlusCircleFill, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { getCategories } from '@/app/api/fetchCategories';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DeleteCategoryModal from './deleteCategoryModal';
import EditCategoryModal from './editCategoryModal';


const CategoryTable = () => {
  const columns = [
    { name: "Id", uid: "id" },
    { name: "Nazwa", uid: "name" },
    { name: "Data utworzenia", uid: "createdAt" },
    { name: "Akcje", uid: "actions" },
  ]

  const [actualId, setActualId] = useState(null);
  const [edit, setEdit] = useState({
    categoryId: null,
    name: null,
  })

  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: editIsOpen, onOpen: editOnOpen, onOpenChange: editOnOpenChange } = useDisclosure();

  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <>
          <div className='flex gap-2'>
          <Button 
            onPress={() => {
              setEdit({
                categoryId: data.id,
                name: data.name,
              })
              editOnOpen()
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            className=' bg-blue-400 text-white hover:bg-blue-300'
            startContent={<BsPencilSquare size={18} />}
          >Edytuj</Button>
          <Button 
            onPress={() => {
              setActualId(data.id)
              onOpen()
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            className=' bg-red-500 text-white hover:bg-red-400'
            startContent={<BsFillTrashFill size={18} />}
          >Usuń</Button>
          </div>
          </>
        )
      default:
        return cellValue;
    }
  }

  const { data, isLoading } = getCategories();
  const categories = data?.data;

  return (
    <>
    <DeleteCategoryModal categoryId={actualId} isOpen={isOpen} onOpenChange={onOpenChange}/>
    <EditCategoryModal categoryId={edit.categoryId} name={edit.name} isOpen={editIsOpen} onOpenChange={editOnOpenChange}/> 
    
      <h2 className='ml-6 mb-4 text-3xl font-medium'>Kategorie</h2>
      {!isLoading
        ? (
          <div>
            <Button startContent={<BsFillPlusCircleFill size={20} />} className='ml-6 mb-3 bg-custom-green-100 text-white hover:bg-custom-green-200 transition-colors'>
              <Link href="kategorie/dodaj">Dodaj Kategorię</Link>
            </Button>

            <Table className='w-[90%] ml-6' aria-label="Kategorie">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid}>
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody 
                isLoading={isLoading} 
                loadingContent={<h1>Loading...</h1>}
                items={categories}
              >
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>

          </div>
        )
        : (
          <div className='flex justify-center mt-4'>
            <Spinner color='success' size='lg' label='Ładowanie Tabeli...' />
          </div>
        )
      }
    </>
  )
}

export default CategoryTable