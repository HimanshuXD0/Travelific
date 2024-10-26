import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function BookingConfirmation() {

const navigate = useNavigate()
  const handleclick = (e) => {
    setTimeout(() => {
        navigate('/mybookings');
    }, 1000)
}
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#00292b' // light gray background for the whole screen
    }}>
      <div style={{
        width: '60vw', // Approximately 20% margin on each side horizontally
        maxWidth: '500px', // Limit max width for larger screens
        padding: '40px', // Add padding inside the container
        backgroundColor: '#f5f5f5', // Inner container background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
        borderRadius: '8px', // Rounded corners
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>BOOKING CONFIRMED</h1>
        
        <a href="#" style={{ color: '#666' }} onClick={handleclick}>See all your bookings here </a>
      </div>
    </div>
  );
}

export default BookingConfirmation;
