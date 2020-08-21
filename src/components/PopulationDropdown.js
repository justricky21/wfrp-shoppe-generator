import React from 'react'
import './PopulationDropdown.css'

function PopulationDropdown() {
    return (
        <select defaultValue='average'>
            <option value='low'>Below 100</option>
            <option value='average'>Below 1,000</option>
            <option value='high'>Below 10,000</option>
            <option value='vhigh'>10,000 or more</option>
        </select>
    )
}

export default PopulationDropdown