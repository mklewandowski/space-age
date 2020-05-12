import React from "react";
import mercury from "./mercury.png";
import venus from "./venus.png";
import mars from "./mars.png";
import jupiter from "./jupiter.png";
import saturn from "./saturn.png";
import uranus from "./uranus.png";
import neptune from "./neptune.png";
import pluto from "./pluto.png";
import "./Planets.css";

const planets = [{name: "Mercury", image: mercury},
                 {name: "Venus", image: venus},
                 {name: "Mars", image: mars},
                 {name: "Jupiter", image: jupiter},
                 {name: "Saturn", image: saturn},
                 {name: "Uranus", image: uranus},
                 {name: "Neptune", image: neptune},
                 {name: "Pluto", image: pluto}];

export interface IProps {
  onChoosePlanet: (planet: string) => void;
}

export const Planets: React.FC<IProps> = (props) => {

  const handleClick = (planet: string) => () => {
    props.onChoosePlanet(planet);
  };

  return (
    <div className="planets">
      <div className= "title">Choose a planet!</div>
      <div className="strip">
        { planets.map((planet, i) => {
            return (
              <div key={`planet-${i}`} className="planet" onClick={handleClick(planet.name)}>
                <img src={planet.image} alt={planet.name}/>
                {planet.name}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};