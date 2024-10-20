import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils/utils';
import { ToastContainer } from 'react-toastify';
import networkService from '../../services/networkService';
import { createHeaders } from '../../utils/createHeaders';

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
         page--;
         console.log(`page by --> prev ${page}`)
         if(page)fetchProducts(page)
            setPage(page);
     }
     const handleNext = ()=>{
        console.log(`page by --> next ${page}`)
        page++;
        if(page<=4)fetchProducts(page)
        setPage(page);
     }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
             <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout}>Logout</button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleAddProd}>Add Product</button>
            <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
                <button onClick={handlePrev}>Prev</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleNext}>Next</button> 
            </div>
            <ToastContainer /> 
        </div>
    )
}

export default Home