import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import RegistrationForm from './components/pages/RegistrationForm';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/Dashboard.js/Dashboard';
import UserProfile from './components/Dashboard.js/UserProfile'
import ListProduct from './components/ListProduct/ListProduct';
import Buyer from './components/pages/product';   
import BuyProduct from './components/ListProduct/BuyProduct';
import ContractNegotiation from './components/ListProduct/ContractNegotiation';
import SecureContract from './components/ListProduct/securecontract';
import AboutUs from './components/pages/AboutUs';
import TimelyPayment from './components/pages/TimelyPayment';
import AdminPanel from './components/pages/AdminPanel';
import Contact from './components/pages/contact';


function App() {
  return (
    <Router>
      <div>
        {/* Navbar included here */}
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboard and its components */}
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/Buyer" element={<Buyer />} />
          <Route path="/BuyProduct" element={<BuyProduct />} />
          <Route path="/ContractNegotiation" element={<ContractNegotiation />} />
          <Route path="/SecureContract" element={<SecureContract />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TimelyPayment" element={<TimelyPayment/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/AdminPanel" element={<AdminPanel/>} />
          
          
          {/*
        */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;