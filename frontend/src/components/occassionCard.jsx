import React from 'react'
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import {BsPlusCircleFill, BsFillDashCircleFill, BsBoxArrowUpRight, BsFillHouseDoorFill, BsEyeFill} from 'react-icons/bs'

const OccassionCard = () => {
    return (
        <div className=' mb-5 grid place-items-center'>
            <Card className="p-3">
                <div className='flex gap-4'>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl flex-1"
                        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                        width={270}
                    />

                    <div className='flex flex-col justify-between'>
                        <div className="flex justify-end">
                            <div className='border-2 border-custom-green-100 rounded-md flex items-center gap-5 px-2 py-1'>
                                <button className='text-red-600'><BsFillDashCircleFill size={30}/></button>
                                <span className='text-black font-semibold text-xl'>124</span>
                                <button className='text-green-700'><BsPlusCircleFill size={30}/></button>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-[26px] font-bold break-normal max-w-[150px]'>Tytuł okazji</h2>
                            <div className='flex gap-16 text-[20px] font-semibold items-center'>
                                <div className='flex gap-2'>
                                    <h3 className='text-custom-green-100'>123,45 zł</h3>
                                    <h3 className='text-custom-light-gray-500 line-through'>150,99 zł</h3>
                                </div>
                                <div className='bg-custom-green-100 text-white rounded-2xl px-2.5 py-1.5'>
                                    <p>-23%</p>
                                </div>
                            </div>
                            <small className='text-custom-light-gray-500 text-sm'>Najniższa cena z 30 dni 130,88 zł</small>
                        </div>
                    </div>
                </div>

                <div className='max-w-[600px] mt-3'>
                    <p className='break-words text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam provident ullam blanditiis quas fuga nostrum quis enim eveniet, libero molestias odit dolor vero nesciunt iste assumenda in voluptate. Quisquam, ex.</p>
                </div>

                <div className='flex justify-between mt-3'>
                    <div className='flex flex-col justify-end'>
                        <h2 className='bg-custom-green-100 px-2 py-1 text-white rounded-xl text-base'>Od: Nazwa użytkownika</h2>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Button startContent={<BsBoxArrowUpRight size={20}/>} className='bg-custom-green-400 text-white text-[16px] font-medium'>Pzekiruj do okazji</Button>
                        <div className='bg-custom-light-gray-200 text-black text-base font-medium flex justify-between items-center px-3 py-2 rounded-xl'>
                            <div className='flex gap-1 items-center'>
                                <BsFillHouseDoorFill size={20}/>
                                <p>Kategoria</p>
                            </div>
                            <BsEyeFill size={20}/>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default OccassionCard