import React from 'react';
import CaseItem from './CaseItem';
import QuoteItem from '../Quotes/QuoteItem';
import {v4 as uuidv4} from 'uuid';

export default function CaseList({ cases, findWithAttr }) {

    // get the ID of the quote item in the `cases` array
    let quoteId = findWithAttr(cases, 'isQuote', true);

    // conditionally render the quote item if the id equals to `quoteId`
    const caseItem = cases.map((data, i) => i === quoteId ? <QuoteItem quoteData={data} key={uuidv4()}>QuoteItem</QuoteItem> : <CaseItem key={uuidv4()} caseData={data} />)

    return (
        <div>
            {caseItem}
        </div>
    )
}