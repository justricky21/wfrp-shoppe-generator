import React from "react";
import "./ResultsCard.css";

export default function ResultsCard(props) {
  const { key, label, availableGroupItems } = props.group;
  return (
    <div className="results-card">
      <h1>{label}</h1>
      {availableGroupItems.map((item) => {
        return <p key={`${key} ${item.name}`}>{item.name}</p>;
      })}
    </div>
  );
}
