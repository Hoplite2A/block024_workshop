/* eslint-disable no-unused-vars */
import { useState } from "react";
import { puppyList } from "./data";
// import "./index.css";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="thaBiggerDiv">
      {featPupId && (
        <div className="thaBigDiv">
          <h2 className="bigPuppa">{featuredPup.name}</h2>
          <h5 className="thaDeets">Age: {featuredPup.age}</h5>
          <h5 className="thaDeets">Email: {featuredPup.email}</h5>
          <br></br>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <h4
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </h4>
        );
      })}
    </div>
  );
}

export default App;
