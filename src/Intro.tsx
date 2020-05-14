import React from "react";
import orbit from "./orbit.gif";
import "./Intro.css";

const kIntroText = "WHAT IS A YEAR? All of the planets in our solar system are moving (or REVOLVING) around the Sun. " +
  "When a planet goes around the Sun once we call it an ORBIT. A year is how long it takes a planet to orbit the Sun once. " +
  "On Earth, where we live, it takes 365 days to orbit the Sun. That's why one Earth year is 365 days! " +
  "However, some planets are very close to the Sun and orbit it much faster than Earth. " +
  "Other planets are very far from the Sun and orbit it much slower than Earth. " +
  "This means on some planets a year is very short while on other planets a year is very long. " +
  "How old would you be if you lived on another planet? If the planet orbits the Sun quickly and has short years, " +
  "you will have had more birthdays and be older! If the planet orbits the Sun slowly and has long years, " +
  "you will have had fewer birthdays and be younger! Enter your birthday and pick a planet to see how old you would be if grew up on another planet!";

export const Intro: React.FC = () => {
  return (
    <div className="introduction">
      <img height={200} src={orbit} alt={"orbit"}/>
      <div className="content">
        {kIntroText}
      </div>
    </div>
  );
};