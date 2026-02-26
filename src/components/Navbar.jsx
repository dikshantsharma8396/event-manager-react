import React from 'react';

export default function Navbar({ searchTerm, setSearchTerm, isDarkMode, setIsDarkMode, onLogout }) {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #555',
      marginBottom: '20px',
      flexWrap: 'wrap', // Responsive UI: Wraps on small screens
      gap: '10px'
    }}>
      <h2>Dashboard</h2>
      
      {/* Bonus: Search Functionality */}
      <input 
        type="text"
        placeholder="Search title..." 
        value={searchTerm}
        style={{ flex: '1', minWidth: '200px', padding: '8px' }}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Bonus: Dark Mode */}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button onClick={onLogout} style={{ backgroundColor: '#ff4444', color: 'white' }}>
          Logout
        </button>
      </div>
    </nav>
  );
}