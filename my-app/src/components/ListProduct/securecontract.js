import React, { useState } from 'react';

const SecureContract = () => {
  const [contractDetails, setContractDetails] = useState({
    farmerName: '',
    buyerName: '',
    product: '',
    quantity: '',
    price: '',
    contractDate: '',
    deliveryDate: '',
    signature: '',
  });

  const handleChange = (e) => {
    setContractDetails({
      ...contractDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAndDownload = (e) => {
    e.preventDefault();
    console.log('Contract Submitted:', contractDetails);
    alert('Contract signed and submitted securely!');
    alert('Downloading contract as PDF...');
  };

  const handlePayment = () => {
    alert('Redirecting to payment gateway...');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-maingreen shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-lightyellow">Secure Contract Form</h2>
      <form onSubmit={handleSubmitAndDownload}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Farmer's Name</label>
          <input
            type="text"
            name="farmerName"
            value={contractDetails.farmerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Buyer's Name</label>
          <input
            type="text"
            name="buyerName"
            value={contractDetails.buyerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Product</label>
          <input
            type="text"
            name="product"
            value={contractDetails.product}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={contractDetails.quantity}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Price</label>
          <input
            type="number"
            name="price"
            value={contractDetails.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Contract Date</label>
          <input
            type="date"
            name="contractDate"
            value={contractDetails.contractDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-beige">Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={contractDetails.deliveryDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-beige">Signature</label>
          <input
            type="text"
            name="signature"
            value={contractDetails.signature}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-darkgreen rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
            required
            placeholder="Type your full name as a signature"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            className="w-full bg-grassgreen text-white py-2 px-4 rounded-md shadow-md hover:bg-greenwhite focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
          >
            Submit and Download Contract
          </button>

          <button
            type="button"
            onClick={handlePayment}
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecureContract;
