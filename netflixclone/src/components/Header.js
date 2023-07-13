import React from "react";
import './Header.css';
import netlogo from '../img/nextfixLogo.png';
import userlogo from '../img/userlogo.jpg';
import searchicon from '../img/searchicon.png';


export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={netlogo}></img>
                </a>
            </div>
            <div className="header--right-icons">
                <div className="header--search">
                    <a href="/">
                        <img src={searchicon}></img>
                    </a>
                </div>
                <div className="header--user">
                    <a href="/">
                        <img src={userlogo}></img>
                    </a>
                </div>
            </div>
            
        </header>
    );
}