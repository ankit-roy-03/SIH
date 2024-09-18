import React from 'react';

const payments = [
  { id: 1, amount: 1000, status: 'Completed', date: '2024-09-01' },
  { id: 2, amount: 500, status: 'Pending', date: '2024-09-05' },
  { id: 3, amount: 750, status: 'Failed', date: '2024-09-10' },
];

const TimelyPayment = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Timely Payments</h2>
      <table className="w-full bg-gray-100 border border-gray-300 rounded-lg">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="p-3 text-left">Payment ID</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-b border-gray-200">
              <td className="p-3">{payment.id}</td>
              <td className="p-3">${payment.amount}</td>
              <td className={`p-3 ${getStatusColor(payment.status)}`}>{payment.status}</td>
              <td className="p-3">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to determine status color
const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-green-600';
    case 'Pending':
      return 'text-yellow-600';
    case 'Failed':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export default TimelyPayment;
