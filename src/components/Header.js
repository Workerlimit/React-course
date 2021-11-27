import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
  
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/friends">Friends</Link>
                            </li>
                        </ul> 
                    </div>
                    <div className="action-btns">
                        <Link to="/login">
                            <button className="btn btn--login">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;