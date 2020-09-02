import React from 'react'

export default function FeaturedCase({ featuredCase }) {
    const { name, title, img, href } = featuredCase;
    return (
        <div className="case featured-case">
            <img src={`http://localhost:4000/${img}`} alt={name}/>
            <p>{name}</p>
            <h3>{title}</h3>
            <a href={href}>View case</a>
        </div>
    )
}