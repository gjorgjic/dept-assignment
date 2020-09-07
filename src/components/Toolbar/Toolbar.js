import React, { useState } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import '../../assets/css/Toolbar.scss';

function Toolbar(props) {

    const [isGrid, setIsGrid] = useState(true);

    const GridListSVG = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {isGrid === false && (
                <path id="grid" fill="#000" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z">
                </path>
            )}
            {isGrid && (
                <path id="list" fill="#000" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
            )}
        </svg>
    )

    const toggleGridList = () => {
        let casesDiv = document.querySelector('.cases');
        let casesDivClasses = casesDiv.classList;
        setIsGrid(!isGrid);
        if(isGrid) {
            casesDivClasses.remove('grid-layout');
            casesDivClasses.add('list-layout');
        } else {
            casesDivClasses.add('grid-layout');
            casesDivClasses.remove('list-layout');
        }
    }
    
    const onCategoryChange = element => {
        const catVal = element.currentTarget.value;
        let matchedItems = document.querySelectorAll('.case[data-category]');
        let siblings = Array.from(matchedItems);
        
        for (let sibling in siblings) { 
            if(siblings[sibling].getAttribute('data-category') !== catVal) {
                siblings[sibling].style.display = 'none'
            } else {
                siblings[sibling].style.display = 'grid'
            }

            if(catVal === 'all') {
                siblings[sibling].style.display = 'grid'
            }
        }
        forceCheck();
    }

    const onIndustryChange = element => {
        const indVal = element.currentTarget.value;
   
        let matchedItems = document.querySelectorAll('.case[data-industry]');
        let siblings = Array.from(matchedItems);
        
        for (let sibling in siblings) { 
            if(siblings[sibling].getAttribute('data-industry') !== indVal) {
                siblings[sibling].style.display = 'none'
            } else {
                siblings[sibling].style.display = 'grid'
            }

            if(indVal === 'all') {
                siblings[sibling].style.display = 'grid'
            }
        }
        forceCheck();
    }

    return (
        <div className="toolbar">
            <div className="layout-switch">
                <span className="toggle" onClick={toggleGridList} title={isGrid ? 'Switch to list' : 'Switch to grid'}>
                    <GridListSVG isGrid={isGrid} />
                </span>
            </div>
            <div className="work">
                <label>Show me</label>
                <div className="select-container">
                    <select onChange={onCategoryChange}>
                        <option value="all">all</option>
                        <option value="category1">category1</option>
                        <option value="category2">category2</option>
                        <option value="category3">category3</option>
                        <option value="category4">category4</option>
                    </select>
                </div>
            </div>
            <div className="industry">
                <label>in</label>
                <div className="select-container">
                    <select onChange={onIndustryChange}>
                        <option value="all">all</option>
                        <option value="industry1">industry1</option>
                        <option value="industry2">industry2</option>
                        <option value="industry3">industry3</option>
                        <option value="industry4">industry4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default connect(null)(Toolbar)