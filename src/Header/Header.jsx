import React, { useState } from "react";
import logo from "../assets/logo.svg";
import GamburgerMenu from "./GamburegerMenu";
import { linksDesktop } from "./listLinks";

function Header() {
    let gambList;
    const [state, setState] = useState({ isGaumbOpen: false });

    const handleClick = () => {
        if (!state.isGaumbOpen) {
            document.body.style.overflowY = "hidden";
            gambList.style.transition = "0.3s";
            gambList.style.height = "100vh";
            setState({ isGaumbOpen: true });
        } else {
            document.body.style.overflowY = "visible";
            gambList.style.transition = "0.3s";
            gambList.style.height = "0";
            setState({ isGaumbOpen: false });
        }
    };
    return (
        <header className="section header">
            <div className="container header-container">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="header-nav">
                    {linksDesktop.map(({ link, text }) => (
                        <li className="header-nav__item">
                            <a className="header-nav__link" href={link}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={handleClick} className="gamburger">
                    <div className="gamburger-btn"></div>
                </button>
            </div>
            <div onClick={handleClick} ref={el => (gambList = el)} className="gamburger-menu">
                <div className="gamburger-menu__substrate">
                    <GamburgerMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
/**/
