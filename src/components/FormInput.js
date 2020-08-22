import React from "react";
import "./FormInput.css";

function FormInput(props) {
  const { label, type, placeholder, onChange, stateName } = props;
  return (
    <div className={`form-input input-${stateName}`}>
      <b>{label}</b>
      <input
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
