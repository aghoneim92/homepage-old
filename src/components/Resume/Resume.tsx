import React from "react";
import classes from "./Resume.module.css";
import SectionHeader from "./SectionHeader";
import BasicInfo from "./BasicInfo";
import WorkExperience from "./WorkExperience";

export default function Resume() {
  return (
    <div className={classes.container}>
      <h1>Resume</h1>
      <SectionHeader>Basic Info</SectionHeader>
      <BasicInfo />
      <SectionHeader>Work Experience</SectionHeader>
      <WorkExperience />
    </div>
  );
}
