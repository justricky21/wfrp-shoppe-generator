import React from "react";
import "./FormInput.css";

function FormInput(props) {
  const {
    label,
    type,
    placeholder,
    onChange,
    stateName,
    fadeIn,
    value,
    disabled,
  } = props;
  return (
    <div className={`form-input form-input-${type} ${fadeIn && "fade-in"}  `}>
      {label && <b>{label}</b>}
      <input
        disabled={disabled}
        value={disabled ? "" : value}
        className={`input input-${type} ${disabled && "disabled"}`}
        placeholder={placeholder}
        type={type}
        onChange={(e) =>
          onChange(
            stateName,
            type === "number" && value ? e.target.valueAsNumber : e.target.value
          )
        }
      />
    </div>
  );
}

export default FormInput;
