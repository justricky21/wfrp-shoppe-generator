import React from "react";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import MainFormFooter from "./MainFormFooter";
import "./MainForm.css";

function MainForm(props) {
  const {
    onClearPress,
    gossipScore,
    gossipRoll,
    onRollPress,
    onChange,
    populationBrackets,
    resultsDisplayed,
    itemFilter,
    groupFilter,
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
      {resultsDisplayed && (
        <FormInput
          placeholder="Filter by name..."
          stateName="itemFilter"
          type="text"
          value={itemFilter}
          onChange={onChange}
        />
      )}
      {resultsDisplayed && (
        <FormInput
          placeholder="Filter by group..."
          stateName="groupFilter"
          type="text"
          value={groupFilter}
          onChange={onChange}
        />
      )}
      <MainFormFooter onRollPress={onRollPress} onClearPress={onClearPress} />
    </form>
  );
}

export default MainForm;
