import React from 'react';

const MainFooter = () =>{
  return (
    <div className='w-full h-[418px] bg-white flex justify-center items-center px-16 border border-gray-300'>
      {/* Outer Container with Border */}
      <div className='w-full max-w-6xl flex justify-between items-start'>
        
        {/* Left Section: Logo, Text, Social Media */}
        <div className='flex flex-col items-start'>
          {/* Logo and Text aligned horizontally */}
          <div className='flex items-center'>
            <img src="Vector.png" alt="" height={"40px"} width={"40px"} />
            <div className='font-semibold text-[#272343] text-xl ml-4'>
              Comforty
            </div>
          </div>

          {/* Text below the logo */}
          <div className='w-[350px] h-[72px] text-[#272343] mt-4'>
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus
          </div>

          {/* Social media icons */}
          <div className='flex gap-4 items-center mt-4'>
            <img src="YouTube---Negative 1.png" alt="" />
            <img src="Facebook---Negative 2.png" alt="" />
            <img src="Pinterest---Negative 1.png" alt="" />
            <img src="Instagram 1.png" alt="" />
          </div>
        </div>

        {/* Centered Section: Category */}
        <div className='flex flex-col items-start'>
          {/* Category Label */}
          <div className='w-[105px] text-[#9A9CAA] font-medium'>
            CATEGORY
          </div>

          {/* List of items */}
          <div className='flex flex-col ml-2 text-black font-normal'>
            <div>Sofa</div>
            <div>Arm chair</div>
            <div>Wing chair</div>
            <div className='text-[#007580]'>Desk chair</div>
            <div>Wooden chair</div>
            <div>Park Bench</div>
          </div>
        </div>

        {/* Right Section: Support and Newsletter */}
        <div className='flex flex-col items-start'>
          {/* Support Section */}
          <div className='w-[156px] h-[143px] font-medium text-[#9A9CAA]'>
            <div>SUPPORT</div>
            <div className='flex flex-col mt-2'>
              <a href="" className='text-blue-600 hover:underline'>Help & Support</a>
              <a href="" className='text-blue-600 hover:underline'>Terms & Conditions</a>
              <a href="" className='text-blue-600 hover:underline'>Privacy Policy</a>
              <a href="" className='text-blue-600 hover:underline'>Help</a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='w-[424px] h-[142px] font-medium text-[#9A9CAA]'>
            <div>NEWSLETTER</div>

            {/* Input and Button Container */}
            <div className='flex items-center mt-4'>
              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-[#9A9CAA] rounded-l-md"
              />

              {/* Button */}
              <button className='bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 ml-2'>
                Subscribe
              </button>
            </div>

            {/* Additional Content/Div */}
            <div className='mt-4 text-sm'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
