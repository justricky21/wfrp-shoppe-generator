import React, { Component } from "react";
import PopulationDropdown from "./PopulationDropdown";
import FormInput from "./FormInput";
import "./MainForm.css";
import * as core from "../item_lists/core";
import { rollItemsInArray } from "../util/utils";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gossipScore: 0,
      gossipRoll: 0,
    };
  }

  onRollPress = () => {
    const { gossipScore, gossipRoll } = this.state;
    const { onSetAvailableItems } = this.props;
    const { meleeWeapons } = core;
    const availableItems = rollItemsInArray(
      meleeWeapons,
      gossipScore,
      gossipRoll
    );
    onSetAvailableItems(availableItems);
  };

  onChange = (stateKey, newState) => {
    this.setState({ [stateKey]: newState });
  };

  render() {
    const { onClearPress, gossipScore, gossipRoll } = this.props;
    return (
      <div className="main-form">
        <PopulationDropdown />
        <FormInput
          label="Input Gossip score..."
          stateName="gossipScore"
          type="number"
          value={gossipScore}
          onChange={this.onChange}
        />
        <FormInput
          label="Input Gossip roll..."
          stateName="gossipRoll"
          type="number"
          value={gossipRoll}
          onChange={this.onChange}
        />
        <button onClick={this.onRollPress}>Roll!</button>
        <button onClick={onClearPress}>Clear</button>
      </div>
    );
  }
}

export default MainForm;
