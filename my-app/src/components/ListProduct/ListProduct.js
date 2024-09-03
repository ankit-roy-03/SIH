import React, { useState } from 'react';

const categories = {
  Fruits: ['Apples', 'Oranges', 'Bananas'],
  Vegetables: ['Tomatoes', 'Carrots', 'Spinach'],
  Grains: ['Rice', 'Wheat', 'Corn'],
  Legumes: ['Beans', 'Lentils', 'Peas'],
  Herbs: ['Basil', 'Mint', 'Cilantro'],
  Livestock: ['Cattle', 'Poultry', 'Pigs', 'Sheep'],
  'Seeds & Plants': ['Vegetable Seeds', 'Fruit Trees', 'Flowers'],
  'Organic Products': ['Organic Fruits & Vegetables', 'Organic Fertilizers'],
  'Dairy Products': ['Milk', 'Cheese'],
  'Grains & Cereals': ['Whole Grains', 'Processed Grains'],
  'Animal Feed': ['For Cattle', 'For Poultry', 'For Pigs'],
  'Farm Equipment & Supplies': ['Tools', 'Seeds & Fertilizers'],
};

function ListProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    subcategory: '',
    location: '',
    price: '',
    quantity: '',
    images: [],
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      images: Array.from(e.target.files),
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category: value,
      subcategory: '', // Reset subcategory when category changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const formDataToSubmit = new FormData();
      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((file, index) => formDataToSubmit.append(`images[${index}]`, file));
        } else {
          formDataToSubmit.append(key, formData[key]);
        }
      }

      const token = sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/products/list', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSubmit,
      });

      if (response.ok) {
        setSuccess('Product listed successfully!');
        setFormData({
          productName: '',
          description: '',
          category: '',
          subcategory: '',
          location: '',
          price: '',
          quantity: '',
          images: [],
        });
      } else {
        const data = await response.json();
        setError(data.msg || 'Failed to list product.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const availableSubcategories = formData.category ? categories[formData.category] : [];

  return (
    <section className="bg-beige min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-darkgreen">List a Product</h2>
        <p className="text-center text-sm text-darkgreen">
          Fill in the details below to list your product.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-lightgreen py-8 px-6 shadow sm:rounded-lg sm:px-10">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              >
                <option value="" disabled>Select a category</option>
                {Object.keys(categories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Subcategory</label>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                required
                disabled={!formData.category}
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              >
                <option value="" disabled>Select a subcategory</option>
                {availableSubcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Images</label>
              <input
                type="file"
                name="images"
                onChange={handleFileChange}
                multiple
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-darkgreen hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
              >
                List Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
