import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import Login from './components/Login';
import './components/styles/App.css';

export default function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({ title: '', date: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('userRole', userRole || '');
    localStorage.setItem('userName', userName || '');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [events, userRole, userName, isDarkMode]);

  const handleLogin = (role, name) => {
    setUserRole(role);
    setUserName(name);
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserName("");
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return alert("Title and Date are required!");
    if (editingId) {
      setEvents(events.map(ev => ev.id === editingId ? { ...formData, id: editingId } : ev));
      setEditingId(null);
    } else {
      setEvents([...events, { ...formData, id: Date.now() }]);
    }
    setFormData({ title: '', date: '', description: '' });
  };

  if (!userRole) return <Login onLogin={handleLogin} />;

  return (
    <div className="app-container">
      <Navbar 
        userName={userName}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onLogout={handleLogout}
        userRole={userRole}
      />

      {userRole === 'admin' && (
        <form className="event-form" onSubmit={handleSave}>
          <h3>{editingId ? "Edit Event" : "Create New Event"}</h3>
          <input placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          <button type="submit" className="save-btn">{editingId ? "Update" : "Save"}</button>
        </form>
      )}

      <div className="event-grid">
        {events
          .filter(ev => ev.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(ev => (
            <EventCard 
              key={ev.id} 
              event={ev} 
              userRole={userRole}
              onEdit={(item) => {setEditingId(item.id); setFormData(item)}}
              onDelete={(id) => setEvents(events.filter(e => e.id !== id))}
              isDarkMode={isDarkMode}
            />
          ))}
      </div>
    </div>
  );
}