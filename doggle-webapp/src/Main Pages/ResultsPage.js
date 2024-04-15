import React from "react";
import "./ResultsPage.css";

function ResultsPage({
  backButtonOnClick,
  results,
  imageSelected,
  breedsData,
}) {
  console.log("Debug", results.data);
  // console.log("Debug", breedsData);
  const classID = results.data["Class ID"];
  const breedName = breedsData[classID]["Breed Name"];
  const height = breedsData[classID]["Height"].split(" ")[0];
  const weight = breedsData[classID]["Weight"];
  const lifeSpan = breedsData[classID]["Life Span"].split(" ")[0];
  const breedGroup = breedsData[classID]["Breed Group"];
  const aboutTheBreed = breedsData[classID]["About the breed"];
  const moreInfoURL = breedsData[classID]["URL"];
  const imageURL = breedsData[classID]["Image URL"];

  return (
    <div className="App">
      <header className="Results-body">
        <div className="container">
          <p class="header">Your Dog is a...</p>
          <div>
            {/* <img
                src={URL.createObjectURL(imageSelected)}
                className="rounded"
              ></img> */}
            <p class="class-label">{results.data["Class Label"]}</p>
            <div className="breed-chracteristics-container">
              <img src={imageURL} style={{ paddingLeft: "5%" }}></img>
              <div class="grid-container">
                <div class="item">
                  <h3>
                    <strong>Breed Name:</strong>
                  </h3>
                  <p>{breedName}</p>
                </div>
                <div class="item">
                  <h3>
                    <strong>Breed Group:</strong>
                  </h3>
                  <p>{breedGroup}</p>
                </div>
                <div class="item">
                  <h3>
                    <strong>Height:</strong>
                  </h3>
                  <p>{height}"</p>
                </div>
                <div class="item">
                  <h3>
                    <strong>Weight:</strong>
                  </h3>
                  <p>{weight}s</p>
                </div>
                <div class="item">
                  <h3>
                    <strong>Life Expectancy:</strong>
                  </h3>
                  <p>{lifeSpan} years</p>
                </div>
              </div>
            </div>
            <p className="breed-desc">{aboutTheBreed}</p>
            <p className="confidence">
              Model Prediction Confidence: {results.data["Confidence"]}%
            </p>
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
