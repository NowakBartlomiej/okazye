'use client'

import React from 'react'
import { Chip, Tooltip } from "@nextui-org/react";
import { getBadges } from '@/app/api/fetchBadges';

const Badges = () => {
  const { data, isLoading } = getBadges();

  if (!isLoading) {
    console.log(data)
  }
  return (
    <main>
      {!isLoading && data.map((x) => {
        console.log(x)
        return (
          <div className='ml-6 mt-3'>
            <p className='text-2xl font-medium text-custom-green-700 mb-2'>{x.name}</p>
            <div className='flex flex-wrap gap-3 mb-6'>
              {
              Object.entries(x.hasBadges).map(([k, v], index) => { 
              const criterion = x.criterion
              return (
                <Tooltip size='lg' showArrow={true} content={`Kryterium: ${x.count} / ${criterion[`${k}`]}`}>
                  <Chip
                    variant="shadow"
                    size='lg'
                    className={`${v ? 'bg-gradient-to-tr from-custom-green-100 to-custom-green-300 text-white' : 'bg-gray-300 text-slate-600'}  text-lg px-3 cursor-default`}
                    classNames={{
                      content: "drop-shadow"
                    }}
                  >{k}</Chip>
                </Tooltip>
              )})
              
              
              }


            </div>
          </div>
        )
      })}


    </main>
  )
}

export default Badges