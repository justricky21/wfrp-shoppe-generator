import React from "react";
import ResultsCard from "./ResultsCard";
import "./Results.css";

function Results(props) {
  const { availableItems, nameFilter, groupFilter } = props;
  let itemsToDisplay = availableItems;
  if (groupFilter) {
    itemsToDisplay = availableItems.filter((group) => {
      return group.label.toLowerCase().includes(groupFilter.toLowerCase());
    });
  }
  return (
    <div className="results">
      {itemsToDisplay.map((group) => {
        return <ResultsCard key={group.key} group={group} />;
      })}
    </div>
  );
}

export default Results;
