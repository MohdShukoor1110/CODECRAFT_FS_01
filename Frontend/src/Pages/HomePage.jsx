import React, { useState, createContext, useContext } from 'react';
import NavBar from '../Components/NavBar';
import Welcome from '../Components/Welcome';
import WelcomeDefault from '../Components/WelcomeDefault';
import { AppContext } from '../Context/Context';
import { toast } from 'react-toastify';

function HomePage() {
    const { loggedInUser, setLoggedInUser } = useContext(AppContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedInUser(null);
        toast.info('Logged out Successfully');
    }

    return (
        <div>
            <NavBar handleLogout={handleLogout} />
            { loggedInUser ? <Welcome loggedInUser={loggedInUser} handleLogout={handleLogout} /> : <WelcomeDefault /> }
        </div>
    )
}

export default HomePage