import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import EventCard from './components/EventCard';
import Login from './components/Login';
// Important: Ensure this path matches where you put App.css
import './components/styles/App.css'; 

export default function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole')); 
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : []; 
  });
  
  const [formData, setFormData] = useState({ title: '', date: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('userRole', userRole || '');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [events, userRole, isDarkMode]);

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

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('userRole');
  };

  if (!userRole) return <Login onLogin={setUserRole} />;

  return (
    <div className="app-container">
      <Navbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        onLogout={handleLogout}
      />

      <button className="sort-btn" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Date: {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
      </button>

      {userRole === 'admin' && (
        <form className="event-form" onSubmit={handleSave}>
          <h3>{editingId ? "Edit Event" : "Create New Event"}</h3>
          <input placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          <button type="submit" className="save-btn">{editingId ? "Update Event" : "Save Event"}</button>
        </form>
      )}

      <div className="event-grid">
        {events
          .filter(ev => ev.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .sort((a, b) => sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
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