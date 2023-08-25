// data/products.js
const products = [
    {
      id: 1,
      name: '',
      description: 'Popcard Google Reviews',
      price: 49.99,
      image: '/images/product1.webp', // Add the image URL here
    },
    {
      id: 2,
      name: '',
      description: 'Popcard Yelp Reviews',
      price: 49.99,
      image: '/images/product2.webp', // Add the image URL here
    },
    {
      id: 3,
      name: '',
      description: 'Popcard Instagram Business',
      price: 49.99,
      image: '/images/product3.webp', // Add the image URL here
    },
    // Add more products here
  ];
  
  export function fetchProducts() {
    return products;
  }
  