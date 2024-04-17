import React, { useState, useEffect } from "react";
import "./Encyclopedia.css";
import fetchJSONData from "../GetBreedInfo";
import ResultsPage from "../Main Pages/ResultsPage";

function Encyclopedia() {
  const [state, setState] = useState("loading");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedsData, setBreedsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setState("loading");
      try {
        const data = await getData();
        setBreedsData(data);
        setState("data_fetched");
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
        setState("error");
      }
    }
    fetchData();
  }, []);

  async function getData() {
    return fetchJSONData();
  }

  function selectBreed(breedData) {
    setState("selected");
    setSelectedBreed(breedData);
  }

  function resetToEncyclopedia() {
    setState("data_fetched");
    setSelectedBreed("");
  }

  if (state === "loading") {
    return (
      // Loading Screen
      <div className="App">
        <header className="Results-body">
          <div className="container">Loading...</div>
        </header>
      </div>
    );
  }

  if (state === "data_fetched") {
    return (
      // Loaded Screen
      <div className="App">
        <header className="Results-body">
          <div className="container enc-container">
            <p className="header">Our Dog Breed Encyclopedia</p>
            <div className="card-container">
              {breedsData.map((data) => (
                <div
                  className="card"
                  key={data["Breed Name"]}
                  style={{ width: "20%" }}
                  onClick={() => {
                    selectBreed(data);
                  }}
                >
                  <img src={data["Image URL"]} alt={data["Breed Name"]} />
                  <div className="card-body">
                    <p className="card-text" style={{ fontSize: "1vw" }}>
                      {data["Breed Name"]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    );
  }

  if (state === "selected") {
    return (
      <ResultsPage
        backButtonOnClick={resetToEncyclopedia}
        results={selectedBreed}
        encyclopedia={true}
      />
    );
  }
}

export default Encyclopedia;
