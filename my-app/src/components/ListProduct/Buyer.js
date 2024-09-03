import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Apples', category: 'Fruits', price: 100, description: 'Fresh apples', imageUrl: '/images/apples.jpg' },
  { id: 2, name: 'Tomatoes', category: 'Vegetables', price: 80, description: 'Ripe tomatoes', imageUrl: '/images/tomatoes.jpg' },
  { id: 3, name: 'Rice', category: 'Grains', price: 50, description: 'Organic rice', imageUrl: '/images/rice.jpg' },
  // Add more products as needed
];

function Buyer() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedProduct(null); // Reset selected product when category changes
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <section className="bg-beige min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-darkgreen mb-4">Buy Products</h1>

        <div className="mb-6">
          <label className="block text-darkgreen text-sm font-medium mb-2">Select Category</label>
          <select
            className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Grains">Grains</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-lightgreen p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-bold text-darkgreen">{product.name}</h2>
              <p className="text-greenwhite mt-2">{product.description}</p>
              <p className="text-green mt-2 font-semibold">${product.price}</p>
              <button
                className="mt-4 w-full bg-darkgreen text-beige py-2 px-4 rounded-md hover:bg-green focus:outline-none"
                onClick={() => handleProductClick(product)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-darkgreen">{selectedProduct.name}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg my-4" />
            <p className="text-greenwhite">{selectedProduct.description}</p>
            <p className="text-green mt-2 font-semibold">${selectedProduct.price}</p>
            {/* You can add more details and actions here */}
          </div>
        )}
      </div>
    </section>
  );
}

export default Buyer;
