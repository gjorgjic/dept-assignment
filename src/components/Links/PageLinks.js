import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LS = {};
const ArrowUp = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
        <path d="M134.235,180.517h92.612V489.222h46.306v-308.7h92.612L242.282,10.729Z"/>
    </svg>
)

LS.LogoLink = styled(Link)`
    display: inherit;
    
    & svg {
        align-self: flex-start;
        width: 120px;
        height: 33px;
        fill: #272727;
        transition: .4s cubic-bezier(.455,.03,.515,.955);
        transition-property: fill,width,height;
    }
    
    footer & svg {
        fill: #fff;
        width: 55px;
        height: 15px;
        @media (min-width: 990px) {
            width: 120px;
            height: 33px;
        }
    }

    header.page-scrolled & svg {
        width: 55px;
        height: 15px;
    }

    body.menu-open & svg {
        fill: #fff;
    }
`;


const LogoLink = props => <LS.LogoLink className="logo" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 46" width="173" height="46"> <path d="M147.9 46h12.6V10.8H173V0h-37.6v10.8h12.5V46zm-41.5-24.9V9.9h7.2c4.6 0 6.9 1.9 6.9 5.6 0 3.7-2.3 5.6-6.9 5.6h-7.2zM93.9 46h12.6V31h7.5c11.3 0 18.8-4.9 18.8-15.5S125.2 0 114 0H93.9v46zm-43.3 0h34.3V35.7H63.2v-7.8h21.5V18H63.2v-7.7h21.7V0H50.6v46zm-38-10.7V10.7h4c8.8 0 14.3 3.2 14.3 12.3 0 9.1-5.4 12.3-14.3 12.3h-4zM0 46h16.5c15.6 0 26.9-6.2 26.9-23C43.3 6.2 32 0 16.5 0H0v46z"></path> </svg></LS.LogoLink>;
const HomeLink = props => <Link to="/" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}><span>Home</span></Link>;
const WerkLink = props => <Link to="/werk" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Werk</Link>;
const OverLink = props => <Link to="/over" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Over</Link>;
const DientsenLink = props => <Link to="/dientsen" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Dientsen</Link>;
const PartnersLink = props => <Link to="/partners" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Partners</Link>;
const VacaturesLink = props => <Link to="/vacatures" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Vacatures</Link>;
const EventsLink = props => <Link to="/events" onMouseEnter={props.onMenuLinkEnter} onMouseLeave={props.onMenuLinkLeave}>Events</Link>;

export {
    LogoLink,
    HomeLink,
    WerkLink,
    OverLink,
    DientsenLink,
    PartnersLink,
    VacaturesLink,
    EventsLink,
    ArrowUp,
}