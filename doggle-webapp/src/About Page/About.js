import React from "react";

function About() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center mt-5">About Us</h1>
      </header>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            augue velit. Donec vitae tortor consequat, facilisis nulla at,
            hendrerit dolor.
          </p>
          <p>
            Nullam sollicitudin convallis eros, nec convallis urna facilisis in.
            Curabitur nec augue sapien. Fusce quis diam ac dolor feugiat auctor.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Team</h2>
          <p>Meet the amazing team behind this project.</p>
          <ul>
            <li>Dion Toh Siyong</li>
            <li>Tan Yue Jun</li>
            <li>Jewel Wee</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
