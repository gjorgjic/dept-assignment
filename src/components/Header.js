import React from 'react';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink } from './Links';


function Header() {
    return (
    
        <header>
            {LogoLink}

            <div className="menu">
                <span className="hamburger">Menu</span>
                <div className="menu-content">
                    <div className="language">
                        <span className="title">Landen</span>
                        <ul>
                            <li>
                                <a href="/#">Global</a>
                            </li>
                            <li>
                                <a href="/#">Nederland</a>
                            </li>
                            <li>
                                <a href="/#">United States</a>
                            </li>
                            <li>
                                <a href="/#">Ireland</a>
                            </li>
                            <li>
                                <a href="/#">United Kingdom</a>
                            </li>
                            <li>
                                <a href="/#">Deutschland</a>
                            </li>
                            <li>
                                <a href="/#">Schweiz</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="menu-links">
                        <li>
                            {HomeLink}
                        </li>
                        <li>
                            {WerkLink}
                        </li>
                        <li>
                            {OverLink}
                        </li>
                        <li>
                            {DientsenLink}
                        </li>
                        <li>
                            {PartnersLink}
                        </li>
                        <li>
                            {VacaturesLink}
                        </li>
                    </ul>

                    <ul className="social-links">
                       <li>
                           <a href="/#">Facebook</a>
                        </li>
                       <li>
                           <a href="/#">Twitter</a>
                        </li>
                       <li>
                           <a href="/#">Instagram</a>
                        </li>
                       <li>
                           <a href="/#">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
