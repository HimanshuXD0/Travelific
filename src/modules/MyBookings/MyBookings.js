import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils/utils';
import { ToastContainer } from 'react-toastify';
import networkService from '../../services/networkService';
import { createHeaders } from '../../utils/createHeaders';
import styles from "./MyBookings.module.css"
import { useDispatch } from 'react-redux';
import { myBookingsRequest } from './store/myBookingsSlice';
import { useSelector } from 'react-redux';
function MyBookings() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(myBookingsRequest())
    }, [])

    const products = useSelector((state) => state.mybookings.bookingsInfo);
    console.log(products)
    const handlePrev = () => { }
    const handleNext = () => { }
    return (
        <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeTitle}>YOUR BOOKINGS</h1>
        <ul className="ticket-card">
            {products && products.map((item, index) => (
                <li key={index} className={styles.productListItem}>
                    <div className={styles.directionRow}>
                        <span>{item.startingPoint}</span>
                        <span className={styles.directionArrow}>→</span>
                        <span>{item.destination}</span>
                    </div>
                    <div className={styles.ticketDetails}>
                        <div className={styles.ticketItem}>
                            <label>First Name:</label>
                            <span>{item.firstname}</span>
                        </div>
                        <div className={styles.ticketItem}>
                            <label>Last Name:</label>
                            <span>{item.lastname}</span>
                        </div>
                        <div className={styles.ticketItem}>
                            <label>Vehicle:</label>
                            <span>{item.vehicle}</span>
                        </div>
                        <div className={styles.ticketItem}>
                            <label>Budget:</label>
                            <span>{item.budget}</span>
                        </div>
                        <div className={styles.ticketItem}>
                            <label>Email:</label>
                            <span>{item.useremail}</span>
                        </div>
                        <div className={styles.ticketItem}>
                            <label>Phone Number:</label>
                            <span>{item.contactNumber}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default MyBookings