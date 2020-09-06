import React from 'react';
import styled from 'styled-components';
import CaseList from '../Cases/CaseList';
import FeaturedCase from '../Cases/FeaturedCase';
import Toolbar from '../Toolbar/Toolbar';
import ClientsList from '../Clients/ClientsList';
import ContactForm from '../Forms/ContactForm';
import { CenteredContent } from '../../assets/globalStyles';
import LazyLoad from 'react-lazyload';

const OHCenteredContent = styled(CenteredContent)`
    overflow: hidden;
`;

export default function Home() {
    return (
        <div>
            <FeaturedCase />
            <OHCenteredContent>
                <LazyLoad once >
                    <Toolbar />
                </LazyLoad>
                <LazyLoad once >
                    <CaseList />
                </LazyLoad>
            </OHCenteredContent>
            <LazyLoad once>
                <ClientsList />
            </LazyLoad>
            <LazyLoad once>
                <CenteredContent className="contact-form-container">
                    <ContactForm />
                </CenteredContent>
            </LazyLoad>
        </div>
    )
}