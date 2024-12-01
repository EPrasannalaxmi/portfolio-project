/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a final year student at Rajiv Gandhi University of Knowledge Technologies, pursuing Bachelors in the field of Computer Science.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "HTML, CSS & JS",
  "React JS",
  "REST APIs using Springboot",
  "C programming language",
  "Data Structures and Algorithms",
];


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>
          <b style={{fontWeight:"400"}}>Internship</b>: Worked as SDE intern at Cot Tetha LLC.<br></br>
           During the internship, I worked with the digital transformation team to develop a web application that includes:
          <ul>
            <li>QR Code generator</li>
            <li>Pass generator</li>
            <li>NFC Reader</li>
          </ul>
          <b style={{fontWeight:"400"}}>Technology Stack:</b>
          <ul>
            <li>React Js</li>
            <li>CSS</li>
            <li>Node JS</li>
            <li>MongoDB</li>
          </ul>
        </p>
        <hr/>
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
