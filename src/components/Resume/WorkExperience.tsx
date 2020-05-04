import React from "react";
import classes from "./WorkExperience.module.css";

interface JobDetails {
  from: string;
  to: string;
  company: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const jobs: JobDetails[] = [
  {
    from: "February 12th 2019",
    to: "present",
    company: "Careem",
    location: "Cairo, Egypt",
    description:
      "Fullstack software engineer at Careem BUS. We provide a mass-transit system for the Middle-East region.",
    responsibilities: [
      "Worked on internal tooling for network management using React and Node.js",
      "Worked on the Bus backend using node.js",
      "Worked on deploying and monitoring our services using AWS and Docker",
    ],
    technologies: ["Node.js", "Postgres", "React", "Docker", "AWS"],
  },
  {
    from: "December 4th 2017",
    to: "October 31st 2018",
    company: "Friday.de",
    location: "Berlin, Germany",
    description:
      "Frontend developer at friday.de, an online car insurance provider.",
    responsibilities: [
      "Worked on the friday.de website sales funnel using React",
      "Worked on the user portal for managing your insurance using React",
      "Built a public API using Spring Boot",
    ],
    technologies: ["React", "Spring Boot", "AWS", "Docker"],
  },
  {
    from: "February 1st 2017",
    to: "October 31st 2017",
    company: "pruefungspaten.de",
    location: "Berlin, Germany",
    description:
      "Freelance full-stack web developer at an e-learning website providing courses for the german chamber of commerce",
    responsibilities: [
      "Converted the website from UTF-16 to UTF-8",
      "Added git to the website",
      "Worked on internal tooling to manage coures and invoices",
      "Converted the website from PHP 5 to PHP 7",
    ],
    technologies: ["PHP"],
  },
  {
    from: "August 2014",
    to: "August 2016",
    company: "Eventum IT Solutions",
    location: "Alexandria, Egypt",
    description:
      "Full-stack web developer at a networking management system provider",
    responsibilities: [
      "Converted the tool to React.js",
      "Built a charting library using d3.js",
      "Built a chart annotation tool in React",
    ],
    technologies: ["React", "Spring MVC"],
  },
];

function Job({
  details: {
    from,
    to,
    company,
    description,
    responsibilities,
    technologies,
    location,
  },
}: {
  details: JobDetails;
}) {
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.companyName}>{company}</h3>
        <div>
          <div>{location}</div>
          <div>
            {from} - {to}
          </div>
        </div>
      </div>
      <h4 className={classes.description}>{description}</h4>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <span>Technology stack: </span>
      {technologies.join(", ")}
    </>
  );
}

export default function WorkExperience() {
  return (
    <>
      {jobs.map((details, index) => (
        <Job key={index} details={details} />
      ))}
    </>
  );
}
