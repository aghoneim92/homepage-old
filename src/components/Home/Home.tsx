import React from "react";
import classes from "./Home.module.css";
import graduation from "./graduation.jpg";
import githubLogo from "./githubLogo.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={classes.container}>
      <header className={classes.header}></header>
      <main className={classes.main}>
        <img
          alt="Profile"
          src={graduation}
          className={classes.profilePicture}
        />
        <h1 className={classes.name}>Ahmed Ghoneim</h1>
        <h3 className={classes.profession}>Software Engineer</h3>
        <Link className={classes.buttonLink} to="/resume">
          Resume
        </Link>
        <a
          className={classes.buttonLink}
          href="https://github.com/aghoneim92/homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source on Github
        </a>
      </main>
      <footer className={classes.footer}>
        <a
          className={classes.githubLink}
          href="https://github.com/aghoneim92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Github logo" src={githubLogo} />
          <span className={classes.githubHandle}>@aghoneim92</span>
        </a>
      </footer>
    </div>
  );
}
