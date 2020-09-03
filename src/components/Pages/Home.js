import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CaseList from '../Cases/CaseList';
import FeaturedCase from '../Cases/FeaturedCase';
import Loading from '../Loading';
import Toolbar from '../Toolbar/Toolbar';
import ClientsList from '../Clients/ClientsList';
import ContactForm from '../Forms/ContactForm';
import { CenteredContent } from '../../assets/globalStyles';

const OHCenteredContent = styled(CenteredContent)`
    overflow: hidden;
`;

export default function Home() {

    const [cases, setCases] = useState([]);
    const [featuredCase, setFeaturedCase] = useState({});

    useEffect(() => {
            const headers = new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
            });

            fetch("http://localhost:4000/cases", {
                headers: headers,
            })
            .then(response => {
            //   console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data);
                let standardCases = data.cases.filter(standardCase => standardCase !== data.cases[findWithAttr(data.cases, 'featured', true)])
                setCases(standardCases);
                setFeaturedCase(data.cases[findWithAttr(data.cases, 'featured', true)]);
            });
            
    }, []);

    function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    if(cases.length < 1) {
        return <Loading />
    }
   
    return (
        <div>
            <FeaturedCase featuredCase={featuredCase} />
            <OHCenteredContent>
                <Toolbar />
                <CaseList cases={cases} findWithAttr={findWithAttr} />
            </OHCenteredContent>
            <ClientsList />
            <CenteredContent>
                <ContactForm />
            </CenteredContent>
        </div>
    )
}
