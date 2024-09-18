import React from 'react';

const AdminPanel = () => {
  return (
    <div className="bg-beige min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-darkgreen text-center mb-8">Admin Panel</h1>

        {/* User Management Section */}
        <div className="mb-10">
          <h2 className="text-2xl text-darkgreen font-semibold mb-4">User Management</h2>
          <table className="min-w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-green text-white">
                <th className="border border-gray-300 p-2 text-left">User ID</th>
                <th className="border border-gray-300 p-2 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">Role</th>
                <th className="border border-gray-300 p-2 text-left">Email</th>
                <th className="border border-gray-300 p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border border-gray-300 p-2">001</td>
                <td className="border border-gray-300 p-2">John Doe</td>
                <td className="border border-gray-300 p-2">Farmer</td>
                <td className="border border-gray-300 p-2">john@example.com</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">View</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">Edit</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded">Deactivate</button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="border border-gray-300 p-2">002</td>
                <td className="border border-gray-300 p-2">Jane Smith</td>
                <td className="border border-gray-300 p-2">Buyer</td>
                <td className="border border-gray-300 p-2">jane@example.com</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">View</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">Edit</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded">Deactivate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contract Management Section */}
        <div className="mb-10">
          <h2 className="text-2xl text-darkgreen font-semibold mb-4">Contract Management</h2>
          <table className="min-w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-green text-white">
                <th className="border border-gray-300 p-2 text-left">Contract ID</th>
                <th className="border border-gray-300 p-2 text-left">Farmer</th>
                <th className="border border-gray-300 p-2 text-left">Buyer</th>
                <th className="border border-gray-300 p-2 text-left">Status</th>
                <th className="border border-gray-300 p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border border-gray-300 p-2">C001</td>
                <td className="border border-gray-300 p-2">John Doe</td>
                <td className="border border-gray-300 p-2">Jane Smith</td>
                <td className="border border-gray-300 p-2">Active</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">View</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">Edit</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded">Terminate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Management Section */}
        <div>
          <h2 className="text-2xl text-darkgreen font-semibold mb-4">Payment Management</h2>
          <table className="min-w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-green text-white">
                <th className="border border-gray-300 p-2 text-left">Payment ID</th>
                <th className="border border-gray-300 p-2 text-left">Farmer</th>
                <th className="border border-gray-300 p-2 text-left">Amount</th>
                <th className="border border-gray-300 p-2 text-left">Status</th>
                <th className="border border-gray-300 p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border border-gray-300 p-2">P001</td>
                <td className="border border-gray-300 p-2">John Doe</td>
                <td className="border border-gray-300 p-2">$500</td>
                <td className="border border-gray-300 p-2">Completed</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded mr-2">View</button>
                  <button className="bg-green hover:bg-grassgreen text-white py-1 px-3 rounded">Refund</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
