import React, { Component } from "react";
import MainForm from "./components/MainForm";
import ResultsForm from "./components/ResultsForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      availableItems: [],
    };
  }

  onClearPress = () => {
    this.setState({ availableItems: [] });
  };

  onSetAvailableItems = async (availableItems) => {
    await this.setState({ availableItems });
  };

  render() {
    const { availableItems } = this.state;

    return (
      <div className="app">
        <MainForm
          onClearPress={this.onClearPress}
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
