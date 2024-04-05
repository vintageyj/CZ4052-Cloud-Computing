import React from "react";

function ResultsPage({ backButtonOnClick }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p style={{ fontSize: "200%" }}>Results!</p>
          <button className="btn btn-primary" onClick={backButtonOnClick}>
            Go back!
          </button>
        </div>
      </header>
    </div>
  );
}

export default ResultsPage;
