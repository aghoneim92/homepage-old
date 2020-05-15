import React from "react";
import classes from "./Skills.module.css";
import ListItem from "./ListItem";

const skills = {
  "Tools and Methodologies": [
    "Agile (Scrum)",
    "Unit and Integration Testing (Jest, JUnit)",
    "CI/CD (AWS, Gitlab)",
    "Docker",
    "Git",
    "Jira",
  ],
  Programming: [
    "Javascript/Typescript",
    "Java",
    "C/C++",
    "Spring Boot",
    "node.js",
    "React",
  ],
  Database: ["MySQL", "Postgres", "Firebase"],
};

export default function Skills() {
  return (
    <div className={classes.container}>
      {Object.entries(skills).map(([key, value]) => (
        <div key={key} className={classes.skillGroup}>
          <h4 className={classes.header}>{key}</h4>
          <ul>
            {value.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
