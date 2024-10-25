import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefrshHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            if (location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ) {
                navigate('/dashboard', { replace: false });
            }
        }
        // else{
        //     navigate('/dashboard', { replace: false });
        // }
    }, [location, navigate])

    return (
        null
    )
}

export default RefrshHandler