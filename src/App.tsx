import React, { useState } from 'react';
import { Intro } from "./Intro";
import { Birthdate } from "./Birthdate";
import { Planets } from "./Planets";
import { Age } from "./Age";
import "./App.css";

function App() {
  const [currentAge, setCurrentAge] = useState(0);
  const [currentPlanet, setCurrentPlanet] = useState("");

  const handleChoosePlanet = (planet: string) => {
    setCurrentPlanet(planet);
  };
  const handleSetAge = (age: number) => {
    setCurrentAge(age);
  };

  return (
    <div className="app">
      <div className="app-header">
        Space Age
      </div>
      <Intro/>
      <div className="chooser">
        <Birthdate onSetAge={handleSetAge} />
        <Planets onChoosePlanet={handleChoosePlanet} />
      </div>
      <Age
        planet={currentPlanet}
        age={currentAge}
      />
    </div>
  );
}

export default App;
