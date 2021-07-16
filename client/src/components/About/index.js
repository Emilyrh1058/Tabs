import React from "react";
import backgroundVid from "../../assets/images/smoke.mp4";
// import Footer from "../Footer";

function About() {
  return (
    <section className="my-5">
      <div className="container d-flex flex-column text-center">
        <div className="p-2">
          <h1 id="about">TABS</h1>
          {<video
            src={backgroundVid}
            className="my-2"
            style={{ width: "100%" }}
            alt="smoke"
          />}
        </div>
        <div className="p-2">
          <p className="aboutMe">
          </p>
        </div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}

export default About;