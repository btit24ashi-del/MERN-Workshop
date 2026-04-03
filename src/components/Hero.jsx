import React from 'react'

function Hero() {
  return (
    <section>
        <img src="my-app\src\components\ismt-college-tinkune-kathmandu.jpg" alt="Hero Image"/>
        <div className='items-center justify-center flex flex-col gap-10 py-20'>
        <h1 className='text-6xl font-bold'>Solve your Queries with ISMT Chat</h1>
        <p className= 'text-3xl font-light'>Get instant answers to your questions with our AI-powered chatbot.</p>
        <button  className='bg-black text-white rounded-3xl px-7 py-2 hover:bg-white hover:text-black cursor-grabbing h-20'>Get Started</button>
    </div></section>
  )
}

export default Hero