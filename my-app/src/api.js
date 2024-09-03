// src/api.js

const BASE_URL = 'http://localhost:5000'; // or your backend server URL

export const fetchNotifications = async () => {
  const response = await fetch(`${BASE_URL}/notifications`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const fetchContracts = async () => {
  const response = await fetch(`${BASE_URL}/contracts`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const fetchAnalytics = async () => {
  const response = await fetch(`${BASE_URL}/analytics`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
