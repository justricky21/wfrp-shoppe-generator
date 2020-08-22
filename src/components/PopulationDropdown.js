import React from 'react'
import FormDropdown from './FormDropdown'
import { populationBrackets } from '../util/utils'

function PopulationDropdown() {
    return (
        <FormDropdown
            options={populationBrackets}
            defaultValue='average'
            label="Select the region's population"
        />
    )
}

export default PopulationDropdown