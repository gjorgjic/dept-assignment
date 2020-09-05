import React, { useEffect, useState } from 'react';
import { CenteredContent } from '../assets/globalStyles';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink, ArrowUp } from './Links/PageLinks';
import { FacebookLink, TwitterLink, InstagramLink } from './Links/SocialLinks';
import '../assets/css/Footer.scss';

export default function Footer() {

    const [isViewportMobile, setIsViewportMobile] = useState(false);

    const handleScrollTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    const onWindowResize = () => {
        const windowWidth =  window.innerWidth;
        const footer = document.querySelector('.footer-container');
        const linktop = document.getElementById('linkTop');
        if(windowWidth > 768) {
            setIsViewportMobile(false);
            // set `linktop` offset when viewport is not a mobile screen
            if ((footer.offsetLeft + footer.offsetWidth + 50) >= window.innerWidth) {
                linktop.style.left = 'auto';
                linktop.style.right = 10 + 'px';
                
            } else {
                linktop.style.right = 'auto';
                linktop.style.left = footer.offsetLeft + footer.offsetWidth + 10 + 'px';
            }
        } else {
            setIsViewportMobile(true);
            // set `linktop` right offset when viewport is a mobile screen
            // TODO: test 
        }
    }

    useEffect(() => {
        onWindowResize();
        window.addEventListener('resize', onWindowResize)
        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, [isViewportMobile])

    return (
        <footer>
            <CenteredContent className="footer-container">
                <div className="footer-top">
                    <div className="logo-container">
                        <LogoLink />
                    </div>

                    <ul className="links">
                        <li><HomeLink /></li>
                        <li><WerkLink /></li>
                        <li><OverLink /></li>
                        <li><DientsenLink /></li>
                        <li><PartnersLink /></li>
                        <li><VacaturesLink /></li>
                    </ul>

                    <div className="socials">
                        <FacebookLink />
                        <TwitterLink />
                        <InstagramLink />
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="dummy-div"></div>
                    <div className="info">
                        <span>Chamber of Commerce: 63464101</span>
                        <span>VAT: NL 8552.47.502.B01</span>
                        <span>Terms and conditions</span>
                    </div>
                    <div className="copyright">
                        <span>© 2018 Dept Agency</span>
                    </div>
                </div>

                <span id="linkTop" style={{"display": "none", "color": "#1A18F7"}} onClick={handleScrollTop}>
                    <ArrowUp />
                    Top
                </span>
            </CenteredContent>
        </footer>
    )
}
