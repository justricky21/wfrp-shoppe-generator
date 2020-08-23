import React from "react";
import "./FormDropdown.css";

function FormDropdown(props) {
  const { options, label, onChange, stateName, value } = props;
  return (
    <div className="form-dropdown">
      {label && <b>{label}</b>}
      <select
        onChange={(e) => onChange(stateName, e.target.value)}
        value={value}
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
