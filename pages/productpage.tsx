import React from 'react';
import Product from '../components/product';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { fetchProducts } from '../data/product'; // Import your data fetching function

function ProductPage() {
  const products = fetchProducts();

  return (
    <div>
        <Navbar/>
        <section className='container mx-auto py-14 max-lg:px-6'>
            <h1 className="text-3xl text-center font-semibold mb-8">Our cards</h1>
            <div>
                <div className='lg:flex gap-6'>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  );
}

export default ProductPage;
