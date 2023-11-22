
import { deleteOccasion } from '@/app/api/fetchOccasions'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const DeleteModal = ({isOpen, onOpenChange, occasionTitle, occasionId}) => {
    const {mutate: del} = deleteOccasion();
  
    return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className='flex flex-col gap-1'>Czy usunąć okazję?</ModalHeader>
                    <ModalBody>
                        <p>Czy na pewno chcesz usunąć okazję: </p>
                        <p>{occasionTitle}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={onClose} size='lg' className='bg-custom-light-gray-300'>Nie</Button>
                        <Button onClick={(e) => {
                            del(occasionId)
                            onClose();
                        }} size='lg' className='bg-red-600 text-white'>Tak</Button>
                    </ModalFooter>
                </>
            )
            }
        </ModalContent>
    </Modal>
  )
}

export default DeleteModal