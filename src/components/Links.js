import React from 'react';
import { Link } from 'react-router-dom';

const LogoLink = <Link className="logo" to="/">DEPT</Link>;
const HomeLink = <Link to="/">Home</Link>;
const WerkLink = <Link to="/werk">Werk</Link>;
const OverLink = <Link to="/over">Over</Link>;
const DientsenLink = <Link to="/dientsen">Dientsen</Link>;
const PartnersLink = <Link to="/partners">Partners</Link>;
const VacaturesLink = <Link to="/vacatures">Vacatures</Link>;

export {
    LogoLink,
    HomeLink,
    WerkLink,
    OverLink,
    DientsenLink,
    PartnersLink,
    VacaturesLink
}