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
            friends.
          </p>
          <p>
            Whether you're a dog enthusiast or simply curious about different
            breeds, Doggle is here to make your dog identification experience
            enjoyable and educational. With Doggle, you can explore the diverse
            world of dog breeds and deepen your understanding of man's best
            friend. Join us in celebrating the unique characteristics and traits
            of every dog breed with Doggle!
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
