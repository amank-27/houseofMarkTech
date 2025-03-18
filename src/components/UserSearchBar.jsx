import React, { useState } from 'react';

const UserSearchBar = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-4 text-lg border-2 border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
      />
      <ul className="mt-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="text-gray-300 py-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearchBar;
