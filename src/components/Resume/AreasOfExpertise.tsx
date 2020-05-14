import React from "react";
import ListItem from "./ListItem";

const areas = [
  <span>
    Backend development using <b>Java Spring</b> and <b>Node.js</b>
  </span>,
  <span>
    Frontend development using <b>React</b>, <b>Redux</b> and <b>Typescript</b>
  </span>,
  <span>
    Deployment and monitoring on <b>AWS</b>
  </span>,
  <span>
    Mac/Linux development with <b>Docker</b> and <b>shell scripting</b>
  </span>,
];

export default function AreasOfExpertise() {
  return (
    <ul>
      {areas.map((area, index) => (
        <ListItem key={index}>{area}</ListItem>
      ))}
    </ul>
  );
}
