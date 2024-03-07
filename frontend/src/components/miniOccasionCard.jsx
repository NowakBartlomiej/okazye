import { Image, Badge } from '@nextui-org/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const MiniOccasionCard = ({title, image, rating, lowestPrice, id}) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/okazja/${id}`)} className='cursor-pointer'>
            <Badge content={rating} className='bg-custom-green-400 border-inherit border-4 text-white px-5 py-4 font-semibold text-lg' placement='bottom-right'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
                    alt={"Alt"}
                    width={200}
                    height={200}
                    shadow="md"
                />
            </Badge>

            <h2 className='text-center font-bold text-2xl'>{title}</h2>
            <h3 className='text-center font-bold text-xl text-custom-green-100'>{lowestPrice} zł</h3>
        </div>
    )
}

export default MiniOccasionCard