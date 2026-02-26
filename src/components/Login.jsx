import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Email Format Check (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!username.trim()) return alert("Please enter your name!");
    if (!emailRegex.test(email)) return alert("Invalid Email format (e.g. name@gmail.com)!");
    if (password.length < 6) return alert("Password must be at least 6 characters!");

    // 2. Logic: Agar naam mein 'admin' hai toh admin role, warna user
    const role = username.toLowerCase().includes('admin') ? 'admin' : 'user';
    
    onLogin(role, username);
  };

  return (
    <div className="login-container" style={{ textAlign: 'center', marginTop: '80px' }}>
      <form onSubmit={handleLogin} className="event-form" style={{ margin: 'auto' }}>
        <h2>Event Manager Login</h2>
        <input 
          placeholder="Enter Full Name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Enter Gmail (e.g. user@gmail.com)" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password (Min 6 chars)" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="save-btn">Login / Register</button>
        <p style={{fontSize: '0.8rem', color: '#666', marginTop: '10px'}}>
          Hint: Use "Admin" in name for admin access.
        </p>
      </form>
    </div>
  );
}