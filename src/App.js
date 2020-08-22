import React, { Component } from "react";
import MainForm from "./components/MainForm";
import ResultsForm from "./components/ResultsForm";
import "./App.css";
import * as core from "./item_lists/core";
import { rollItemsInArray } from "./util/utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      availableItems: [],
      gossipScore: 0,
      gossipRoll: 0,
    };
  }

  onRollPress = () => {
    const { gossipScore, gossipRoll } = this.state;
    const { meleeWeapons } = core;
    const availableItems = rollItemsInArray(
      meleeWeapons,
      gossipScore,
      gossipRoll
    );
    this.onSetAvailableItems(availableItems);
  };

  onChange = (stateKey, newState) => {
    this.setState({ [stateKey]: newState });
  };

  onClearPress = () => {
    this.setState({ availableItems: [] });
  };

  onSetAvailableItems = async (availableItems) => {
    await this.setState({ availableItems });
  };

  render() {
    const { availableItems, gossipScore, gossipRoll } = this.state;

    return (
      <div className="app">
        <MainForm
          gossipScore={gossipScore}
          gossipRoll={gossipRoll}
          onRollPress={this.onRollPress}
          onClearPress={this.onClearPress}
          onChange={this.onChange}
          onSetAvailableItems={this.onSetAvailableItems}
        />
        {availableItems.length > 0 && (
          <ResultsForm availableItems={availableItems} />
        )}
      </div>
    );
  }
}
export default App;
