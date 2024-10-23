// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../Authentication/store/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';
import { ToastContainer } from 'react-toastify';
import { handleError } from '../../utils/utils';

function Login(){
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = () => navigate('/signup')    

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        dispatch(loginRequest({ email, password, navigate }));
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={loginInfo.password}
                    />
                </div>
                <button type='submit' className={styles.loginButton}>Login</button>
                <button onClick={handleSignup} className={styles.loginButton}>Signup</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;
