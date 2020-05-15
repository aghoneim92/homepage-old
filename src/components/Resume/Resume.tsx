import React from "react";
import classes from "./Resume.module.css";
import SectionHeader from "./SectionHeader";
import BasicInfo from "./BasicInfo";
import WorkExperience from "./WorkExperience";
import AreasOfExpertise from "./AreasOfExpertise";
import Skills from "./Skills";
import Languages from "./Languages";

export default function Resume() {
  return (
    <div className={classes.container}>
      <h1>Ahmed Ghoneim - Resume</h1>
      <SectionHeader>Basic Info</SectionHeader>
      <BasicInfo />
      <SectionHeader>Areas of Expertise</SectionHeader>
      <AreasOfExpertise />
      <SectionHeader>Skills</SectionHeader>
      <Skills />
      <SectionHeader>Work Experience</SectionHeader>
      <WorkExperience />
      <SectionHeader>Languages</SectionHeader>
      <Languages />
    </div>
  );
}
