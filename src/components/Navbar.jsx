import React from 'react'

function Navbar() {
  return (
    <header className='flex items-center justify-between
    px-20 py-8 bg-gray-800 text-white'>
        <div>
            <h1 className='text-4xl font-bold'>ISMT Chat</h1>
        </div>
        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-6 text-xl font-medium text-grey-300'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
            <button className='bg-black text-white rounded-3xl px-7 py-2 hover:bg-white hover:text-black cursor-grabbing'>Chat Page</button>
            </div>
    </header>
  )
}

export default Navbar