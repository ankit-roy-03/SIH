import React, { useState } from 'react';

function BuyProduct() {
  const [formData, setFormData] = useState({
    productName: 'Sample Product', // This can be fetched or passed as a prop
    quantity: 1,
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/orders/place', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Order placed successfully!');
      } else {
        const data = await response.json();
        setError(data.msg || 'Failed to place order.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleCancel = () => {
    // Reset the form or navigate away if needed
    setFormData({
      productName: 'Sample Product',
      quantity: 1,
      address: '',
      city: '',
      state: '',
      zipCode: '',
      paymentMethod: 'Credit Card',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
    });
    setSuccess(null);
    setError(null);
  };

  const handleSaveForLater = () => {
    // Implement save functionality, such as saving to a wishlist
    setSuccess('Product saved for later!');
  };

  return (
    <section className="bg-beige min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-darkgreen">Buy Product</h2>
        <p className="text-center text-sm text-darkgreen">
          Complete the form below to buy the product.
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
                readOnly
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm bg-gray-100 text-darkgreen sm:text-sm"
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
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Delivery Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            {formData.paymentMethod === 'Credit Card' && (
              <>
                <div>
                  <label className="block text-darkgreen text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label className="block text-darkgreen text-sm font-medium">Expiry Date</label>
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-darkgreen text-sm font-medium">CVC</label>
                    <input
                      type="text"
                      name="cardCVC"
                      value={formData.cardCVC}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-darkgreen bg-lightyellow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveForLater}
                className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-darkgreen bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
              >
                Save for Later
              </button>
              <button
                type="submit"
                className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-darkgreen hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
              >
                Place Order
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-green hover:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
                onClick={() => window.location.href = '/products'} // Redirect to products page
              >
                Continue Shopping
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BuyProduct;
