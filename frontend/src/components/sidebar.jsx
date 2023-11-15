'use client'

import React, { useState } from 'react'
import { BsBoxArrowLeft, BsBookmarkStarFill, BsWindowStack, BsArrowLeftCircleFill} from "react-icons/bs";
import { Avatar, Tooltip } from '@nextui-org/react'

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  return (
    <aside className='flex'>
        <div className={`${open ? "w-80" : "w-20 "} bg-white flex flex-col justify-between sticky top-[4rem] h-[calc(100vh-4rem)] shadow-md px-4 duration-300`}>
          
          <BsArrowLeftCircleFill 
            onClick={() => setOpen(!open)}
            className={`cursor-pointer absolute text-custom-green-100 -right-5 top-[3.4rem] duration-300 ${!open && "rotate-180"}`} 
            size={40}
          />
          

          <div>
            <div className='flex flex-col gap-5 justify-center items-center mt-4 border-b-[3px] pb-2'>
              <Avatar className={`border-4 border-custom-green-100 w-[100px] h-[100px] duration-300 ${!open && "w-[50px] h-[50px]"}`}/>
              <h2 className={`font-semibold text-[22px] text-center leading-6 duration-300 ${!open && "scale-0 hidden"}`}>Nazwa użytkownika</h2>
            </div>

            <div className='flex flex-col gap-4 py-4 font-medium'>
              <Tooltip content="Moje okazje" size='lg' isDisabled={open} placement='right' closeDelay={0}>
                <div className='cursor-pointer flex items-center gap-4 text-custom-gray-100 text-xl px-2.5 py-2 hover:bg-custom-green-100 hover:text-white rounded-lg transition-colors'>
                  <BsWindowStack size={24}/>
                  <p className={`${!open && "scale-0 hidden"}`}>Moje Okazje</p>
                </div>
              </Tooltip>

              <Tooltip content="Moje Odznaki" size='lg' isDisabled={open} placement='right' closeDelay={0}>
              <div className='cursor-pointer flex items-center gap-4 text-white text-xl bg-custom-green-100 px-2.5 py-2 rounded-lg'>
                <BsBookmarkStarFill size={24}/>
                <p className={`${!open && "scale-0 hidden"}`}>Moje Odznaki</p>
              </div>
              </Tooltip>
            </div>
          </div>

          <div className='border-t-[3px] mb-4 pt-4'>
          <Tooltip content="Wyloguj się" size='lg' isDisabled={open} placement='right' closeDelay={0}>
            <div className='cursor-pointer flex items-center gap-4 text-custom-gray-100 text-xl px-2.5 rounded-lg hover:text-custom-green-100 transition-colors'>
              <BsBoxArrowLeft size={24} />
              <p className={`${!open && "scale-0 hidden"}`}>Wyloguj się</p>
            </div>
            </Tooltip>
          </div>

        </div>

        <main className='w-full pl-4 pt-4'>
          {children}
        </main>
      </aside>
  )
}

export default Sidebar