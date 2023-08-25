import React, { useState } from 'react';
import Product from '../components/product';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { fetchProducts } from '../data/product';

function ProductPage() {
  const products = fetchProducts();

  const [inStockFilter, setInStockFilter] = useState(false);
  const [outOfStockFilter, setOutOfStockFilter] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (selectedFilter === 'instock' && !product.inStock) {
      return false;
    }
    if (selectedFilter === 'outofstock' && product.inStock) {
      return false;
    }
    return true;
  });

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filterByPrice = () => {
    return filteredProducts.filter((product) => {
      const productPrice = parseFloat(product.price.toString());
      const min = minPrice !== '' ? parseFloat(minPrice) : Number.NEGATIVE_INFINITY;
      const max = maxPrice !== '' ? parseFloat(maxPrice) : Number.POSITIVE_INFINITY;
      return productPrice >= min && productPrice <= max;
    });
  };

  return (
    <div>
        <Navbar/>
        <section className='mx-auto'>
            <h1 className="bg-gray-100 text-3xl text-center border-b font-semibold py-10">Our cards</h1>
            <div className='lg:flex'>
                <div className='bg-gray-100 border flex flex-col p-8'>
                    <label className='mb-3'>
                        <input
                        type="radio"
                        name="filter"
                        className='mr-3'
                        value="all"
                        checked={selectedFilter === 'all'}
                        onChange={() => setSelectedFilter('all')}
                        />
                        All
                    </label>
                    <label className='mb-3'>
                        <input
                        type="radio"
                        name="filter"
                        className='mr-3'
                        value="instock"
                        checked={selectedFilter === 'instock'}
                        onChange={() => setSelectedFilter('instock')}
                        />
                        In Stock
                    </label>
                    <label className='mb-3'>
                        <input
                        type="radio"
                        name="filter"
                        className='mr-3'
                        value="outofstock"
                        checked={selectedFilter === 'outofstock'}
                        onChange={() => setSelectedFilter('outofstock')}
                        />
                        Out of Stock
                    </label>
                    {/* Price filter input fields */}
                    <label className='my-3 flex flex-col justify-around'>
                        Min Price:
                        <input
                        type="text"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </label>
                    <label className='mb-3 flex flex-col justify-around'>
                        Max Price:
                        <input
                        type="text"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </label>
                </div>
                <div className='flex flex-wrap gap-8 bg-white'>
                    {/* Display filtered products */}
                    {filterByPrice().map((product) => (
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
