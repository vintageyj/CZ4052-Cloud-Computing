import React from "react";

function ResultsPage({ backButtonOnClick, results }) {
  console.log("Debug", results.data);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p style={{ fontSize: "200%" }}>Results!</p>
          <div>
            <p>Breed: {results.data['Class Label']}</p>
            <p>Confidence: {results.data['Confidence']}%</p>
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
