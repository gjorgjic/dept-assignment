import React from 'react';
import '../../assets/css/Toolbar.scss';

export default function Toolbar() {

    const TestMorph = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path id="gridList" fill="#000" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z">
                <animate id="gridListAnimation" begin="indefinite" attributeName="points" dur="500ms" to="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z" />
            </path>
        </svg>
    )

    const toggleGridList = () => {
        // console.log('test')
        document.getElementById('gridListAnimation').beginElement();
    }

    return (
        <div className="toolbar">
            <div className="layout-switch">
                <span className="toggle" onClick={toggleGridList}>
                    <TestMorph />
                </span>
            </div>
            <div className="work">
                <label>Show me</label>
                <div className="select-container">
                    <select>
                        <option value="all-work">all work</option>
                        <option value="all-work">all work</option>
                        <option value="all-work">all work</option>
                        <option value="all-work">all work</option>
                    </select>
                </div>
            </div>
            <div className="industry">
                <label>in</label>
                <div className="select-container">
                    <select>
                        <option value="all-industries">all industries</option>
                        <option value="all-industries">all industries</option>
                        <option value="all-industries">all industries</option>
                        <option value="all-industries">all industries</option>
                    </select>
                </div>
            </div>
        </div>
    )
}