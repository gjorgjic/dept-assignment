import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ClientsItem({ clients }) {

    const clientItem = clients.map((clientItem) => {
        const { img_src, client } = clientItem;
        return <li key={uuidv4()}> <img src={`http://localhost:4000/${img_src}`} alt={client} /></li>
    }

    )
    return (
        <ul>
            {clientItem}
        </ul>
    )
}