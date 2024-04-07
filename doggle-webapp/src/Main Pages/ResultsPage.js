import React from "react";

function ResultsPage({ backButtonOnClick, results }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p style={{ fontSize: "200%" }}>Results!</p>
          <div>
            <p>Results:{results.data}</p>
          </div>
          <button className="btn btn-primary" onClick={backButtonOnClick}>
            Go back!
          </button>
        </div>
      </header>
    </div>
  );
}

export default ResultsPage;
