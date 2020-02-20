import React from "react";
import logo from "../assets/logo.svg";

function Header() {
    return (
        <header className="section header">
            <div className="container header-container">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="header-nav">
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="#">
                            About Me
                        </a>
                    </li>
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="#">
                            Relationships
                        </a>
                    </li>
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="#">
                            Requirements
                        </a>
                    </li>
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="#">
                            Users
                        </a>
                    </li>
                    <li className="header-nav__item">
                        <a className="header-nav__link" href="#">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
