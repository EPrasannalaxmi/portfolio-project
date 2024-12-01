/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";


/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ecommerce",
    description:
      "A web application for clothing store that isOversaw the curation and management of a diverse clothing collection for an online store, enhancing product visibility and customer satisfaction. ",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Java REST API",
    description:
      "Java REST API using springboot, that takes a json file input and gives the same for any GET method called. It focuses on pass details for driver's license."
  },
  {
    title: "Netflix Dashboard",
    description:
      "Created a dashboard for Netflix, for its dataset available online using PowerBI."
  },
  {
    title: "Console based bank management system",
    description:
      "Coded for a bank management system in Java where the user can cedit, debit and check balance."
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img id="deskImage"
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="project-box" key={project.title}>
              {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a> */}
              <h3>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        /* Keyframe animation for a bouncing image */
        @keyframes bounce {
         0% {
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1); /* Zoom in */
          }
          100% {
            transform: scale(0.5); /* Zoom out */
          }
        }


        /* Apply the bounce animation */
        #deskImage{
          width: 300px;
          height: 300px;
          animation: bounce 5s infinite; /* Apply bounce animation */
        }

        

        .project-box {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .project-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          cursor: pointer
      }
      `}</style>

    </section>
  );
};



export default Portfolio;
