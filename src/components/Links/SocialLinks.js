import React from 'react';
import { FacebookSVG, InstagramSVG, TwitterSVG, LinkedInSVG } from '../../assets/images/SVGs';

const FacebookLink = (props) => <a href="https://www.facebook.com/DeptAgency/" className="social-link facebook" title="Facebook"><FacebookSVG /></a>;
const TwitterLink = (props) => <a href="https://twitter.com/deptagency/" className="social-link twitter" title="Twitter"><TwitterSVG /></a>;
const InstagramLink = (props) => <a href="https://www.instagram.com/deptagency/" className="social-link instagram" title="Instagram"><InstagramSVG /></a>;
const LinkedInLink = (props) => <a href="https://www.linkedin.com/company/deptagency/" className="social-link linkedin" title="LinkedIn"><LinkedInSVG /></a>;

export {
    FacebookLink,
    TwitterLink,
    InstagramLink,
    LinkedInLink
}