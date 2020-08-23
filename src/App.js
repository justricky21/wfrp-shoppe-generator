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
      gossipScore: "",
      gossipRoll: "",
      populationModifier: 0,
      itemFilter: "",
      groupFilter: "",
      autoRoll: false,
      individualAutoRoll: false,
    };
  }

  onRollPress = (e) => {
    e.preventDefault();
    const {
      gossipScore,
      gossipRoll,
      populationModifier,
      autoRoll,
      individualAutoRoll,
    } = this.state;
    const availableItems = rollItemsInArray(
      core,
      gossipScore,
      gossipRoll,
      populationModifier,
      autoRoll,
      individualAutoRoll
    );
    this.onSetAvailableItems(availableItems);
  };

  onChange = (stateKey, newState) => {
    this.setState({ [stateKey]: newState });
  };

  onClearPress = (e) => {
    e.preventDefault();
    this.setState({
      gossipScore: "",
      gossipRoll: "",
      populationModifier: 0,
      availableItems: [],
      itemFilter: "",
      groupFilter: "",
      autoRoll: false,
      individualAutoRoll: false,
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
      itemFilter,
      groupFilter,
      autoRoll,
      individualAutoRoll,
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
          autoRoll={autoRoll}
          individualAutoRoll={individualAutoRoll}
        />
        {availableItems.length > 0 && (
          <Results
            availableItems={availableItems}
            itemFilter={itemFilter}
            groupFilter={groupFilter}
          />
        )}
      </div>
    );
  }
}
export default App;
