import React from 'react';
// FeaturedProducts.js
export const FeaturedProducts = () => {
  return (
    <div className='w-full bg-white flex justify-center items-center'>
      <div className='w-[80%] max-w-[1200px] h-[450px] text-[#272343] font-semibold'>
        <div className='text-left text-3xl py-6 ml-5'>FEATURED PRODUCTS</div>
        <div className='flex justify-start items-center space-x-6 ml-5'>
          <img src="Products (1).png" alt="Product 1" className='h-[300px] object-contain' />
          <img src="Products (2).png" alt="Product 2" className='h-[300px] object-contain' />
          <img src="Products (3).png" alt="Product 3" className='h-[300px] object-contain' />
          <img src="Products.png" alt="Product 4" className='h-[300px] object-contain' />
        </div>
      </div>
    </div>
  );
};

// TopCategory.js
export const TopCategory = () => {
  return (
    <div className='w-full bg-white flex justify-center items-center'>
      <div className='w-[80%] max-w-[1200px] h-[508px] text-[#272343] font-semibold'>
        <div className='text-left text-3xl py-6 ml-5'>Top Category</div>
        <div className='flex justify-start items-center space-x-6 ml-5'>
          <img src="Category (1).png" alt="Category 1" className='h-[250px] object-contain' />
          <img src="Category (2).png" alt="Category 2" className='h-[250px] object-contain' />
          <img src="Category.png" alt="Category 3" className='h-[250px] object-contain' />
        </div>
      </div>
    </div>
  );
};
const OurProduct = () => {
  return (
    <div className="bg-white w-full py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <img src="Product Image.png" alt="Product 1" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products (1).png" alt="Product 2" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products (2).png" alt="Product 3" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products (3).png" alt="Product 4" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products.png" alt="Product 5" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Product Image.png" alt="Product 6" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products (1).png" alt="Product 7" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
        <img src="Products (2).png" alt="Product 8" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default OurProduct;
