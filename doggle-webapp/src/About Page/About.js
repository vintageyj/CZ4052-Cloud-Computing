import React from "react";

function About() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center mt-5">About Us</h1>
      </header>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>What we do</h2>
          <p>
            Doggle is your go-to platform for identifying dog breeds using
            cutting-edge computer vision technology. Simply upload a picture of
            a dog, and let Doggle do the rest. Not only does Doggle provide
            accurate breed identification, but it also offers fascinating fun
            facts about each breed, allowing you to learn more about your furry
            friends. Whether you're a dog enthusiast or simply curious about
            different breeds, Doggle is here to make your dog identification
            experience enjoyable and educational.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Team</h2>
          <p>Meet the amazing team behind this project:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dsiyong/"
                target="_blank"
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Dion Toh Siyong
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yuejuntan/"
                target="_blank"
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Tan Yue Jun
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jewelwee"
                target="_blank"
                class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Jewel Wee
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
