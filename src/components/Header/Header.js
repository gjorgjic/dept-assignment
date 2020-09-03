import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink } from '../Links/PageLinks';
import { FacebookLink, TwitterLink, InstagramLink, LinkedInLink } from '../Links/SocialLinks';
import { CenteredContent } from '../../assets/globalStyles';
import './Header.css';
import './Header.scss';

const FlexCenteredContent = styled(CenteredContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0E0E0E;
    padding: 0 !important;
    z-index: 99;

    header.page-scrolled & {
        border: none;
    }
`;

function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPageScrolled, setIsPageScrolled] = useState(false);

    const onWindowScroll = () => {
        var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if(scrollTop === 0) {
            setIsPageScrolled(false)
        } else {
            setIsPageScrolled(true)
        }
        console.log('scrollTop', scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll)
        return () => {
            window.removeEventListener('scroll', onWindowScroll)
        }
    }, [isPageScrolled])
    
    const onMenuClick = (event) => {
        if(isMenuOpen) {
            event.currentTarget.classList.remove('open');
        } else {
            event.currentTarget.classList.add('open');
        }
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={isPageScrolled ? 'page-scrolled' : ''}>
            <FlexCenteredContent>
                <LogoLink />

                <div className="menu">
                    <span className="hamburger" onClick={onMenuClick}>Menu</span>
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
                                <HomeLink />
                            </li>
                            <li>
                                <WerkLink />
                            </li>
                            <li>
                                <OverLink />
                            </li>
                            <li>
                                <DientsenLink />
                            </li>
                            <li>
                                <PartnersLink />
                            </li>
                            <li>
                                <VacaturesLink />
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
            </FlexCenteredContent>
        </header>
    )
}

export default Header
