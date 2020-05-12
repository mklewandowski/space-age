import React from "react";
import orbit from "./orbit.gif";
import "./Intro.css";

const kIntroText = "WHAT IS A YEAR? A year is how long it takes a planet to go around the Sun - " +
  "we call this an ORBIT. On Earth, where we live, it takes 365 days to orbit the Sun. " +
  "Some planets orbit the Sun much faster than Earth. Other planets orbit the Sun much slower. " +
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