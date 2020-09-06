import React from 'react';
import styled from 'styled-components';
import CaseList from '../Cases/CaseList';
import FeaturedCase from '../Cases/FeaturedCase';
import Toolbar from '../Toolbar/Toolbar';
import ClientsList from '../Clients/ClientsList';
import ContactForm from '../Forms/ContactForm';
import { CenteredContent } from '../../assets/globalStyles';

const OHCenteredContent = styled(CenteredContent)`
    overflow: hidden;
`;

export default function Home() {
    return (
        <div>
            <FeaturedCase />
            <OHCenteredContent>
                <Toolbar />
                <CaseList />
            </OHCenteredContent>
            <ClientsList />
            <CenteredContent className="contact-form-container">
                <ContactForm />
            </CenteredContent>
        </div>
    )
}