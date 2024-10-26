import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addProductRequest } from './store/addproduct.slice';
import styles from './.AddProduct.module.css';
import { handleError } from '../../utils/utils';

function AddProduct() {
    const [prodInfo, setProdInfo] = useState({
        firstname: '',
        lastname: '',
        startingPoint: '',
        destination: '',
        budget: '',
        vehicle: '',
        contactNumber: '',
        whatsAppNumber: '',
        useremail: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdInfo({ ...prodInfo, [name]: value });
    };

    const handleAddProd = async (e) => {
        e.preventDefault();
        const { firstname,
            lastname,
            startingPoint,
            destination,
            budget,
            vehicle,
            contactNumber,
            whatsAppNumber,
            useremail } = prodInfo;
        if (!firstname || !lastname || !useremail || !startingPoint || !destination || !budget || !vehicle || !contactNumber || !whatsAppNumber) {
            return handleError('Name and price are required');
        }
       // console.log(prodInfo)
        dispatch(addProductRequest({ ...prodInfo, navigate }));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Book Your Trip</h1>
            <form onSubmit={handleAddProd} className={styles.form}>
                <row className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='firstname'>First Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='firstname'
                            autoFocus
                            placeholder='Enter your first name...'
                            value={prodInfo.firstname}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='lastname'>Last Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='lastname'
                            autoFocus
                            placeholder='Enter your last name...'
                            value={prodInfo.lastname}
                        />
                    </div>
                </row>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='startingPoint'>Starting Point</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='startingPoint'
                            placeholder='Enter starting point...'
                            value={prodInfo.startingPoint}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='destination'>Destination</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='destination'
                            placeholder='Enter destination...'
                            value={prodInfo.destination}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='budget'>Budget</label>
                        <select
                            onChange={handleChange}
                            name='budget'
                            value={prodInfo.budget}
                        >
                            <option value=''>-- Select Budget --</option>
                            <option value='<5000'>Below 5000</option>
                            <option value='5000-10000'>5000 to 10000</option>
                            <option value='>10000'>Above 10000</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor='vehicle'>Vehicle</label>
                        <select
                            onChange={handleChange}
                            name='vehicle'
                            value={prodInfo.vehicle}
                        >
                            <option value=''>-- Select Vehicle --</option>
                            <option value='xuv'>XUV</option>
                            <option value='suv'>SUV</option>
                            <option value='sedan'>Sedan</option>
                        </select>
                    </div>
                </div>



                <div className={styles.inputGroup}>
                    <label htmlFor='contactNumber'>Contact Number</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='contactNumber'
                        placeholder='Enter contact number...'
                        value={prodInfo.contactNumber}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor='whatsAppNumber'>WhatsApp Number</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='whatsAppNumber'
                        placeholder='Enter WhatsApp number...'
                        value={prodInfo.whatsAppNumber}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor='useremail'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='useremail'
                        placeholder='Enter your email...'
                        value={prodInfo.useremail}
                    />
                </div>

                <button type='submit' className={styles.authButton}>
                    Book Appointment
                </button>
                <span className={styles.authLink}>
                    <Link to="/dashboard">Back</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default AddProduct;
