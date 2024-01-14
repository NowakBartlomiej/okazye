'use client'

import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Button} from "@nextui-org/react";
import {useAsyncList} from "@react-stately/data";
import {BsFillPlusCircleFill} from "react-icons/bs";
import { getCategories } from '@/app/api/fetchCategories';
import Link from 'next/link';

const CategoryTable = () => {
    const {data, isLoading} = getCategories();
    const categories = data?.data;
    
    return (
      <>
      <h2 className='ml-6 mb-4 text-3xl font-medium'>Kategorie</h2>
      {!isLoading 
      ? (
        <div>
          <Button startContent={<BsFillPlusCircleFill size={20}/>} className='ml-6 mb-3 bg-custom-green-100 text-white hover:bg-custom-green-200 transition-colors'>
            <Link href="kategorie/dodaj">Dodaj Kategorię</Link>
          </Button>
          <Table className='w-[90%] ml-6' aria-label="Kategorie">
          <TableHeader>
            <TableColumn key={"id"}>Id</TableColumn>
            <TableColumn key={"name"}>Nazwa</TableColumn>
            <TableColumn key={"createdAt"}>Data utworzenia</TableColumn>
          </TableHeader>
          <TableBody isLoading={isLoading} loadingContent={<h1>Loading...</h1>} items={categories}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
        </div>
        )
      : (
        <div className='flex justify-center mt-4'>
          <Spinner color='success' size='lg' label='Ładowanie Tabeli...'/>
        </div>
      )
      }
      </>
  )
}

export default CategoryTable