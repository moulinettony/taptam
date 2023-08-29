import { GetStaticProps } from 'next';
import React, { ReactNode } from 'react';

interface Product {
  price: ReactNode;
  description: ReactNode;
  title: string; // Add the 'title' property with its type
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  // Your page content here
  return (
    <div>
      <h1>Product Page</h1>
      {/* Display product details using the 'product' prop */}
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Additional content */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const product = await fetchProductBySlug(slug); // Replace with your data fetching logic

  return {
    props: {
      product,
    },
  };
};

async function fetchProductBySlug(slug: string): Promise<Product> {
  // Implement your data fetching logic here
  // For example, fetch product data from an API or database
  // Return the product data as an object
  return {
    title: 'Sample Product',
    description: 'This is a sample product description.',
    price: 19.99,
    // Add other product details here
  };
}

export default ProductPage;
