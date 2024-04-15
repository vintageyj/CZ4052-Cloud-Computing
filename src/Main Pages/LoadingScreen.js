import React from "react";

function LoadingScreen() {
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

export default LoadingScreen;
