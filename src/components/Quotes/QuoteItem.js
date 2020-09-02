import React from 'react'

export default function QuoteItem({ quoteData }) {
    const { quote, name } = quoteData;

    return (
        <div className="quote">
            <q>{quote.replace(/&quot;/g, '"')}</q>
            <p>{name}</p>
        </div>
    )
}