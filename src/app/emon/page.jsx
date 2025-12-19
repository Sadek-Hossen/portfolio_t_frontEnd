import React from 'react'
import Link from 'next/link'

const array = [
  { id: 1, title: "emon" },
  { id: 2, title: "rakib" },
  { id: 3, title: "hasan" },
  { id: 4, title: "ahmed" },
]

function EmonPage() {
  return (
    <div className='text-center text-white'>
      <div className='flex mx-auto justify-center items-center my-10 gap-6'>
        {array.map((e) => (
          <Link
            key={e.id}
            href={`/emon/${e.id}`}
            className='flex flex-col bg-transparent w-[150px] p-6 rounded-2xl border cursor-pointer'
          >
            <h1>{e.title}</h1>
            <p>ID: {e.id}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EmonPage
