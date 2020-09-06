import React from 'react';
import LazyLoad from 'react-lazyload';

export default function CaseItem({ caseData }) {
    const { name, title, img, href, category, industry } = caseData;

    return (
        <div className="case" data-category={category} data-industry={industry}>
                {img !== '' ? (
                    <div className="img-container">
                        <LazyLoad once>
                            <img src={`http://localhost:4000/${img}`} alt={name}/>
                        </LazyLoad>
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