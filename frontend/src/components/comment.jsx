import { getCommentReactions, rateComment } from '@/app/api/fetchComments'
import { useAuth } from '@/hooks/useAuth'
import { Avatar, Button, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { BsStarFill, BsEmojiLaughingFill, BsFillHandThumbsUpFill, BsHeartFill, BsPencilSquare, BsFillTrashFill } from 'react-icons/bs'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { hasModeratorRole } from '@/app/api/fetchRoles';
import DeleteCommentModal from './deleteCommentModal'
import EditCommentModal from './editCommentModal'

const Comment = ({ content, createdAt, userName, commentId, userId }) => {
    const { user } = useAuth();

    const { data: ratings, refetch } = getCommentReactions(commentId);
    const { mutate: rate } = rateComment()
    const { data: isModerator, isLoading: mIsLoading } = hasModeratorRole();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: editIsOpen, onOpen: editOnOpen, onOpenChange: editOnOpenChange } = useDisclosure();

    return (
        <>
        <DeleteCommentModal commentId={commentId} isOpen={isOpen} onOpenChange={onOpenChange}/>
        <EditCommentModal commentId={commentId} isOpen={editIsOpen} onOpenChange={editOnOpenChange} content={content}/>
        <div className='border-t-2 py-4 flex flex-col gap-4'>
            {(user?.id == userId || isModerator) && (
                <div className='flex  w-fit gap-3'>
                    <Button
                        onPress={editOnOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className='text-lg bg-blue-400 text-white hover:bg-blue-300'
                        startContent={<BsPencilSquare size={18} />}
                    >
                        Edytuj
                    </Button>

                    <Button
                        onPress={onOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className='text-lg bg-red-500 text-white hover:bg-red-400'
                        startContent={<BsFillTrashFill size={18} />}
                    >
                        Usuń
                    </Button>
                </div>
            )}

            <div className='flex items-center gap-5'>
                <Avatar size='lg' className='border-4 border-custom-green-100' />
                <div>
                    <h3 className='font-bold text-base'>{userName}</h3>
                    <p className='text-sm text-custom-light-gray-500'>{createdAt}</p>
                </div>
            </div>

            <p className='font-normal text-base ml-2.5'>{content}</p>

            <div className='font-medium text-base ml-2.5 flex items-center gap-10'>
                <div className='flex gap-4 items-center text-custom-green-700'>

                    {user
                        ? (
                            <>
                                <div onClick={(e) => {
                                    e.preventDefault();
                                    rate({
                                        commentId: commentId,
                                        type: 1
                                    })
                                    refetch()
                                }} className={`hover:scale-125 hover:text-custom-green-100 transition-all flex gap-2 items-center cursor-pointer ${ratings?.userReaction == 1 && 'text-custom-green-100'}`}>
                                    <BsFillHandThumbsUpFill size={20} />
                                    <p>{ratings?.reaction1}</p>
                                </div>

                                <div onClick={(e) => {
                                    e.preventDefault();
                                    rate({
                                        commentId: commentId,
                                        type: 2
                                    })
                                    refetch()
                                }} className={`hover:scale-125 hover:text-custom-green-100 transition-all flex gap-2 items-center cursor-pointer ${ratings?.userReaction == 2 && 'text-custom-green-100'}`}>
                                    <BsHeartFill size={20} />
                                    <p>{ratings?.reaction2}</p>
                                </div>

                                <div onClick={(e) => {
                                    e.preventDefault();
                                    rate({
                                        commentId: commentId,
                                        type: 3
                                    })
                                    refetch()
                                }} className={`hover:scale-125 hover:text-custom-green-100 transition-all flex gap-2 items-center cursor-pointer ${ratings?.userReaction == 3 && 'text-custom-green-100'}`}>
                                    <BsEmojiLaughingFill size={20} />
                                    <p>{ratings?.reaction3}</p>
                                </div>

                                <div onClick={(e) => {
                                    e.preventDefault();
                                    rate({
                                        commentId: commentId,
                                        type: 4
                                    })
                                    refetch()
                                }} className={`hover:scale-125 hover:text-custom-green-100 transition-all flex gap-2 items-center cursor-pointer ${ratings?.userReaction == 4 && 'text-custom-green-100'}`}>
                                    <BsStarFill size={20} />
                                    <p>{ratings?.reaction4}</p>
                                </div>
                            </>
                        )
                        : (
                            <>
                                <div className={`flex gap-2 items-center`}>
                                    <BsFillHandThumbsUpFill size={20} />
                                    <p>{ratings?.reaction1}</p>
                                </div>

                                <div className={`flex gap-2 items-center`}>
                                    <BsHeartFill size={20} />
                                    <p>{ratings?.reaction2}</p>
                                </div>

                                <div className={`flex gap-2 items-center`}>
                                    <BsEmojiLaughingFill size={20} />
                                    <p>{ratings?.reaction3}</p>
                                </div>

                                <div className={`flex gap-2 items-center`}>
                                    <BsStarFill size={20} />
                                    <p>{ratings?.reaction4}</p>
                                </div>
                            </>
                        )
                    }



                </div>

                {/* <div className='flex gap-3 items-center'>
                    <HiChatBubbleLeftRight size={20} />
                    <p>Odpowiedz</p>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Comment