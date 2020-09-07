import React from 'react';
import LazyLoad from 'react-lazyload';


export default function QuoteItem({ quoteData }) {
    const { quote, name } = quoteData;

    return (
        <div className="quote-container">
            <LazyLoad once>
                <div className="quote">
                    <q className="title">{quote.replace(/&quot;/g, '"')}</q>
                    <p>{name}</p>
                </div>
        </LazyLoad>
            </div>
    )
}