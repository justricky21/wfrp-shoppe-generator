import React from "react";
import ResultsCard from "./ResultsCard";
import "./ResultsForm.css";

function ResultsForm(props) {
  const { availableItems } = props;
  return (
    <div className="results">
      {availableItems.map((group) => {
        return <ResultsCard key={group.key} group={group} />;
      })}
    </div>
  );
}

export default ResultsForm;
