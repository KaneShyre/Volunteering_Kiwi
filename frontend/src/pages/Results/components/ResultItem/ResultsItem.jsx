import React from "react";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

const ResultItem = ({ click }) => (
  <ListChoice
    title="Choice Title"
    description="Further description"
    onClick={click}
  />
);

export default ResultItem;
