import { Image, Badge } from '@nextui-org/react'
import React from 'react'

const MiniOccasionCard = () => {
    return (
        <div>
            <Badge content="123" className='bg-custom-green-400 border-inherit border-4 text-white px-3 font-semibold text-lg' placement='bottom-right'>
                <Image
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                    alt={"Alt"}
                    width={200}
                    height={200}
                    shadow="md"
                />
            </Badge>

            <h2 className='text-center font-bold text-2xl'>Tytuł okazji</h2>
            <h3 className='text-center font-bold text-xl text-custom-green-100'>123,45 zł</h3>
        </div>
    )
}

export default MiniOccasionCard