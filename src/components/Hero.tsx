import React from 'react'

const Mainhero = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-[#F0F2F3] w-[1140px] h-[850px] flex flex-row justify-between items-center px-6'>
        {/* Left Side - Text Content */}
        <div className='flex flex-col items-start w-[500px]'>
          {/* Heading */}
          <div className='text-[#272343] text-left text-4xl font-semibold'>
            WELCOME TO CHARITY
          </div>

          {/* Subheading */}
          <span className='text-[#272343] text-left font-bold text-5xl mt-4'>
            Best Furniture Collection for your interior.
          </span>

          {/* Button */}
          <button className='bg-[#029FAE] text-white font-semibold w-[160px] h-[50px] mt-6'>
            Shop Now ➡️
          </button>
        </div>

        {/* Right Side - Image */}
        <div className='w-[500px]'>
          <img 
            src='Product Image.png'  // Replace this URL with your image URL
            alt='Furniture' 
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Mainhero;
