import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils/utils';
import networkService from '../../services/networkService';
import { createHeaders } from '../../utils/createHeaders';
import styles from '../AddProduct/.AddProduct.module.css'; // Adjust path if needed


function AddProduct() {

    const [prodInfo, setProdInfo] = useState({
        name: '',
        price: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyProdInfo = { ...prodInfo};
        copyProdInfo[name] = value;      // here name contains "name" that are comming from e
        setProdInfo(copyProdInfo);
    }

    const handleAddProd = async (e) => {
        e.preventDefault();
        const { name,price } = prodInfo;
        if (!name || !price) {
            return handleError('name,and price are required')
        }
        try {
            const url = `https://travelific-api.onrender.com/api/items`;
            const body = JSON.stringify(prodInfo)
            const token=localStorage.getItem('token')
            const response = await networkService.post({url:url,body:body,headers:{
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }})
            const result = response.data;
            const { success, message, error } = result;
            console.log(success);
            if (success) {
                handleSuccess(`${message}`);
                setTimeout(() => {
                    navigate('/dashboard')
                },5000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(`${message}`);
            }
            //console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className={styles.container}>
        <h1>Add Product</h1>
        <form onSubmit={handleAddProd}>
            <div className={styles.inputGroup}>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter product name...'
                    value={prodInfo.name}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor='price'>Price</label>
                <input
                    onChange={handleChange}
                    type='number'
                    name='price'
                    placeholder='Enter product price...'
                    value={prodInfo.price}
                />
            </div>
            <button type='submit' className={styles.authButton}>
                Upload
            </button>
            <span className={styles.authLink}>
                <Link to="/dashboard">Back</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
    )
}

export default AddProduct