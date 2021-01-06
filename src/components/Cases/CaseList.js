import React, { useEffect } from 'react';
import CaseItem from './CaseItem';
import QuoteItem from '../Quotes/QuoteItem';
import {v4 as uuidv4} from 'uuid';
import Loading from '../Loading';
import '../../assets/css/Cases.scss';
import { findWithAttr } from '../../helpers';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchCases } from '../../store/actions';

function CaseList({ cases }) {

    // const layout = useSelector(state => state.layoutReducer, shallowEqual)
    // const cases = useSelector(state => state.casesReducer, shallowEqual)

    const visibility = useSelector(state => state.visibilityFilter)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(visibility)
        dispatch(fetchCases())
    }, [dispatch, visibility])

    if(cases.loading === true) {
        return <Loading />
    }

    // get the ID of the quote item in the `cases` array
    let quoteId = findWithAttr(cases.cases, 'isQuote', true);

    return (
        <div className={`cases grid-layout`}>
            {/* {console.log(cases, 'cases')} */}
            {cases.cases.length > 0 && cases.cases.map((data, i) => i === quoteId ? <QuoteItem quoteData={data} key={uuidv4()}>QuoteItem</QuoteItem> : <CaseItem key={uuidv4()} caseData={data} />)}
        </div>
    )
}

const getVisibleCases = (cases, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return cases
      case 'SHOW_INDUSTRIES':
        return cases.cases.filter(c => c.completed)
      case 'SHOW_CATEGORIES':
        return cases.cases.filter(c => !c.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
  
  const mapStateToProps = state => ({
    cases: getVisibleCases(state.casesReducer, state.visibilityFilter)
  })

export default connect(mapStateToProps)(CaseList)