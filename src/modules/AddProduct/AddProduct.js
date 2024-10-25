import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils/utils';
import networkService from '../../services/networkService';
import { createHeaders } from '../../utils/createHeaders';
import styles from '../AddProduct/.AddProduct.module.css'; // Adjust path if needed
import { useDispatch } from 'react-redux';
import { addProductRequest } from './store/addproduct.slice';


function AddProduct() {

    const [prodInfo, setProdInfo] = useState({
        name: '',
        price: ''
    })
    const dispatch = useDispatch();
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
        dispatch(addProductRequest({name,price,navigate}))
    }
    return (
        <div className={styles.container}>
        <h1>Book Your Trip</h1>
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