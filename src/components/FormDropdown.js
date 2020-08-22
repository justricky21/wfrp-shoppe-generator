import React from 'react'
import './FormDropdown.css'

function FormDropdown(props) {
    const { options, defaultValue, label } = props;
    return (
        <div className='form-dropdown'>
            <b>{label}</b>
            <select defaultValue={defaultValue}>
                {options.map(option => {
                    return <option
                                key={option.value+1}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                })}
            </select>
        </div>
    )
}

export default FormDropdown
