import React from "react";
import astro1 from "./astro1.gif";
import astro2 from "./astro2.gif";
import astro3 from "./astro3.gif";
import astro4 from "./astro4.gif";
import astro5 from "./astro5.gif";
import astro6 from "./astro5.gif";
import astro7 from "./astro5.gif";
import astro8 from "./astro5.gif";
import astro9 from "./astro5.gif";

export interface IProps {
  planet?: string;
  age?: number;
}

const planets = [{name: "Mercury", yearLength: 88},
                 {name: "Venus", yearLength: 225},
                 {name: "Mars", yearLength: 687},
                 {name: "Jupiter", yearLength: (365 * 12)},
                 {name: "Saturn", yearLength: (365 * 29.5)},
                 {name: "Uranus", yearLength: (365 * 84)},
                 {name: "Neptune", yearLength: (365 * 165)},
                 {name: "Pluto", yearLength: (365 * 248)}
                ];

const astroImages = [astro1, astro2, astro3, astro4, astro5,
                    astro6, astro7, astro8, astro9]

export const Age: React.FC<IProps> = (props) => {
  const earthAge = props.age ? Math.floor(props.age / 365) : 0;
  let planetAge = 0;
  let planetYear = 0;
  if (props.age) {
    const planet = planets.find((p) => p.name === props.planet);
    if (planet) {
      planetAge = Math.round(props.age / planet.yearLength);
      planetYear = Math.round(planet.yearLength);
    }
  }
  const num = Math.floor(Math.random() * 5) + 1;
  const astro = astroImages[num];
  const planetYearString = `However, on ${props.planet} a year is ${planetYear} Earth days long!`;
  const yearsOldString = (planetAge < 1)
                          ? "not even 1 year old"
                          : `${planetAge} year${(planetAge === 1) ? "" : "s"} old`
  const planetAgeString = `That means you are ${yearsOldString} on ${props.planet}.`;
  return (
    <div className="age">
      { props.planet
        ? <div className="strip">
            <div>
              <img height={200} src={astro} alt="astronaut"/>
            </div>
            <div className="content">
              <div className="title">{props.planet}</div>
              <div>{`You are ${earthAge} years old on Earth.`}</div>
              <div>{`${planetYearString} ${planetAgeString}`}</div>
            </div>
          </div>
        : null
      }
    </div>
  );
};