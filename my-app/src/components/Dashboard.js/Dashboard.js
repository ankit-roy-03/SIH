import React, { useEffect, useState } from 'react';
import { fetchNotifications, fetchContracts, fetchAnalytics } from '../../api';

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notificationsData = await fetchNotifications();
        const contractsData = await fetchContracts();
        const analyticsData = await fetchAnalytics();
        setNotifications(notificationsData);
        setContracts(contractsData);
        setAnalytics(analyticsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-beige p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-darkgreen">
          <h2 className="text-2xl font-bold text-darkgreen mb-4">Profile Overview</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-darkgreen"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-darkgreen">John Doe</h3>
              <p className="text-gray-600">Email: johndoe@example.com</p>
              <p className="text-gray-600">Role: Farmer</p>
            </div>
          </div>
          <button className="bg-green text-white px-4 py-2 rounded hover:bg-darkgreen transition">Edit Profile</button>
        </div>

        {/* Contract Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-darkgreen">
          <h2 className="text-2xl font-bold text-darkgreen mb-4">Contract Management</h2>
          {contracts.length === 0 ? (
            <p className="text-gray-600">No contracts found.</p>
          ) : (
            <ul>
              {contracts.map((contract) => (
                <li key={contract.id} className="border-b border-gray-300 py-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-darkgreen">{contract.title}</h3>
                    <a href={`/contracts/${contract.id}`} className="text-green hover:underline">
                      View Details
                    </a>
                  </div>
                  <p className="text-gray-600">{contract.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Market Analytics */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-darkgreen">
          <h2 className="text-2xl font-bold text-darkgreen mb-4">Market Analytics</h2>
          {analytics.length === 0 ? (
            <p className="text-gray-600">No analytics data available.</p>
          ) : (
            <div>
              {/* Replace this section with actual data visualization */}
              <p className="text-gray-600">Price Trends: [Graph or chart]</p>
              <p className="text-gray-600">Demand Forecasts: [Graph or chart]</p>
            </div>
          )}
        </div>

        {/* Notification Center */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-darkgreen">
          <h2 className="text-2xl font-bold text-darkgreen mb-4">Notification Center</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-600">No new notifications.</p>
          ) : (
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id} className="border-b border-gray-300 py-2">
                  <p className="text-darkgreen font-semibold">{notification.title}</p>
                  <p className="text-gray-600">{notification.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
