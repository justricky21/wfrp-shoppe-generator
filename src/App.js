import React, { Component } from "react";
import MainForm from "./components/MainForm";
import Results from "./components/Results";
import "./App.css";
import core from "./item_lists/core";
import { rollItemsInArray } from "./util/utils";
import { populationBrackets } from "./util/constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      availableItems: [],
      gossipScore: 0,
      gossipRoll: 0,
      populationModifier: 0,
      nameFilter: "",
      groupFilter: "",
    };
  }

  onRollPress = (e) => {
    e.preventDefault();
    const { gossipScore, gossipRoll, populationModifier } = this.state;
    const availableItems = rollItemsInArray(
      core,
      gossipScore,
      gossipRoll,
      populationModifier
    );
    this.onSetAvailableItems(availableItems);
  };

  onChange = (stateKey, newState) => {
    this.setState({ [stateKey]: newState });
  };

  onClearPress = (e) => {
    e.preventDefault();
    this.setState({
      gossipScore: 0,
      gossipRoll: 0,
      populationModifier: 0,
      availableItems: [],
      nameFilter: "",
      groupFilter: "",
    });
  };

  onSetAvailableItems = (availableItems) => {
    this.setState({ availableItems });
  };

  render() {
    const {
      availableItems,
      gossipScore,
      gossipRoll,
      populationModifier,
      nameFilter,
      groupFilter,
    } = this.state;
    return (
      <div className="app">
        <MainForm
          resultsDisplayed={availableItems.length > 0}
          gossipScore={gossipScore}
          gossipRoll={gossipRoll}
          onRollPress={this.onRollPress}
          onClearPress={this.onClearPress}
          onChange={this.onChange}
          onSetAvailableItems={this.onSetAvailableItems}
          populationBrackets={populationBrackets}
          populationModifier={populationModifier}
        />
        {availableItems.length > 0 && (
          <Results
            availableItems={availableItems}
            nameFilter={nameFilter}
            groupFilter={groupFilter}
          />
        )}
      </div>
    );
  }
}
export default App;
