import React from 'react'

const Features = () => {
  return (
    <section>
        <div>
            <h2 className='text-center text-4xl font-extrabold mb-8'>Features</h2>
        </div>
        <div className='grid grid-cols-3'> 
            <div className='border p-6'>
                <h3>Real Time Response</h3>
                <p>Get instant answers to your questions with our AI-powered chatbot.</p>
            </div>
            <div className='border p-6'>
                <h3>24/7 Support</h3>
                <p>Our team is available around the clock to assist you with any questions or concerns.</p>
            </div>
            <div className='border p-6'>
                <h3>Easy to Use</h3>
                <p>Our intuitive interface makes it simple to navigate and find the information you need.</p>
            </div>
        </div>
    </section>
  )
}

export default Features