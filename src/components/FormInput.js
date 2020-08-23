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
  } = props;
  return (
    <div className={`form-input-${type} ${fadeIn && "fade-in"}`}>
      {label && <b>{label}</b>}
      <input
        value={value}
        className={`input-${type}`}
        placeholder={placeholder}
        type={type}
        onChange={(e) =>
          onChange(
            stateName,
            type === "number" ? e.target.valueAsNumber : e.target.value
          )
        }
      />
    </div>
  );
}

export default FormInput;
