import React, { ReactNode } from "react";
import classes from "./WorkExperience.module.css";
import ListItem from "./ListItem";

interface JobDetails {
  from: string;
  to: string;
  company: string;
  location: string;
  position: string;
  companyDescription: string;
  responsibilities: ReactNode[];
  technologies: string[];
}

const jobs: JobDetails[] = [
  {
    from: "February 12th 2019",
    to: "May 7th 2020",
    company: "Careem",
    location: "Cairo, Egypt",
    companyDescription: "Careem BUS, a mass-transit app",
    position: "Fullstack software engineer",
    responsibilities: [
      <span>
        Created, along with a team, the internal portal for buses, bus lines,
        schedule, driver, growth, and user management using <b>React</b> and{" "}
        <b>Node.js</b>
      </span>,
      <span>
        Worked on various backend tasks using <b>Node.js</b>
      </span>,
      <span>
        Was responsible for mentoring other developers in Javascript,
        Typescript, Node.js, and React
      </span>,
      <span>
        Deployed and monitored our services using <b>AWS</b>, <b>Docker</b>, and{" "}
        <b>NewRelic</b>
      </span>,
    ],
    technologies: [
      "React",
      "Typescript",
      "Node.js",
      "Postgres",
      "Docker",
      "AWS",
    ],
  },
  {
    from: "December 4th 2017",
    to: "October 31st 2018",
    company: "friday.de",
    location: "Berlin, Germany",
    companyDescription: "An online car insurance provider",
    position: "Frontend developer",
    responsibilities: [
      "Worked on the friday.de website sales funnel using React",
      "Worked on the user portal for managing your insurance using React",
      "Built a public pricing API using Spring Boot",
    ],
    technologies: ["React", "Typescript", "Spring Boot", "AWS", "Docker"],
  },
  {
    from: "February 1st 2017",
    to: "October 31st 2017",
    company: "pruefungspaten.de",
    location: "Berlin, Germany",
    companyDescription:
      "An e-learning website providing courses for the german chamber of commerce",
    position: "Freelance full-stack web developer",
    responsibilities: [
      "Worked on an internal portal to manage courses and invoices",
      "Converted the website from UTF-16 to UTF-8",
      "Converted the website from PHP 5 to PHP 7",
      "Added git to the website",
    ],
    technologies: ["PHP", "mySQL"],
  },
  {
    from: "August 2014",
    to: "August 2016",
    company: "Eventum IT Solutions",
    location: "Alexandria, Egypt",
    companyDescription: "A networking management system provider",
    position: "Full-stack web developer",
    responsibilities: [
      "Ported the network management system from jsp and jquery to React",
      "Worked on the backend REST api using Spring MVC",
      "Built a charting library using d3.js",
      "Exported isomorphic charts to PDF",
      "Built a chart annotation tool in React",
    ],
    technologies: ["React", "Spring MVC", "D3.js"],
  },
];

function Job({
  details: {
    from,
    to,
    company,
    companyDescription,
    responsibilities,
    technologies,
    location,
    position,
  },
}: {
  details: JobDetails;
}) {
  return (
    <>
      <div className={classes.header}>
        <div>
          <h3 className={classes.companyName}>{company}</h3>
          <h4 className={classes.description}>{companyDescription}</h4>
          <h4 className={classes.position}>{position}</h4>
        </div>
        <div>
          <div>{location}</div>
          <div>
            {from} - {to}
          </div>
        </div>
      </div>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <ListItem key={index}>{responsibility}</ListItem>
        ))}
      </ul>
      <span>Technology stack: </span>
      <b>{technologies.join(", ")}</b>
    </>
  );
}

export default function WorkExperience() {
  return (
    <div>
      {jobs.map((details, index) => (
        <Job key={index} details={details} />
      ))}
    </div>
  );
}
