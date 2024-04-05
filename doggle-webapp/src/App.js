import "./App.css";
import ImageUpload from "./ImageUpload";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("image_upload");
  const [error, setError] = useState(false);
  const [imageSelected, setImageSelected] = useState();

  function onSelectImage(URLobject) {
    setImageSelected(URLobject);
  }

  function runModel() {
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
    setImageSelected();
  }

  if (error == "true") {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
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
          <div className="container">
            <p style={{ fontSize: "200%" }}>Doggle</p>
            <img hidden={!imageSelected} src={imageSelected}></img>
          </div>
          <ImageUpload onSelectImage={onSelectImage} />
          <button
            className="btn btn-secondary"
            type="button"
            id="inputGroupFileAddon04"
            onClick={runModel}
          >
            Run Model
          </button>
        </header>
      </div>
    );
  }

  if (state == "loading") {
    return (
      <div className="App">
        <header className="App-header">
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border"
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
          <div className="container">
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
