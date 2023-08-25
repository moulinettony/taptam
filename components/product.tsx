import React from 'react';

export interface ProductType {
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
    <div className='flex gap-4 flex-col items-center'>
      <p>{product.name}</p>
      <img className='h-auto w-96' src={product.image} alt={product.name} />
      <h2 className='text-xl font-semibold'>{product.description}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
