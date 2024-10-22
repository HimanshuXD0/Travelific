import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
// import { myProfileInfo } from '../Authentication/Login';
import styles from '../HomeScreen/Home.module.css'
function MyProfile() {
    //console.log('Profile Info:', myProfileInfo);
    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome to Your Profile</h1>
            <div>
                <h2>Profile Information</h2><br/>
                {/* <p><strong>Name:</strong> {myProfileInfo.name}</p><br/>
                <p><strong>Email:</strong> {myProfileInfo.email}</p><br/>
                <p><strong>Mobile:</strong> {myProfileInfo.mobile}</p><br/>
                <p><strong>State:</strong> {myProfileInfo.state}</p><br/>
                <p><strong>City:</strong> {myProfileInfo.city}</p><br/>
                <p><strong>Message:</strong> {myProfileInfo.message}</p><br/>
                <p><strong>Success:</strong> {myProfileInfo.success ? 'Yes' : 'No'}</p><br/> */}
                {/* <p><strong>Token:</strong> {myProfileInfo.token}</p><br/> */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default MyProfile