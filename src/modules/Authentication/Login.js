import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils/utils';
import networkService from '../../services/networkService';
import styles from './AuthForm.module.css';

let myProfileInfo;
function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
     

    const navigate = useNavigate();

       const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `http://localhost:5000/api/auth/signin`;
            const body = JSON.stringify(loginInfo);
            const response = await networkService.post({url:url,body:body,headers:{
                'Content-Type': "application/json",
            }})
            const result = response.data
            myProfileInfo = result
            const { success, message, token, name, error } = response.data;
            console.log(`Your toku value -----> ${token}`);        
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            //console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

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
            <button type='submit' className={styles.loginButton}>
                Login
            </button>
            <span className={styles.signupLink}>
                Doesn't have an account? <Link to="/signup">Signup</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
    )
}

export default Login
export  {myProfileInfo}