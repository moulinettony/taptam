import { GetStaticPaths, GetStaticProps } from 'next';
import React, { ReactNode } from 'react';

interface Product {
  price: ReactNode;
  description: ReactNode;
  title: string;
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Define the 'fetchProductSlugs' function to fetch a list of possible 'slug' values
  const productSlugs = await fetchProductSlugs(); // Implement this function

  // Map the 'slug' values to 'params' objects required for each path
  const paths = productSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
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

async function fetchProductSlugs(): Promise<string[]> {
  // Implement your data fetching logic here to fetch product slugs
  // Return an array of product slug strings
  return ['product-slug-1', 'product-slug-2', 'product-slug-3']; // Replace with actual data
}

export default ProductPage;
