import React from "react";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import "./MainForm.css";

function MainForm(props) {
  const {
    onClearPress,
    gossipScore,
    gossipRoll,
    onRollPress,
    onChange,
    populationBrackets,
  } = props;
  return (
    <form className="main-form">
      <FormDropdown
        defaultValue={0}
        label="Select the location's Population"
        options={populationBrackets}
        stateName="populationModifier"
        onChange={onChange}
      />
      <FormInput
        label="Input Gossip score..."
        stateName="gossipScore"
        type="number"
        value={gossipScore}
        onChange={onChange}
      />
      <FormInput
        label="Input Gossip roll..."
        stateName="gossipRoll"
        type="number"
        value={gossipRoll}
        onChange={onChange}
      />
      <button onClick={onRollPress}>Roll!</button>
      <button onClick={onClearPress}>Clear</button>
    </form>
  );
}

export default MainForm;
