import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import TimelineArray from "../shared/TimelineArray";
import TimelineEntry from "./TimelineEntry";

const Timeline = () =>
  TimelineArray.length > 0 && (
    <React.Fragment>
      <h2>Culture <br/>Timeline:</h2>
      <div className="timeline-container">
        {TimelineArray.map((entry, idx) => (
          <TimelineEntry entry={entry} key={idx} />
        ))}
      </div>
    </React.Fragment>
  );

/* Change the term "Culture" to a mapped id as I add more cultures to an array */

export default Timeline;
