import React from "react";
import "./MainFormFooter.css";

function MainFormFooter(props) {
  const { onRollPress, onClearPress } = props;
  return (
    <div className="main-form-footer">
      <button onClick={(e) => onRollPress(e)}>Roll!</button>
      <button onClick={(e) => onClearPress(e)}>Clear</button>
    </div>
  );
}

export default MainFormFooter;
