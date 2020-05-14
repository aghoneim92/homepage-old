import React, { ReactNode } from "react";
import classes from "./ListItem.module.css";

interface Props {
  children: ReactNode;
}

const ListItem = ({ children }: Props) => (
  <li className={classes.listItem}>{children}</li>
);

export default ListItem;
