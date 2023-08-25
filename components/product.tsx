import React from 'react';
import Link from 'next/link';

export interface ProductType {
  id: number;
  image: string | undefined;
  name: string;
  description: string;
  price: number;
  // Add other product fields as needed
}

const ProductPage: React.FC<{ product: ProductType | undefined }> = ({ product }) => {
  if (!product) {
    return <p className='flex items-center justify-center h-screen'>Loading...</p>; // Display a loading message
  }

  return (
    <div className='flex flex-col items-center'>
      <p>{product.name}</p>
      <img className='mb-2 h-auto w-96' src={product.image} alt={product.name} />
      <h2 className='mb-2 text-xl'>{product.description}</h2>
      <p className='mb-2 font-light'>${product.price}</p>
      <Link
        href={{
          pathname: '/purchase',
          query: { productId: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
          },
        }} as={`/purchase/${product.id}`}
        className='mb-6 bg-black text-white hover:text-black hover:bg-gray-300 w-full py-3 text-center m-auto'>
        BUY NOW
      </Link>   
    </div>
  );
};

export default ProductPage;
