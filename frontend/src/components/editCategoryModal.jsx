import React, { useEffect, useState } from 'react'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { updateCategory } from '@/app/api/fetchCategories'

const EditCategoryModal = ({ isOpen, onOpenChange, categoryId, name }) => {
    const {mutate: edit} = updateCategory();

    const [category, setCategory] = useState({
        categoryId: categoryId,
        name: name,
    })

    useEffect(() => {
        setCategory({
            categoryId: categoryId,
            name: name,
        })
    }, [isOpen])

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1'>
                            Edytuj kategorię
                        </ModalHeader>
                        <ModalBody>
                            <Input value={category.name} onChange={(e) => setCategory({...category, name: e.target.value})} />
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose} size='lg' className='bg-custom-light-gray-300'>Anuluj</Button>
                            <Button onClick={(e) => {
                                edit(category)
                                onClose();
                            }} size='lg' className='bg-blue-500 text-white'>Edytuj</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
    </Modal>
  )
}

export default EditCategoryModal