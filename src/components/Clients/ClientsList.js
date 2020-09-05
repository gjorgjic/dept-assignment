import React, { useState } from 'react'
import { useEffect } from 'react';
import Loading from '../Loading';
import ClientsItem from './ClientsItem';
import { CenteredContent } from '../../assets/globalStyles';
import { v4 as uuidv4 } from 'uuid';
import '../../assets/css/Clients.scss';

export default function ClientsList() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });

        //
         fetch("http://localhost:4000/clients", {
                headers: headers,
            })
            .then(res => res.json())
            .then(data => setClients(data));
    }, [])

    if(Object.keys(clients).length < 1) {
        return (
            <CenteredContent>
                <Loading />
            </CenteredContent>
        )
    }

    return (
        <div className="clients-container">
            <CenteredContent>
                <h2 className="title">{clients.title}</h2>
                <div className="description">{clients.description}</div>
            </CenteredContent>
            <CenteredContent className="clients">
                {clients.clients.length > 0 && clients.clients.map(({ img_src, client }) => (
                    <ClientsItem key={uuidv4()} client={client} img_src={img_src} />
                ))}
            </CenteredContent>
        </div>
    )
}