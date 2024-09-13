import React from "react";
import './header.css';
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";


const Header: React.FC = () => {
    return <header className="header">
        <div className="header-content">
            <h2 className="header-title">Welcome to EG-Theater</h2>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </header>
}

export default Header;