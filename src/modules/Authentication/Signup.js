// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../Authentication/store/signUpSlice';
import { handleError, handleSuccess } from '../../utils/utils';
import styles from './AuthForm.module.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        state: '',
        city: '',
        mobile: '',
    });

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const { name, email, password, city, state, mobile } = signupInfo;

        if (!name || !email || !password || !city || !state || !mobile) {
            return handleError('All fields are required');
        }
        dispatch(signupRequest({...signupInfo,navigate})); // Dispatch the signup request
    };

    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div className={styles.inputGroup}>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                    />
                </div>
                <div className={styles.dropdown}>
                    <label htmlFor='state'>State</label>
                    <select
                        onChange={handleChange}
                        name='state'
                        autoFocus
                        value={signupInfo.state}
                    >
                        <option value="" disabled>Select your state...</option>
                        {[
                            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
                            'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
                            'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
                            'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
                            'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
                            'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
                            'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
                            'Delhi', 'Puducherry'
                        ].map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor='city'>City</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='city'
                        autoFocus
                        placeholder='Enter your city...'
                        value={signupInfo.city}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='mobile'>Contact Number</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='mobile'
                        autoFocus
                        placeholder='Enter your contact number...'
                        value={signupInfo.mobile}
                    />
                </div>
                <button type='submit' className={styles.authButton}>
                    {'Signup'}
                </button>
                <span className={styles.authLink}>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;
