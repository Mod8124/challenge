export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        // Add more products here
      ];
      resolve(products);
    }, 1000); // Simulate an asynchronous API call with a delay
  });
};
