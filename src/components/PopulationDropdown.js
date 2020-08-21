import React, { Component } from 'react'

class PopulationDropdown extends Component {
    render() {
        return (
            <select>
                <option value='low'>Below 100</option>
                <option selected value='average'>Below 1,000</option>
                <option value='high'>Below 10,000</option>
                <option value='vhigh'>10,000 or more</option>
            </select>
        )
    }
}

export default PopulationDropdown