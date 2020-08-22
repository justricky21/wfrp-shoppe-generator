import React from "react";
import "./FormDropdown.css";

function FormDropdown(props) {
  const { options, defaultValue, label, onChange, stateName } = props;
  return (
    <div className="form-dropdown">
      {label && <b>{label}</b>}
      <select
        defaultValue={defaultValue}
        onChange={(e) => onChange(stateName, e.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option.value + 1} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormDropdown;
