import React from 'react';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink } from './Links/PageLinks';
import { FacebookLink, TwitterLink, InstagramLink, LinkedInLink } from './Links/SocialLinks';

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
                            <FacebookLink />
                        </li>
                        <li>
                            <TwitterLink />
                        </li>
                        <li>
                            <InstagramLink />
                        </li>
                        <li>
                            <LinkedInLink />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
