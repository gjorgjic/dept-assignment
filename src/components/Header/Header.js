import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink, EventsLink } from '../Links/PageLinks';
import { FacebookLink, TwitterLink, InstagramLink, LinkedInLink } from '../Links/SocialLinks';
import { CenteredContent } from '../../assets/globalStyles';
import '../../assets/css/Header.scss';

const FlexCenteredContent = styled(CenteredContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0E0E0E;
    padding: 0 !important;
    z-index: 99;

    header.page-scrolled &,
    body.menu-open & {
        border: none;
    }
`;

function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPageScrolled, setIsPageScrolled] = useState(false);

    const onWindowScroll = () => {
        var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if(scrollTop === 0) {
            setIsPageScrolled(false);
        } else {
            setIsPageScrolled(true);

            let scrollTopLink = document.getElementById('linkTop');
            if(scrollTop > 400 && scrollTopLink.length !== -1) {
                scrollTopLink.style.visibility = "visible";
                scrollTopLink.style.opacity = 1;
            } else {
                scrollTopLink.style.visibility = "hidden";
                scrollTopLink.style.opacity = "0";
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll)
        return () => {
            window.removeEventListener('scroll', onWindowScroll)
        }
    }, [isPageScrolled])
    
    const onMenuClick = (event) => {
        if(isMenuOpen) {
            event.currentTarget.parentNode.classList.remove('open');
            document.querySelector('body').classList.remove('menu-open');
        } else {
            event.currentTarget.parentNode.classList.add('open');
            document.querySelector('body').classList.add('menu-open');
        }

        let headerClassesArray = Array.from(document.querySelector('header').classList);
        if(headerClassesArray.indexOf('page-scrolled') !== -1) {
            document.querySelector('header').classList.remove('page-scrolled');
        } else if (window.pageYOffset === 0 && headerClassesArray.indexOf('page-scrolled') === 0) {
            document.querySelector('header').classList.remove('page-scrolled');
        } else if(window.pageYOffset !== 0) {
            document.querySelector('header').classList.add('page-scrolled');
        }
        setIsMenuOpen(!isMenuOpen);
    }

    const onMenuLinkEnter = (event) => {
        let siblings = Array.from(event.currentTarget.parentNode.parentNode.children);
        for (let sibling in siblings) { 
            let child = siblings[sibling].children;
            if(child[0] !== event.currentTarget) {
                child[0].classList.add('not-hovered')
            } else {
                child[0].classList.remove('not-hovered')
            }
        }
    }
    const onMenuLinkLeave = (event) => {
        let siblings = Array.from(event.currentTarget.parentNode.parentNode.children);
        for (let sibling in siblings) { 
            let child = siblings[sibling].children;
            child[0].classList.remove('not-hovered')
        }
    }

    return (
        <header className={isPageScrolled ? 'page-scrolled' : ''}>
            <FlexCenteredContent>
                <LogoLink />

                <div className="menu">
                    <span className="hamburger" onClick={onMenuClick}>Menu</span>
                    <div className="menu-content">
                        <CenteredContent>
                            <CenteredContent style={{"position": "relative"}}>
                                <div className="language">
                                    <span className="title">Landen</span>
                                    <ul>
                                        <li>
                                            <a href="/#">Global</a>
                                        </li>
                                        <li>
                                            <a className="selected" href="/#">Nederland</a>
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
                            </CenteredContent>
                            
                            <CenteredContent className="menu-content-centered">
                                <ul className="menu-links">
                                    <li>
                                        <HomeLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <WerkLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <OverLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <DientsenLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <PartnersLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <VacaturesLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                    <li>
                                        <EventsLink onMenuLinkEnter={onMenuLinkEnter} onMenuLinkLeave={onMenuLinkLeave} />
                                    </li>
                                </ul>                            
                            </CenteredContent>

                            <CenteredContent className="social-links-centered">
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
                            </CenteredContent>
                        </CenteredContent>
                    </div>
                </div>
            </FlexCenteredContent>
        </header>
    )
}

export default Header
