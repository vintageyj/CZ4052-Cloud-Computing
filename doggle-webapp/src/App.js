import "./App.css";
import ImageUpload from "./ImageUpload";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("image_upload");
  const [error, setError] = useState(false);

  function imageSelected() {
    console.log("IMAGE SELECTED!");
    setState("loading");

    // Simulate API call with a delay of 2 seconds
    setTimeout(() => {
      // API call completed
      setState("results");
    }, 2000); // 2000 milliseconds = 2 seconds
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
            <p style={{ fontSize: "200%" }}>Doggle</p>
          </div>
          <ImageUpload onImageSelect={imageSelected} />
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
          </div>
        </header>
      </div>
    );
  }
}

export default App;
