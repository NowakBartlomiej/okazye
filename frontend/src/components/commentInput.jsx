import { Avatar, Button, Input } from '@nextui-org/react'
import React from 'react'

import {IoMdSend} from 'react-icons/io'

const CommentInput = () => {
  return (
    <div className='flex items-center justify-between gap-5'>
        <Avatar size='lg' className='border-4 border-custom-green-100' />
        <Input type='text' variant='bordered' label="Napisz komentarz" className='text-black text-xl xl:w-[70%] lg:w-[55%] sm:w-[60%] md:w-[70%] w-[60%]'/>
        <Button className='text-white bg-custom-green-100 text-lg' startContent={<IoMdSend />}>Opublikuj</Button>
    </div>
  )
}

export default CommentInput