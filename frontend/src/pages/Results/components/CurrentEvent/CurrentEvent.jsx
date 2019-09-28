import React from "react";
import "./CurrentEvent.scss";
import Button from "@kiwicom/orbit-components/lib/Button";

const CurrentEvent = ({ showEvent , currentEvent}) => {
  if (!showEvent) {
    return null;
  }
  return (
    <div className="current-event">
      <h1>asdasdasd</h1>
      <Button
        onClick={() => {}}
        ariaControls="element ID"
        ariaExpanded={false}
        title="Additional information for accessibility"
      >
          Apply to Volunteering
      </Button>
    </div>

  );
};


export default CurrentEvent;
