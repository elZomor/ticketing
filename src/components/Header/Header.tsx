import React, {useEffect, useState} from "react";
import './header.css';
import {BASE_URL} from "../../constants.ts";

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const handleLogin = () => {
        window.location.href = `${BASE_URL}/accounts/google/login/`;
    };
    const handleLogout = () => {
        window.location.href = `${BASE_URL}/auth/logout`;
    };

    useEffect(() => {
        // Function to read cookies
        const getCookie = (name: string): string | null => {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? decodeURIComponent(match[2]) : null;
        };


        // Get cookies for is_logged_in and user
        const loggedIn = getCookie('is_logged_in');
        const user = getCookie('user');
        setIsLoggedIn(loggedIn === 'true');
        setUsername(user || '')

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