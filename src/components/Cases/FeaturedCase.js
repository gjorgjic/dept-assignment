import React from 'react';
import styled from 'styled-components';
import './FeaturedCase.scss';
import { CenteredContent, StyledButtonA } from '../../assets/globalStyles';

const AbsoluteCenteredContent = styled(CenteredContent)`
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const FeaturedCaseStyledButton = styled(StyledButtonA)`
    position: absolute;
    right: 0;
    bottom: 5%;
`;

export default function FeaturedCase({ featuredCase }) {
    const { name, featuredTitle, img, href } = featuredCase;
    return (
        <div className="case featured-case">
            <img src={`http://localhost:4000/${img}`} alt={name}/>
            <AbsoluteCenteredContent>
                <h3>{featuredTitle}</h3>
                <FeaturedCaseStyledButton black={true} href={href}>View case</FeaturedCaseStyledButton>
            </AbsoluteCenteredContent>
        </div>
    )
}