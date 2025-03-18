import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import UserSearchBar from './components/UserSearchBar';
import { fetchUsers } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    loadUsers();
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Header />
      <HeroSection />
      <ServiceCard /> {/* ServiceCard component to display services */}
      <div className="container mx-auto px-6 py-8">
        <UserSearchBar users={users} />
        <PricingTable />
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
