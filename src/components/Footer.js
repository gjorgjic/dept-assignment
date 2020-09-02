import React from 'react';
import { LogoLink, HomeLink, WerkLink, OverLink, DientsenLink, PartnersLink, VacaturesLink } from './Links/PageLinks';
import { FacebookLink, TwitterLink, InstagramLink} from './Links/SocialLinks';

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                {LogoLink}

                <ul>
                    <li>{HomeLink}</li>
                    <li>{WerkLink}</li>
                    <li>{OverLink}</li>
                    <li>{DientsenLink}</li>
                    <li>{PartnersLink}</li>
                    <li>{VacaturesLink}</li>
                </ul>

                <div className="socials">
                    <FacebookLink />
                    <TwitterLink />
                    <InstagramLink />
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="info">
                    <span>Chamber of Commerce: 63464101</span>
                    <span>VAT: NL 8552.47.502.B01</span>
                    <span>Terms and conditions</span>
                </div>
                <div className="copyright">
                    <span>© 2018 Dept Agency</span>
                </div>
            </div>

            <span id="linkTop">Top</span>
        </footer>
    )
}
