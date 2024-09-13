import React, {useEffect, useState} from "react";
import './header.css';
import {BASE_URL} from "../../constants.ts";
import Cookies from 'js-cookie';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [username, setUsername] = useState('');
    const handleLogin = () => {
        window.location.href = `${BASE_URL}/accounts/google/login/`;
    };
    const handleLogout = () => {
        window.location.href = `${BASE_URL}/auth/logout`;
    };

    useEffect(() => {
        console.log("UseEffect")
        console.log(Cookies)
        console.log(Cookies.get('is_logged_in'))
        setIsLoggedIn(Cookies.get('is_logged_in') === 'true');
        setUsername(Cookies.get('user') || '')
        console.log("Set")
    }, []);
    return <header className="header">
        <div className="header-content">
            <h2 className="header-title">Welcome to EG-Theater</h2>
            {isLoggedIn ? (
                <div className="logged-in-container">
                    <p>Welcome, {username}</p>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin} className="login-button">Login with Google</button>
            )}
        </div>
    </header>
}

export default Header;