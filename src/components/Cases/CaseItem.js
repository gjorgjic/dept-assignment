import React from 'react'

export default function CaseItem({ caseData }) {
    const { name, title, img, href } = caseData;

    return (
        <div className="case">
            
                {img !== '' ? (
                    <div className="img-container">
                        <img src={`http://localhost:4000/${img}`} alt={name}/>
                    </div>
                ) : null}
            <div>
                <p className="company">{name}</p>
                <h3 className="title">{title}</h3>
                <a className="link" href={href}>View case</a>
            </div>
        </div>
    )
}