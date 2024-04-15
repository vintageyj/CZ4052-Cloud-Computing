import React from "react";
import "./ResultsPage.css";

function ResultsPage({
  backButtonOnClick,
  results,
  breedsData,
  encyclopedia = false,
}) {
  let breedName,
    height,
    weight,
    lifeSpan,
    breedGroup,
    aboutTheBreed,
    moreInfoURL,
    imageURL,
    classID;

  if (!encyclopedia) {
    // If coming from detection
    classID = results.data["Class ID"];
    breedName = breedsData[classID]["Breed Name"];
    height = breedsData[classID]["Height"].split(" ")[0];
    weight = breedsData[classID]["Weight"];
    lifeSpan = breedsData[classID]["Life Span"].split(" ")[0];
    breedGroup = breedsData[classID]["Breed Group"];
    aboutTheBreed = breedsData[classID]["About the breed"];
    moreInfoURL = breedsData[classID]["URL"];
    imageURL = breedsData[classID]["Image URL"];
  } else {
    // If coming from encyclopedia
    breedName = results["Breed Name"];
    height = results["Height"].split(" ")[0];
    weight = results["Weight"];
    lifeSpan = results["Life Span"].split(" ")[0];
    breedGroup = results["Breed Group"];
    aboutTheBreed = results["About the breed"];
    moreInfoURL = results["URL"];
    imageURL = results["Image URL"];
  }

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
            {!encyclopedia && (
              <p class="class-label">{results.data["Class Label"]}</p>
            )}
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
            {!encyclopedia && (
              <p className="confidence">
                Model Prediction Confidence: {results.data["Confidence"]}%
              </p>
            )}
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
