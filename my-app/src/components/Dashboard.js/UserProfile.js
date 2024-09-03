import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setFormData({ name: data.name, email: data.email });
        } else {
          setError('Failed to fetch user data.');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = sessionStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData);
        setIsEditing(false);
      } else {
        const data = await response.json();
        setError(data.msg || 'Failed to update profile.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-beige min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-darkgreen">
          User Profile
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-lightgreen py-8 px-6 shadow sm:rounded-lg sm:px-10">
          {error && <p className="text-red-500 text-center">{error}</p>}

          {isEditing ? (
            <form className="space-y-6" onSubmit={handleUpdate}>
              <div>
                <label className="block text-darkgreen text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-darkgreen text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-4 py-2 border border-darkgreen rounded-md shadow-sm placeholder-greenwhite focus:outline-none focus:ring-green focus:border-green sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-darkgreen hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
                >
                  Update Profile
                </button>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
            </form>
          ) : (
            <div>
              <p className="text-darkgreen text-sm font-medium">ID: {userData?.id}</p>
              <p className="text-darkgreen text-sm font-medium">Name: {userData?.name}</p>
              <p className="text-darkgreen text-sm font-medium">Email: {userData?.email}</p>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-beige bg-green hover:bg-maingreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
