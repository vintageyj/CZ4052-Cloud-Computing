import "../App.css";
import ImageUpload from "./ImageUploadComponent";
import React, { useState } from "react";
import ErrorPage from "./ErrorPage";
import LoadingScreen from "./LoadingScreen";
import ResultsPage from "./ResultsPage";
import getBreed from "../GetBreed";

function Home() {
  const [state, setState] = useState("image_upload");
  const [error, setError] = useState();
  const [previewImage, setPreviewImage] = useState();
  // Selected image data will be stored in imageSelected
  const [imageSelected, setImageSelected] = useState();
  // Result of the API call will be stored in result
  const [result, setResult] = useState(null);

  function onSelectImage(FileObject) {
    setImageSelected(FileObject);
    setPreviewImage(URL.createObjectURL(FileObject));
  }

  async function runModel() {
    setState("loading");
    const result = await getBreed(imageSelected);

    // API call completed
    setResult(result);
    setState("results");
  }

  function goBack() {
    setState("image_upload");
    setImageSelected();
    setPreviewImage();
  }

  if (error) {
    return <ErrorPage />;
  }

  if (state == "image_upload") {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <p style={{ fontSize: "200%" }}>Doggle</p>
            <img hidden={!previewImage} src={previewImage}></img>
          </div>
          <ImageUpload onSelectImage={onSelectImage} />
          <button
            className="btn btn-secondary"
            type="button"
            id="inputGroupFileAddon04"
            onClick={runModel}
            disabled={!imageSelected}
          >
            Run Model
          </button>
        </header>
      </div>
    );
  }

  if (state == "loading") {
    return <LoadingScreen />;
  }

  if (state == "results") {
    return <ResultsPage backButtonOnClick={goBack} results={result} />;
  }
}

export default Home;
