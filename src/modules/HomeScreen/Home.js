import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils/utils';
import { ToastContainer } from 'react-toastify';
import networkService from '../../services/networkService';
import { createHeaders } from '../../utils/createHeaders';
import styles from "./Home.module.css"

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    let [page, setPage] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }
    const handleAddProd = (e) => {
        setTimeout(() => {
            navigate('/addproduct');
        }, 1000)
    }

    const fetchProducts = async (page) => {
        try {
            const url = `https://travelific-api.onrender.com/api/items`;
            const token=localStorage.getItem('token')
            const response = await networkService.get({url:url,queryParams:{'page':page},headers:{
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }})
            const result = response.data;
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
     const handlePrev = ()=>{

         console.log(`page by --> prev ${page}`)
         if(page>=1){
            page--;
            fetchProducts(page)
         }
            setPage(page);
     }
     const handleNext = ()=>{
        console.log(`page by --> next ${page}`)
        
        if(page<=10){
            fetchProducts(page)
            page++;}
        setPage(page);
     }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeTitle}>Welcome {loggedInUser}</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.actionButton} onClick={handleLogout}>Logout</button>
                <button className={styles.actionButton} onClick={handleAddProd}>Add Product</button>
            </div>
            <div>
                <ul className={styles.productList}>
                    {products && products.map((item, index) => (
                        <li key={index} className={styles.productListItem}>
                            <span>{item.name} : {item.price}</span>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className={styles.navButton} onClick={handlePrev}>Prev</button>
                    <button className={styles.navButton} onClick={handleNext}>Next</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home