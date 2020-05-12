import React from "react";
import orbit from "./orbit.gif";

const kIntroText = "On planet Earth, we celebrate our birthday once a year. Did you know a year is how long it takes a planet " +
                   "to orbit around the Sun? An Earth year is 365 days long because it takes 365 days for the Earth to orbit the Sun. " +
                   "However, other planets orbit the Sun faster or slower than Earth. A year is actually longer or shorter on other " +
                   "planets! That means you would have a different age if you lived on another planet!";

export const Intro: React.FC = () => {
  return (
    <div className="introduction">
      <img height={210} src={orbit} alt={"orbit"}/>
      <div className="content">
        {kIntroText}
      </div>
    </div>
  );
};