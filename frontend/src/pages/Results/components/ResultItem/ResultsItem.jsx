import React from "react";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

const ResultItem = ({ click, city, country,id }) => (
  <ListChoice
    title="Choice Title"
    description="Further description"
    onClick={() => click({ city, country, id })}
  />
);

export default ResultItem;
