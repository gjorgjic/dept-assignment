import React from 'react'

export default function Toolbar() {
    return (
        <div className="toolbar">
            <div className="work">
                <label>Show me:</label>
                <select>
                    <option value="all-work">all work</option>
                    <option value="all-work">all work</option>
                    <option value="all-work">all work</option>
                    <option value="all-work">all work</option>
                </select>
            </div>
            <div className="industry">
                <label>in:</label>
                <select>
                    <option value="all-industries">all industries</option>
                    <option value="all-industries">all industries</option>
                    <option value="all-industries">all industries</option>
                    <option value="all-industries">all industries</option>
                </select>
            </div>
        </div>
    )
}