import React from "react";
import astro1 from "./astro1.gif";
import astro2 from "./astro2.gif";
import astro3 from "./astro3.gif";
import astro4 from "./astro4.gif";
import astro5 from "./astro5.gif";
import astro6 from "./astro6.gif";
import astro7 from "./astro7.gif";
import astro8 from "./astro8.gif";
import astro9 from "./astro9.gif";
import "./Age.css";

export interface IProps {
  planet?: string;
  age?: number;
}

const planets = [{name: "Mercury", yearLength: 88, astroImage: astro1, text1: "However, Mercury orbits the Sun much faster than Earth does!", text2: "A year on Mercury is only about 3 months on Earth."},
                 {name: "Venus", yearLength: 225, astroImage: astro2, text1: "However, Venus orbits the Sun faster than Earth does!", text2: "A year on Venus is only about 8 months on Earth."},
                 {name: "Mars", yearLength: 687, astroImage: astro3, text1: "However, it takes Mars about twice as long to orbit the Sun!", text2: "You need to wait almost 2 Earth years for 1 Martian year to go by!"},
                 {name: "Jupiter", yearLength: (365 * 11.86), astroImage: astro4, text1: "However, Jupiter orbits the Sun much slower than Earth does!", text2: "A single year on Jupiter lasts about 12 Earth years!"},
                 {name: "Saturn", yearLength: (365 * 29.46), astroImage: astro5, text1: "However, Saturn orbits the Sun much slower than Earth does!", text2: "A single year on Saturn lasts almost 30 Earth years!"},
                 {name: "Uranus", yearLength: (365 * 84.01), astroImage: astro6, text1: "However, Uranus orbits the Sun much slower than Earth does!", text2: "A single year on Uranus is absurdly long - about 84 Earth years!"},
                 {name: "Neptune", yearLength: (365 * 164.79), astroImage: astro7, text1: "However, Neptune orbits the Sun much slower than Earth does!", text2: "A single year on Neptune lasts an astounding 165 Earth years!"},
                 {name: "Pluto", yearLength: (365 * 248.59), astroImage: astro8, text1: "However, Pluto orbits the Sun much slower than Earth does!", text2: "A single year on Pluto lasts a shocking 248 Earth years!"},
                ];

export const Age: React.FC<IProps> = (props) => {
  const earthAge = props.age ? Math.floor(props.age / 365.25) : 0;
  let planetAge = 0;
  let planetYear = 0;
  let relationString = "";
  let reactionString = "";
  let astro = astro9;
  if (props.age) {
    const planet = planets.find((p) => p.name === props.planet);
    if (planet) {
      planetAge = Math.floor(props.age / planet.yearLength);
      planetYear = Math.round(planet.yearLength);
      astro = planet.astroImage;
      relationString = `${planet.text1} `;
      reactionString = `${planet.text2} `;
    }
  }
  const earthAgeString = `You are ${earthAge} years old on Earth. `;
  const planetYearString = `On ${props.planet} a year is ${planetYear} Earth days long! `;
  const yearsOldString = (planetAge < 1)
                          ? "not even be 1 year old"
                          : `be ${planetAge} year${(planetAge === 1) ? "" : "s"} old`
  const planetAgeString = `That means you would ${yearsOldString} on ${props.planet}!! `;
  const message = earthAgeString + relationString + planetYearString + reactionString + planetAgeString;
  return (
    <div className="age">
      <div className="strip">
        <div>
          <img height={200} src={astro} alt="astronaut"/>
        </div>
        { props.planet
        ? <div className="content">
            <div className="title">{props.planet}</div>
            <div>{message}</div>
          </div>
        : <div className="content">Enter a birthday and choose a planet to see your planetary age...</div>
        }
      </div>
    </div>
  );
};