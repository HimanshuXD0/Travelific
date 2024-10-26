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
    const handlePrev = () => {}
    const handleNext = () => {}
    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>YOUR BOOKINGS </h1>
            <div className={styles.buttonContainer}>
            </div>
            <div>
                <ul className={styles.productList}>
                    {products && products.map((item, index) => (
                        <li key={index} className={styles.productListItem}>
                            <span> firstname : {item.firstname}</span> 
                            <span>lastname: {item.lastname}</span>
                            <span>vehicle: {item.vehicle}</span>
                            <span>destination: {item.destination}</span>
                            <span> startingPoint: {item.startingPoint}</span>
                            <span>email: {item.useremail}</span>
                            <span> budget: {item.budget}</span>
                            <br/>
                            <br/>
                        </li>
                        
                    ))}
                </ul>
                 
                {/* <div>
                    <button className={styles.navButton} onClick={handlePrev}>Prev</button>
                    <button className={styles.navButton} onClick={handleNext}>Next</button>
                </div> */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default MyBookings