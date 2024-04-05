import React from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { deleteComment } from '@/app/api/fetchComments'

const DeleteCommentModal = ({isOpen, onOpenChange, commentId}) => {
  const {mutate: del} = deleteComment();
  
    return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className='flex flex-col gap-1'>Czy usunąć komentarz?</ModalHeader>
                    <ModalFooter>
                        <Button onPress={onClose} size='lg' className='bg-custom-light-gray-300'>Nie</Button>
                        <Button onClick={(e) => {
                            del(commentId)
                            onClose();
                        }} size='lg' className='bg-red-600 text-white'>Tak</Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
  )
}

export default DeleteCommentModal