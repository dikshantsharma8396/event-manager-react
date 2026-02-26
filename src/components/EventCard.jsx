import React from 'react';

export default function EventCard({ event, onEdit, onDelete, isDarkMode, userRole }) {
  return (
    <div className={`event-card ${isDarkMode ? 'dark' : 'light'}`} style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{event.title}</h3>
        <span style={{ fontSize: '0.85rem', color: isDarkMode ? '#aaa' : '#666' }}>
          📅 {event.date}
        </span>
      </div>

      <p style={{ margin: 0, fontSize: '0.95rem', flexGrow: 1 }}>
        {event.description || "No description provided."}
      </p>

      {/* Mandatory: Role-Based Access */}
      {userRole === 'admin' && (
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button 
            onClick={() => onEdit(event)} 
            style={{ 
              flex: 1, 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              padding: '8px', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(event.id)} 
            style={{ 
              flex: 1, 
              backgroundColor: '#dc3545', 
              color: 'white', 
              border: 'none', 
              padding: '8px', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}