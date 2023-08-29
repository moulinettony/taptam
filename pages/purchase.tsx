import { useRouter } from 'next/router';
import Product from '../components/product';
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { fetchProducts } from '../data/product';


const ProductPurchasePage: React.FC = () => {
  const products = fetchProducts();
  const router = useRouter();
  const { name, description, price, image } = router.query;
  const imageUrl = Array.isArray(image) ? image[0] : image || '';

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
        <div className="flex bg-gray-100 flex-col items-center py-14 justify-center">
            <h1 className="text-3xl font-semibold mb-4">Purchase {name}</h1>
            <div className="lg:max-w-xl p-8 text-center rounded-lg bg-white lg:shadow-lg">
                <img src={imageUrl} alt="Logo" className="mb-4 rounded-lg" />
                <h3 className="font-bold text-2xl">{description}</h3>
                <p className="text-lg text-gray-600 font-semibold mt-2">${price}</p>
                <button className="mt-4 px-4 w-3/5 py-2 bg-black text-white hover:bg-gray-200 hover:text-black">
                BUY NOW
                </button>
            </div>
        </div>
        <div className=''>
          <h2 className="text-3xl text-center font-semibold my-4">Other Cards</h2>
        <div className='flex p-4 overflow-scroll whitespace-nowrap gap-8 bg-white'>
            {/* Display filtered products */}
            {filterByPrice().map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductPurchasePage;