import { createComment } from '@/app/api/fetchComments'
import { Avatar, Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

import { IoMdSend } from 'react-icons/io'

const CommentInput = ({ occasionId }) => {
  const [comment, setComment] = useState({
    "content": "",
    "occasionId": occasionId
  })

  const onSubmit = (e) => {
    e.preventDefault();
    createComment(comment);
    setComment({...comment, content: ""});
  }

  return (
    <div className='flex items-center justify-between gap-5'>
      <Avatar size='lg' className='border-4 border-custom-green-100' />
        <Input value={comment.content} onChange={e => setComment({...comment, content: e.target.value})} type='text' variant='bordered' label="Napisz komentarz" className='text-black text-xl xl:w-[70%] lg:w-[55%] sm:w-[60%] md:w-[70%] w-[60%]' />
        <Button onClick={e => onSubmit(e)} type='submit' className='text-white bg-custom-green-100 text-lg' startContent={<IoMdSend />}>Opublikuj</Button>
      
    </div>
  )
}

export default CommentInput