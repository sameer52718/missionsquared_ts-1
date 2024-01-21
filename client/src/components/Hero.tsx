import React from "react"

const Hero :React.FC = () => {
  return (
    <section className='hero lg:pt-52 md:pt-46 pt-36 pb-20'>
        <div className="container mx-auto md:px-10 px-5">
            <h1 className='md:text-6xl text-4xl font-light font-meeriweather mb-5'>
            <div className='mb-3 text-white'>Welcome to the</div>
            <div className='mb-3 text-orange-100'>EQ² Assessment</div>
            </h1>
            <p className='font-montserrat text-xl text-white lg:w-1/2 md:w-4/5 mb-5'>Please fill in your name and email below then proceed to the word selection.</p>

            <p className='font-montserrat text-xl text-white lg:w-1/2 md:w-4/5'>Check the box next to each adjective that most accurately describe the way you’ve seen yourself interacting <span className='text-orange-100'>at work</span> in the last 3-6 months.</p>
        </div>
    </section>
  )
}

export default Hero