import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='bg-[#272343] w-[1516px] h-[45px]'>

      <div className='w-full h-[45px] px-4 py-2 flex items-center justify-between'>
     
        <span className='text-[#FFFFFF] ml-5'>
          Check 1 Free shipping on all orders over $50
        </span>

        
        <div id='links' className='flex space-x-6 text-[#FFFFFF]'>
          <Link href="">ENG</Link>
          <Link href="">FAQs</Link>
          <Link href="">Need help?</Link>
        </div>
      </div>
   
    </div>
  );
}

export default TopHeader;


export const MiddleHeader = () => {
    return (
      <div className='bg-[#F0F2F3] w-[1516px] h-[84px] flex items-center justify-between px-6'>
        
        {/* Left Logo Section */}
        <div className=' pl-10 flex items-center'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5xve3eudAy20-hMLANGY9MyTOdJtznj0-24b3Q3K0RUPUU9S5k_5U3cMMYm86V0how8&usqp=CAU" 
            height="40px" 
            width="40px" 
            alt="logo" 
          />
          <span className='ml-2 text-lg font-semibold w-[110px] h-[31px]'>Comforty</span>
        </div>
  
        {/* Right Cart Section */}
        <div className='flex items-center bg-white px-4 py-2 rounded '>
          <img 
            src="https://www.shutterstock.com/image-vector/shop-icon-store-symbol-flat-600w-293567324.jpg" 
            alt="cart" 
            height="22px" 
            width="22px"
          />
          <span className='ml-2 text-sm'>Cart</span>
        </div>
      </div>
    );
  }
  