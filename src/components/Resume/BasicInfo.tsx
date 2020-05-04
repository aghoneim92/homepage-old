import React from "react";
import classes from "./BasicInfo.module.css";

export default function BasicInfo() {
  return (
    <table className={classes.infoTable}>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Ahmed Ghoneim</td>
        </tr>
        <tr>
          <td>Born</td>
          <td>30 September, 1992 in Alexandria, Egypt</td>
        </tr>
        <tr>
          <td>Country of Residence</td>
          <td>Egypt</td>
        </tr>
        <tr>
          <td>Degree</td>
          <td>BSc Computer Engineering, Alexandria University</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>+20 12 777 666 43</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="mailto:ahmedghoneim92@gmail.com">
              ahmedghoneim92@gmail.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
