import React from "react";

function ResultsPage({ backButtonOnClick, results, imageSelected, breedsData}) {
  // console.log("Debug", results.data);
  // console.log("Debug", breedsData);
  const classID = results.data['Class ID'];
  const breedName = breedsData[classID]['Breed Name'];
  const height = breedsData[classID]['Height'];
  const weight = breedsData[classID]['Weight'];
  const lifeSpan = breedsData[classID]['Life Span'];
  const breedGroup = breedsData[classID]['Breed Group'];
  const aboutTheBreed = breedsData[classID]['About the breed'];
  const moreInfoURL = breedsData[classID]['URL'];
  const imageURL = breedsData[classID]['Image URL'];

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p style={{ fontSize: "200%" }}>Results!</p>
          <div>
          <img
                src={URL.createObjectURL(imageSelected)}
                className="rounded"
              ></img>
            <p>Breed: {results.data['Class Label']}</p>
            <p>Confidence: {results.data['Confidence']}%</p>
            <img
                src={imageURL}
                className="rounded"
              ></img>
            <p>Breed Name: {breedName}</p>
            <p>Breed Group: {breedGroup}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Life Expectancy: {lifeSpan}</p>
            <p>About the Breed: {aboutTheBreed}</p>
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
