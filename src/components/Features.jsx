import React, { useState } from 'react'
const Features = () => {
    const [number, setNumber] = useState(1)
  return (
    <section>
        <div>
        <h2 className='text-center text-4xl font-extrabold mb-8'>Features {number}</h2> 
        <button onClick={()=> setNumber(number+1)}>+</button>
        </div>
        <div className='grid grid-cols-3 gap-6'> 
            <div className='border border-gray-300 p-6 gap-6 shadow-xl shadow-red-600 border-rounded-9xl'>
                <h3 className='text-3xl font-bold'>Real Time Response</h3>
                <p className='text-lg font-light text-grey-600'>Get instant answers to your questions with our AI-powered chatbot.</p>
            </div>
            <div className='border border-gray-300 p-6 gap-6 shadow-xl shadow-green-600'>
                <h3 className='text-3xl font-bold'>24/7 Support</h3>
                <p className='text-lg font-light text-grey-600'>Our team is available around the clock to assist you with any questions or concerns.</p>
            </div>
            <div className='border border-gray-300 p-6 gap-6 shadow-xl shadow-blue-600'>
                <h3 className='text-3xl font-bold'>Easy to Use</h3>
                <p className='text-lg font-light text-grey-600'>Our intuitive interface makes it simple to navigate and find the information you need.</p>
            </div>
        </div>
    </section>
  )
}

export default Features