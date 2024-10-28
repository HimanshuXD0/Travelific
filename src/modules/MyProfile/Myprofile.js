import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../MyProfile/MyProfile.Module.css'
import { handleSuccess } from '../../utils/utils';
function MyProfile() {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userInfo');
         handleSuccess('User Loggedout')
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    return (
        <div className="profile-container">
        <h2 className="profile-title">Your Profile</h2>
        <div className="profile-card">
          <div className="profile-item">
            <label>Name:</label>
            <span>{userInfo?.name}</span>
          </div>
          <div className="profile-item">
            <label>Email:</label>
            <span>{userInfo?.email}</span>
          </div>
          <div className="profile-item">
            <label>Mobile:</label>
            <span>{userInfo?.mobile}</span>
          </div>
          <div className="profile-item">
            <label>City:</label>
            <span>{userInfo?.city}</span>
          </div>
          <div className="profile-item">
            <label>State:</label>
            <span>{userInfo?.state}</span>
          </div>
               <button className="action-Button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    )
}

export default MyProfile