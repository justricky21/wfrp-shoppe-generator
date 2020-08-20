import React from 'react'

function ResultsForm(props) {
    const { availableItems } = props;
    let itemsIndex = 0;
    return (
        <div>
            {availableItems.map(item => {
                return <p key={itemsIndex++} >{item.name}</p>
            })}
        </div>
    )
}

export default ResultsForm
