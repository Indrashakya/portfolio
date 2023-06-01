import { Link } from "react-router-dom";
import Body from "../../container/body";
import "./aboutMe.scss";
import Logo from "../../assets/home.png";
import Resume from "../../assets/resume.pdf";
function AboutMe() {
  return (
    <Body>
      <div className="row_wrapper">
        <div className="col col-1">
          <div className="title">
            <div>About Me</div>
          </div>
          <div className="description">
            <p>
             
              <br />
              <br />
              I am a React Frontend Engineer. I have expertise in developing
              frontend using HTML5, CSS, ReactJS, bootstrap and MUI with the
              webpage Browser Compatibility and Responsive Web Design. I am
              skilled in the use of these frameworks to develop web
              applications based on Single Page Applications (SPA)
              architectures.
              <br />
              <br />I belief Information technology has the power to change
              the world and control the world, and I want to be a part of IT.
              I realize it will take collaboration, creativity, and dedication
              to make an impact, but I'm willing to do what it takes to make
              sure that impact is positive.

            </p>
          </div>
          <div className="action_container">
            <Link to="/contact">
              <button>CONTACT ME</button>
            </Link>
            <a href={Resume} download>
              <button>GET CV</button>
            </a>
          </div>
        </div>
        <div className="col col-2">
          <div className="image_wrapper">
            <img src={Logo} />
          </div>
        </div>
      </div>
    </Body>
  );
}

export default AboutMe;
