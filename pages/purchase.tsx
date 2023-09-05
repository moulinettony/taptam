import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Stripe, PaymentMethod } from '@stripe/stripe-js';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { fetchProducts } from '../data/product';
import Product from '@/components/product';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://olmzdcdyqplepgpqnvlk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbXpkY2R5cXBsZXBncHFudmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1Nzg3NDQsImV4cCI6MjAwOTE1NDc0NH0.3bGzSwOL8hX1-RDvAtLHXtk15ISp1kb0WHHQYoug5ak'
);

const stripePromise = loadStripe('pk_test_51NjsecJQ1wslCVrTQFydV4OYmm6wu9jf5JSXoR916qJScWYpaXZmByvCcwq1DkJRvBOqkInRKbVS18MpIedW1LNK00Uv6ZSUcw');

const ProductPurchasePage: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const products = fetchProducts();
  const router = useRouter();
  const { name, description, price, image } = router.query;
  const imageUrl = Array.isArray(image) ? image[0] : image || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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

  // UseStripe and useElements here
  const stripe: Stripe | null = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      console.error('Stripe.js has not yet loaded or something went wrong.');
      return;
    }
  
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: fullName,
          email: email,
          phone: phoneNumber,
        },
      });
      
      if (error) {
        console.error(error);
      } else {
        // Extract the last 4 digits of the card number from the PaymentMethod
        const cardLast4 = paymentMethod.card?.last4 || '';
  
        // Create a new record in your Supabase table
        const { data, error } = await supabase.from('shop_orders').upsert([
          {
            description: description as string,
            price: parseFloat(price as string),
            fullName,
            email,
            phoneNumber,
            cardNumberLast4: cardLast4, // Store the last 4 digits
          },
        ]);
  
        if (error) {
          console.error(error);
        } else {
          // Payment is successful, so show the success modal
          setShowSuccessModal(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto lg:px-4 text-center">
          <h1 className="text-3xl font-semibold mb-4">Purchase {name}</h1>
          <div className="lg:max-w-xl mx-auto p-8 bg-white lg:rounded-lg shadow-lg">
            <img src={imageUrl} alt="Logo" className="mb-4 w-full rounded-lg" />
            <h3 className="font-bold text-2xl">{description}</h3>
            <p className="text-lg text-gray-600 font-semibold mt-2">${price}</p>
            <hr className='bg-black w-16 mx-auto my-6 h-px' />
            <form onSubmit={handleSubmit} className="mt-4">
              <div className='flex flex-col text-left'>
                <div className='lg:flex gap-6 max-lg:mb-6'>
                  <div className='w-full lg:flex flex-col mb-6'>
                    <label className="card-element-label">Full Name</label>
                    <input
                      className='w-full'
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='w-full lg:flex flex-col'>
                    <label className="card-element-label">Phone Number</label>
                    <input
                      className='w-full'
                      type="tel"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className="card-element-label">Email</label>
                  <input
                    className='w-full'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="card-element-container text-left">
                <label className="card-element-label">Card Number</label>
                <CardElement
                  className="StripeElement"
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 w-3/5 py-2 bg-black text-white hover:bg-gray-200 hover:text-black"
              >
                BUY NOW
              </button>
            </form>
            <p className="text-xs font-light">
              Powred by <span className="font-bold px-2 py-1 rounded-md bg-black text-white">stripe</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">Other Cards</h2>
          <div className="flex p-4 overflow-x-scroll whitespace-nowrap gap-8">
            {/* Display filtered products */}
            {filterByPrice().map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
        contentLabel="Success Modal"
        ariaHideApp={false}
        appElement={document.getElementById('root') as HTMLElement} 
        className="h-screen flex-col flex justify-center items-center"
      >
        <div className='bg-white p-8 rounded text-center min-h-content'>
          <h2 className='font-bold text-xl text-green-600 mb-6'>Payment Successful!</h2>
          <p className='mb-6'>Your payment has been processed successfully.</p>
          <button className='bg-black py-2 px-3 text-white' onClick={() => setShowSuccessModal(false)}>Close</button>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

// Wrap your component with the Elements provider
const WrappedProductPurchasePage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <ProductPurchasePage />
    </Elements>
  );
};

export default WrappedProductPurchasePage;
