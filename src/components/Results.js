import React from "react";
import ResultsCard from "./ResultsCard";
import "./Results.css";

function Results(props) {
  const { availableItems, itemFilter, groupFilter } = props;
  let itemsToDisplay = availableItems;

  if (itemFilter) {
    const itemFilteredArray = [];
    itemsToDisplay.forEach((group) => {
      const { key, label } = group;
      const groupToReturn = group.availableGroupItems.filter((item) => {
        return item.name.toLowerCase().includes(itemFilter.toLowerCase());
      });
      if (groupToReturn.length > 0) {
        itemFilteredArray.push({
          key: key,
          label: label,
          availableGroupItems: groupToReturn,
        });
      }
    });
    itemsToDisplay = itemFilteredArray;
  }

  if (groupFilter) {
    itemsToDisplay = itemsToDisplay.filter((group) => {
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
