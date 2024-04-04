import "./App.css";
import ImageUpload from "./ImageUpload";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("image_upload");
  const [error, setError] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);

  function onImageSelect() {
    console.log("IMAGE SELECTED!");
    setState("loading");

    // Simulate API call with a delay of 2 seconds
    setTimeout(() => {
      // API call completed
      setState("results");
    }, 2000);
  }

  function goBack() {
    console.log("GO BACK!");
    setState("image_upload");
  }

  if (error == "true") {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <p style={{ fontSize: "200%" }}>ERROR!</p>
          </div>
        </header>
      </div>
    );
  }

  if (state == "image_upload") {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <p style={{ fontSize: "200%" }} hidden={imageSelected}>
              Doggle
            </p>
            <img hidden={!imageSelected}>{/* add image here */}</img>
          </div>
          <ImageUpload onImageSelect={onImageSelect} />
        </header>
      </div>
    );
  }

  if (state == "loading") {
    return (
      <div className="App">
        <header className="App-header">
          <div class="d-flex justify-content-center">
            <div
              class="spinner-border"
              style={{ width: "10rem", height: "10rem" }}
              role="status"
            ></div>
          </div>
        </header>
      </div>
    );
  }

  if (state == "results") {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <p style={{ fontSize: "200%" }}>Results!</p>
            <button className="btn btn-primary" onClick={goBack}>
              Go back!
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
