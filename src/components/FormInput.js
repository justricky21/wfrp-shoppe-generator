import React from "react";
import "./FormInput.css";

function FormInput(props) {
  const { label, type, placeholder, onChange, stateName } = props;
  return (
    <div className={`form-input`}>
      <b>{label}</b>
      <input
        className={`form-input-${type}`}
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