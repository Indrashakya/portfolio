import React, { Component } from "react";
import Body from "../../container/body";
import { Details } from "./Details.js";

class Home extends Component {
  render() {
    return (
      <Body>

        <div className="About" id="about">
          <div className="about-section">
            <h1 className="about-header">
             Indra Shakya
              <hr className="divider" />
            </h1>

            <div className="description">
              <div>
                <p>
                  I am a React Frontend Engineer. I have expertise in developing
                  frontend using HTML5, CSS, ReactJS, bootstrap and MUI with the
                  webpage Browser Compatibility and Responsive Web Design. I am
                  skilled in the use of these frameworks to develop web
                  applications based on Single Page Applications (SPA)
                  architectures.
                  <br />I belief Information technology has the power to change
                  the world and control the world, and I want to be a part of IT.
                  I realize it will take collaboration, creativity, and dedication
                  to make an impact, but I'm willing to do what it takes to make
                  sure that impact is positive.
                </p>
              </div>
            </div>
            <br />
            <ul className="about-details">
              {Details?.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Body>

    );
  }
}

export default Home;
