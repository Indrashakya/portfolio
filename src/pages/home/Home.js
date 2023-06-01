import React, { Component } from "react";
import Body from "../../container/body";
import Typewriter from "typewriter-effect";

class HomePage extends Component {
  render() {
    return (
      <Body>
        <div className="About Home" id="about">
          <div className="about-section">
            <div className="main text-center mb-3">
             <div className="main_title"> Hi, I am</div>
              <div className="main_name" >
                <><span style={{color:'#3a678a'}}> Indra</span> Shakya 👋</>

              </div>
            </div>
            {/* <div className="sub">
              <Typewriter
                options={{
                  strings: ["React Frontend Engineer", "Accuntant"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />

            </div> */}
            <div className="description">
              <div>
                <p>
                  My Developer with background Accounting. I know no one believe
                  this but I am really interested to learning new technologies and
                  new field. I am passionate about technology and implementing them
                  in this constantly evolving industry.
                  <br />
                </p>
              </div>
            </div>
            <br />
            <ul className="about-details">
              {((item, index) => {
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

export default HomePage;
