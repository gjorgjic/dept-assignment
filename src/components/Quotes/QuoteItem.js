import React from 'react';
import LazyLoad from 'react-lazyload';


export default function QuoteItem({ quoteData }) {
    const { quote, name } = quoteData;

    return (
        <LazyLoad once>
            <div className="quote-container">
                <div className="quote">
                    <q className="title">{quote.replace(/&quot;/g, '"')}</q>
                    <p>{name}</p>
                </div>
            </div>
        </LazyLoad>
    )
}