import { Link } from "react-router-dom";
import Body from "../../container/body";
import "./aboutMe.css";
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
              My Developer with Lackground Accounting. I know no one believe
              this but I am really interested to learning new technologies and
              new field. I am passionate about technology and implementing them
              in this constantly evolving industry. 1am currently Serving as a
              frontend developer for at Lunavi Clint is DHS
              Nebraska(https://iserve.nebraska.gov)
            </p>
          </div>
          <div className="action_container">
            <Link to="/about">
              <button>ABOUT ME</button>
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
