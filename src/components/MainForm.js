import React from "react";
import PopulationDropdown from "./PopulationDropdown";
import FormInput from "./FormInput";
import "./MainForm.css";

function MainForm(props) {
  const {
    onClearPress,
    gossipScore,
    gossipRoll,
    onRollPress,
    onChange,
  } = props;
  return (
    <div className="main-form">
      <PopulationDropdown />
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
    </div>
  );
}

export default MainForm;
