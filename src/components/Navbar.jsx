import React from 'react';

export default function Navbar({ userName, searchTerm, setSearchTerm, isDarkMode, setIsDarkMode, onLogout, userRole }) {
  return (
    <nav className="navbar" style={{
      width: '100%',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
      marginBottom: '20px'
    }}>
      <div>
        <h2 style={{ margin: 0 }}>EventHub</h2>
        <span style={{ fontSize: '0.9rem', color: '#007bff' }}>
          Welcome, <strong>{userName}</strong> ({userRole})
        </span>
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search events..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-btn">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        <button onClick={onLogout} style={{
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
}