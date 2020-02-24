import React from "react";
import { linksPhones } from "./listLinks";

function GamburgerMenu() {
    return (
        <>
            <div className="gamburger-menu__logo"></div>
            <div className="gamburger-menu__main gamb-container">
                <ul className="gamburger-menu__list">
                    {linksPhones.oneBlock.map(({ link, text }) => (
                        <li className="header-nav__item">
                            <a className="header-nav__link" href={link}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="gamburger-menu__list gamb-container gamburger-menu__list_middle ">
                    {linksPhones.twoBlock.map(({ link, text }) => (
                        <li className="header-nav__item">
                            <a className="header-nav__link" href={link}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="gamburger-menu__list gamb-container  ">
                    {linksPhones.threeBlock.map(({ link, text }) => (
                        <li className="header-nav__item">
                            <a className="header-nav__link" href={link}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default GamburgerMenu;
