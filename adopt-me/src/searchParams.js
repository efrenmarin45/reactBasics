import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

//Hooks use current state (location) and the updated state (setLocation)
//All hooks will begin with the word "use"

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("All");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={event => setAnimal(event.target.value)}
            onBlur={event => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={event => setBreed(event.target.value)}
            onBlur={event => setBreed(event.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
            ;
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
