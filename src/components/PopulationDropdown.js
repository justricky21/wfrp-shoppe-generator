import React from "react";
import FormDropdown from "./FormDropdown";
import { populationBrackets } from "../util/utils";

function PopulationDropdown() {
  return (
    <FormDropdown
      options={populationBrackets}
      defaultValue="average"
      label="Select the location's Population"
    />
  );
}

export default PopulationDropdown;
