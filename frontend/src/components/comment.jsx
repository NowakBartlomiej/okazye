import { Avatar } from '@nextui-org/react'
import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import {HiChatBubbleLeftRight} from 'react-icons/hi2'

const Comment = ({content, createdAt, userName}) => {
  return (
    <div className='border-t-2 py-4 flex flex-col gap-4'>
        <div className='flex items-center gap-5'>
            <Avatar size='lg' className='border-4 border-custom-green-100' />
            <div>
                <h3 className='font-bold text-base'>{userName}</h3>
                <p className='text-sm text-custom-light-gray-500'>{createdAt}</p>
            </div>
        </div>

        <p className='font-normal text-base ml-2.5'>{content}</p>

        <div className='font-medium text-base ml-2.5 flex items-center gap-10'>
            <div className='flex gap-3 items-center'>
                <BsStarFill size={20}/>
                <p>Zareaguj</p>
            </div>

            <div className='flex gap-3 items-center'>
                <HiChatBubbleLeftRight size={20}/>
                <p>Odpowiedz</p>
            </div>
        </div>
    </div>
  )
}

export default Comment