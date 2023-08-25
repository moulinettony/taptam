const products = [
    {
      id: 1234,
      name: '',
      description: 'Popcard Google Reviews',
      price: 19.99,
      image: '/images/product1.webp', // Add the image URL here
      inStock: true,
    },
    {
      id: 2345,
      name: '',
      description: 'Popcard Yelp Reviews',
      price: 29.99,
      image: '/images/product2.webp', // Add the image URL here
      inStock: true,
    },
    {
      id: 3456,
      name: '',
      description: 'Popcard Instagram Business',
      price: 49.99,
      image: '/images/product3.webp', // Add the image URL here
      inStock: false,
    },
    {
      id: 4567,
      name: '',
      description: 'Popcard Tripadvisor Riviews',
      price: 49.99,
      image: '/images/product4.webp', // Add the image URL here
      inStock: false,
    },
    {
      id: 5678,
      name: '',
      description: 'Popcard Trustpilot Riviews',
      price: 59.99,
      image: '/images/product5.webp', // Add the image URL here
      inStock: false,
    },
    {
      id: 6789,
      name: '',
      description: 'Popcard Whatsapp Business',
      price: 59.99,
      image: '/images/product6.webp', // Add the image URL here
      inStock: true,
    },
    // Add more products here
  ];
  
  export function fetchProducts() {
    return products;
  }
  