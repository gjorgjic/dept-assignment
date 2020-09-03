import React from 'react';

export default function ClientsItem({ img_src, client }) {
    return <li><img src={`http://localhost:4000/${img_src}`} alt={client} /></li>;
}