import { updateComment } from '@/app/api/fetchComments'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const EditCommentModal = ({ isOpen, onOpenChange, commentId, content }) => {
    const {mutate: edit} = updateComment();
    
    const [comment, setComment] = useState({
        commentId: commentId,
        content: content,
    })
    
    useEffect(() => {
        setComment({...comment, content: content })
    }, [isOpen])

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1'>
                            Edytuj komentarz
                        </ModalHeader>
                        <ModalBody>
                            <Input value={comment.content} onChange={(e) => setComment({...comment, content: e.target.value})} />
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose} size='lg' className='bg-custom-light-gray-300'>Anuluj</Button>
                            <Button onClick={(e) => {
                                edit(comment)
                                onClose();
                            }} size='lg' className='bg-blue-500 text-white'>Edytuj</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default EditCommentModal