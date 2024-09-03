import React, { useState } from 'react';

function RegistrationForm() {
  const [userType, setUserType] = useState('farmer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful');
      } else {
        setError(data.msg || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-beige min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-extrabold text-darkgreen">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-greenwhite text-lg">
          Choose your role:
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button 
            onClick={() => setUserType('farmer')} 
            className={`px-6 py-2 rounded-full font-semibold text-lg ${userType === 'farmer' ? 'bg-darkgreen text-beige' : 'bg-green text-greenwhite'} transition duration-300`}
          >
            Farmer
          </button>
          <button 
            onClick={() => setUserType('buyer')} 
            className={`px-6 py-2 rounded-full font-semibold text-lg ${userType === 'buyer' ? 'bg-darkgreen text-beige' : 'bg-green text-greenwhite'} transition duration-300`}
          >
            Buyer
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-lightgreen py-8 px-6 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-darkgreen text-sm font-medium mb-1">
                {userType === 'farmer' ? 'Farm Name' : 'Company Name'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-3 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                placeholder={userType === 'farmer' ? 'Enter your farm name' : 'Enter your company name'}
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-3 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-darkgreen text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-4 py-3 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-beige bg-darkgreen hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen transition duration-300"
              >
                Sign Up
              </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
