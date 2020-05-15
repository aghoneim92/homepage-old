import React from "react";

const languages = [
  {
    language: "English",
    proficiency: "Near-native",
  },
  {
    language: "Arabic",
    proficiency: "Native",
  },
  {
    language: "German",
    proficiency: "Intermediate",
  },
];

export default function Languages() {
  return (
    <table>
      <tbody>
        {languages.map(({ language, proficiency }, index) => (
          <tr key={index}>
            <td>{language}:</td>
            <td>{proficiency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
