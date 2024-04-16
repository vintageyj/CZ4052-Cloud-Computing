import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  const [displayMessage, setDisplayMessage] = useState(
    "Establishing connection to our server..."
  );
  const [subMessage, setSubMessage] = useState("");

  const messages = [
    "Sending your dog's photo to our model... Sit tight for the perfect match!",
    "Our model is busy analyzing your pup's image... Almost there!",
    "Results incoming! We've fetched your dog's breed with precision.",
  ];

  const submessage =
    "Apologies for the delay! Our server is revving up the model due to inactivity. Expect faster results on your next try!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayMessage(messages[currentIndex]);
      currentIndex++;
      if (currentIndex >= messages.length) {
        clearInterval(interval);
      }
      if (currentIndex == 1) {
        setSubMessage(submessage);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <div className="spinner-border loading_wheel" role="status" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <div className="message">{displayMessage}</div>
            </div>
          </div>
          <div className="submessage">{subMessage}</div>{" "}
          {/* Added submessage */}
        </div>
      </header>
    </div>
  );
}

export default LoadingScreen;
