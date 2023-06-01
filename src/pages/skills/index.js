import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5, faReact, faFileCode, faBootstrap, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Body from "../../container/body";
import './skills.css';
import { faCalculator, faFire, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import { ProgressBar } from 'react-bootstrap';


function Skills() {
  const skillsArray = [
    {
      name: "Javascript",
      level: '70%',
      icon: faJs
    },
    {
      name: "CSS",
      level: '70%',
      icon: faCss3Alt
    },
    {
      name: "HTML",
      level: '90%',
      icon: faHtml5
    },
    {
      name: "BootStrap",
      level: '70%',
      icon:faBootstrap
    },
    {
      name: "HTML5",
      level: ()=>{
        return(
          <span>
            <ProgressBar percent={parseInt(80)} width={80}/>
          </span>
        )
      },
      icon: faHtml5
    },
    {
      name: "React",
      level: '70%',
      icon: faReact
    },
    {
      name: "Ag-Grid-react",
      level: '70%',
      icon: faReact
    },
    {
      name: "Firebase",
      level: '70%',
      icon: faFireAlt 
    },
    {
      name: "MS Office ",
      level: '70%',
      icon: faMicrosoft 
    },
    {
      name: "Accounting ",
      level: '70%',
      icon: faCalculator
    },
  ];

  return (
    <Body>
      <div>
        <div>
          <div title={'My Skills'} span={'My Skills'} />
          <div className="skillsContainer">
            <div className="cards_skill">
              {skillsArray.map((skill) => (
                <div className="card_skill">
                  <div className="card__content__skill">
                    <p className="card__title text--medium">
                      <div className="skills_title">

                      <FontAwesomeIcon icon={skill.icon} className="icon" />
                      <div>

                       {skill.name}
                      </div>
                      </div>
                    </p>
                    <div className="card__info">
                      <p className="text--medium project-btn"></p>
                      <p className="card__price text--medium">{skill.level}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Skills;