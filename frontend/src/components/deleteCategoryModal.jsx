import React from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { deleteCategory } from '@/app/api/fetchCategories'

const DeleteCategoryModal = ({isOpen, onOpenChange, categoryId}) => {
    const {mutate: del} = deleteCategory();
  
    return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className='flex flex-col gap-1'>Czy usunąć kategoirę?</ModalHeader>
                    <ModalFooter>
                        <Button onPress={onClose} size='lg' className='bg-custom-light-gray-300'>Nie</Button>
                        <Button onClick={(e) => {
                            del(categoryId)
                            onClose();
                        }} size='lg' className='bg-red-600 text-white'>Tak</Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
  )
}

export default DeleteCategoryModal