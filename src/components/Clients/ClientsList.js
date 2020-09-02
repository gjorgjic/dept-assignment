import React, { useState } from 'react'
import { useEffect } from 'react';
import Loading from '../Loading';
import ClientsItem from './ClientsItem';

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

    if(clients.length < 1) {
        return <Loading />
    }

    return (
        <div className="clients">
            <ClientsItem clients={clients.clients} />
        </div>
    )
}