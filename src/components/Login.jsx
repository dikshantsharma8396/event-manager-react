import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy Authentication Logic
    if (username === 'admin' && password === 'admin123') {
      onLogin('admin');
    } else if (username === 'user' && password === 'user123') {
      onLogin('user');
    } else {
      alert("Invalid Credentials! Try admin/adminpass or user/user123");
    }
  };

  return (
    <div className="login-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit} className="event-form" style={{ margin: 'auto' }}>
        <h2>Login</h2>
        <input 
          placeholder="Username (admin or user)" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="save-btn">Login</button>
      </form>
    </div>
  );
}