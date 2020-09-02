import React from 'react'

export default function CaseItem({ caseData }) {
    const { name, title, img, href } = caseData;

    return (
        <div className="case">
            {img !== '' ? <img src={`http://localhost:4000/${img}`} alt={name}/> : null}
            <p>{name}</p>
            <h3>{title}</h3>
            <a href={href}>View case</a>
        </div>
    )
}