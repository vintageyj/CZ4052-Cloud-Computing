import "./App.css";
import ImageUpload from "./ImageUpload";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("loading");
  const [error, setError] = useState(false);

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
          <ImageUpload />
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
}

export default App;
