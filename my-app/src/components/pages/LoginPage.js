import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // Store the JWT in session storage
        sessionStorage.setItem('token', data.token);
        // Redirect to another page or perform other actions
        navigate('/dashboard'); // Redirect to a protected route or dashboard
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-beige min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-darkgreen">
          Sign In to Your Account
        </h2>
        <p className="mt-2 text-center text-greenwhite">
          Please enter your credentials to access your account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-lightgreen py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-darkgreen text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-3 py-2 border border-lightgreen rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-darkgreen text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="appearance-none block w-full px-3 py-2 border border-lightgreen rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-green focus:ring-green border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-darkgreen">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-green hover:text-maingreen">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-green hover:bg-maingreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>

          {/* Aadhaar Login Section */}
          <div className="mt-6 text-center">
            <p className="text-darkgreen">Or log in with Aadhaar</p>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-darkgreen hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
            >
              Login with Aadhaar
            </button>
          </div>

          <div className="mt-6 text-center text-greenwhite">
            Don't have an account?{' '}
            <Link to="/register" className="text-green font-medium hover:text-maingreen">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
