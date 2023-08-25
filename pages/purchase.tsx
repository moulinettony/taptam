import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ProductPurchasePage: React.FC = () => {
  const router = useRouter();
  const { name, description, price, image } = router.query;
  const imageUrl = Array.isArray(image) ? image[0] : image || '';

  return (
    <div>
        <Navbar/>
        <div className="flex flex-col items-center py-14 justify-center">
            <h1 className="text-3xl font-semibold mb-4">Purchase {name}</h1>
            <div className="max-w-md p-4 text-center rounded-lg lg:shadow-lg">
                <img src={imageUrl} alt="Logo" className="mb-4 rounded-lg" />
                <h3 className="font-bold text-2xl">{description}</h3>
                <p className="text-lg text-gray-600 font-semibold mt-2">${price}</p>
                <button className="mt-4 px-4 w-3/5 py-2 bg-black text-white hover:bg-gray-200 hover:text-black rounded-lg">
                BUY NOW
                </button>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductPurchasePage;
