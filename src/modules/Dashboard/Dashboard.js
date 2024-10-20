import React from 'react';
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/women.png'; // with import

function Dashboard() {
    const navigate = useNavigate();
    const handleAddProd = (e) => {
        setTimeout(() => {
            navigate('/addproduct');
        }, 1000)
    }
    const handleOnHome = (e) => {
        setTimeout(() => {
            navigate('/home');
        }, 1000)
    }
    return (
        <div lang="en">
            <nav>
                <ul className="nav__links">
                    <li className="link"><a href="#" onClick={handleAddProd}>HOME</a></li>
                    <li className="link"><a href="#"onClick={handleOnHome}>ABOUT US</a></li>
                    <li className="link"><a href="#">E-TICKET</a></li>
                    <li className="link"><a href="#">JOURNEY</a></li>
                    <li className="link"><a href="#">CONTACT</a></li>
                </ul>
            </nav>

            <div className="container">
                <div className="container__left">
                    <div className="left__content">
                        <h4>Best guide for you</h4>
                        <p>
                            Our team of experts has scoured a collection of handpicked
                            destinations and insider tips to ensure your journey is
                            extraordinary.
                        </p>
                    </div>
                </div>
                <div className="container__right">
                    <img src={logo} alt="women" />
                    <div className="right__content">
                        <h1>ENJOY</h1>
                        <h4>Travelling moment</h4>
                        <p>
                            Welcome to our travel website, where we pride ourselves on being the
                            best guide for you in your wanderlust adventures. Whether you're
                            seeking sun-soaked beaches or thrilling outdoor escapades, we've
                            got you covered.
                        </p>
                        <div className="action__btns">
                            <button className="btn primary__btn">Explore</button>
                            <button className="btn secondary__btn">See More</button>
                        </div>
                        <div className="socials">
                            <span><i className="ri-instagram-line"></i></span>
                            <span><i className="ri-twitter-fill"></i></span>
                            <span><i className="ri-facebook-fill"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;