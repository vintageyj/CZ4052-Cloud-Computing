import "../App.css";
import ImageUpload from "../Components/ImageUpload/ImageUploadComponent";
import React, { useState } from "react";
import ErrorPage from "./ErrorPage";
import LoadingScreen from "./LoadingScreen";
import ResultsPage from "./ResultsPage";
import getBreed from "../GetBreed";
import HeroBanner from "../Hero Banner/HeroBanner";
import fetchCSVData from "../GetBreedInfo";
import SuggestedImages from "../Components/SuggestedImages/SuggestedImages";
import "./HomePage.css"; // Import CSS file

function Home() {
  const [state, setState] = useState("image_upload");
  const [error, setError] = useState();
  const [previewImage, setPreviewImage] = useState();
  // Selected image data will be stored in imageSelected
  const [imageSelected, setImageSelected] = useState();
  // Result of the API call will be stored in result
  const [result, setResult] = useState(null);
  // All the breeds data will be stored here
  const [breedsData, setBreedsData] = useState();

  function onSelectImage(FileObject) {
    setImageSelected(FileObject);
    setPreviewImage(URL.createObjectURL(FileObject));
  }

  async function runModel() {
    setState("loading");
    const result = await getBreed(imageSelected);
    const breedsData = await fetchCSVData();

    // API call completed
    setBreedsData(breedsData);
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

  if (state === "image_upload") {
    return (
      <div className="App-header">
        <HeroBanner
          imageUrl="https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786562.jpg?w=1060&t=st=1712644074~exp=1712644674~hmac=96d38e696ab9bad85ac26c3c8dc0c50bdb4f061938a20631dd10a0037faa6eb5"
          title="Doggle"
          subtext="Discover your dog's breed and explore fascinating facts with Doggle!"
          textColor="#000000"
        />
        <div className="App-body">
          <div className="container">
            <p className="mt-3" hidden={previewImage}>
              Upload an image of your dog, and we will detect its breed!
            </p>
            <p className="mt-3" hidden={!previewImage}>
              Your selected image:
            </p>
            <div className="text-center mb-3">
              <img
                hidden={!previewImage}
                src={previewImage}
                className="rounded image_preview"
              ></img>
            </div>
          </div>
          <ImageUpload onSelectImage={onSelectImage} />
          <button
            className="btn btn-secondary run_model_btn"
            type="button"
            id="inputGroupFileAddon04"
            onClick={runModel}
            disabled={!imageSelected}
          >
            Run Model
          </button>
        </div>
        <SuggestedImages onSelectImage={onSelectImage} />
      </div>
    );
  }

  if (state === "loading") {
    return <LoadingScreen />;
  }

  if (state === "results") {
    return (
      <ResultsPage
        backButtonOnClick={goBack}
        results={result}
        breedsData={breedsData}
        encyclopedia={false}
      />
    );
  }
}

export default Home;
