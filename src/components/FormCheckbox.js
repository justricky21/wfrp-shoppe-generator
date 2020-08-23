import React from "react";
import "./FormCheckbox.css";

function FormCheckbox(props) {
  const { label, onChange, stateName, fadeIn, value } = props;
  return (
    <div className={`form-checkbox ${fadeIn && "fade-in"}`}>
      <label class="checkbox-container">
        <b>{label}</b>
        <input
          checked={value}
          onChange={(e) => onChange(stateName, e.target.checked)}
          type="checkbox"
        />
      </label>
    </div>
  );
}

export default FormCheckbox;
