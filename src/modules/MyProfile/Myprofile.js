import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../MyBookings/MyBookings.module.css'
import { handleSuccess } from '../../utils/utils';
function MyProfile() {
     
    const userInfo = useSelector((state) => state.auth.userInfo);
    const navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userEmail');
         handleSuccess('User Loggedout')
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome to Your Profile</h1>
            <div>
                <h2>Profile Information</h2><br/>
                <button className={styles.actionButton} onClick={handleLogout}>Logout</button>
                <p><strong>Name:</strong> {userInfo?.name||""}</p><br/>
                <p><strong>Email:</strong> {userInfo?.email||""}</p><br/>
                <p><strong>Mobile:</strong> {userInfo?.mobile||""}</p><br/>
                <p><strong>State:</strong> {userInfo?.state||""}</p><br/>
                <p><strong>City:</strong> {userInfo?.city||""}</p><br/>
                <p><strong>Message:</strong> {userInfo?.message||""}</p><br/>
                {/* <p><strong>Success:</strong> {userInfo?.success ? 'Yes' : 'No'}</p><br/> */}
                 {/* <p><strong>Token:</strong> {userInfo.token}</p><br/> */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default MyProfile