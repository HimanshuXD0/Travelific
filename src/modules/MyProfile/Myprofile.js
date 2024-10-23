import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import styles from '../HomeScreen/Home.module.css'
function MyProfile() {
    const userInfo = useSelector((state) => state.auth.userInfo);
    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome to Your Profile</h1>
            <div>
                <h2>Profile Information</h2><br/>
                <p><strong>Name:</strong> {userInfo.name}</p><br/>
                <p><strong>Email:</strong> {userInfo.email}</p><br/>
                <p><strong>Mobile:</strong> {userInfo.mobile}</p><br/>
                <p><strong>State:</strong> {userInfo.state}</p><br/>
                <p><strong>City:</strong> {userInfo.city}</p><br/>
                <p><strong>Message:</strong> {userInfo.message}</p><br/>
                <p><strong>Success:</strong> {userInfo.success ? 'Yes' : 'No'}</p><br/>
                 {/* <p><strong>Token:</strong> {userInfo.token}</p><br/> */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default MyProfile