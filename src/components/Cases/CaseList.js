import React from 'react';
import CaseItem from './CaseItem';
import QuoteItem from '../Quotes/QuoteItem';
import {v4 as uuidv4} from 'uuid';
import Loading from '../Loading';
import '../../assets/css/Cases.scss';

export default function CaseList({ cases, findWithAttr }) {

    if(Object.keys(cases).length === 0) {
        return <Loading />
    }

    // get the ID of the quote item in the `cases` array
    let quoteId = findWithAttr(cases, 'isQuote', true);

    return (
        <div className="cases">
            {cases.length > 0 && cases.map((data, i) => i === quoteId ? <QuoteItem quoteData={data} key={uuidv4()}>QuoteItem</QuoteItem> : <CaseItem key={uuidv4()} caseData={data} />)}
        </div>
    )
}