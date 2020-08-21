import React from 'react'
import './ResultsForm.css'

function ResultsForm(props) {
    const { availableItems } = props;
    let itemsIndex = 0;
    return (
        <div className='results'>
            {availableItems.map(item => {
                return <p key={itemsIndex++} >{item.name}</p>
            })}
        </div>
    )
}

export default ResultsForm
