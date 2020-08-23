import React from "react";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import MainFormFooter from "./MainFormFooter";
import FormCheckbox from "./FormCheckbox";
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
    populationModifier,
    autoRoll,
    individualAutoRoll,
  } = props;
  return (
    <form className="main-form">
      <FormDropdown
        defaultValue={0}
        label="Select the location's Population"
        options={populationBrackets}
        stateName="populationModifier"
        value={populationModifier}
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
        disabled={autoRoll}
      />
      <FormCheckbox
        label="Have the tool roll for you?"
        stateName="autoRoll"
        value={autoRoll}
        onChange={onChange}
      />
      {autoRoll && (
        <FormCheckbox
          fadeIn
          label="Have the roll happen individually, per item?"
          stateName="individualAutoRoll"
          value={individualAutoRoll}
          onChange={onChange}
        />
      )}
      <MainFormFooter onRollPress={onRollPress} onClearPress={onClearPress} />
      {resultsDisplayed && (
        <FormInput
          fadeIn
          placeholder="Filter by name..."
          stateName="itemFilter"
          type="text"
          value={itemFilter}
          onChange={onChange}
        />
      )}
      {resultsDisplayed && (
        <FormInput
          fadeIn
          placeholder="Filter by group..."
          stateName="groupFilter"
          type="text"
          value={groupFilter}
          onChange={onChange}
        />
      )}
    </form>
  );
}

export default MainForm;
