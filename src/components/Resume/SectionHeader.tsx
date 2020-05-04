import React, { ReactNode } from "react";
import classes from "./SectionHeader.module.css";

interface Props {
  children: ReactNode;
}

const SectionHeader = ({ children }: Props) => (
  <h2 className={classes.header}>{children}</h2>
);

export default SectionHeader;
