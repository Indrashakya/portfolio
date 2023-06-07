import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5, faReact, faBootstrap, faMicrosoft, faNodeJs, faMix } from '@fortawesome/free-brands-svg-icons';
import Body from "../../container/body";
import './skills.css';
import { faCalculator, faFireAlt, faMehBlank, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { RiNodeTree } from 'react-icons/ri';
import { FaMix } from 'react-icons/fa';


function Skills() {
  const skillsArray = [
    {
      name: "Javascript",
      level: '60',
      icon: faJs
    },
    {
      name: "CSS",
      level: '65',
      icon: faCss3Alt
    },
    {
      name: "BootStrap",
      level: '67',
      icon:faBootstrap
    },
    {
      name: "HTML5",
      level: '70',
      icon: faHtml5
    },
    {
      name: "ReactJS",
      level: '55',
      icon: faReact
    },
    {
      name: "Ag-Grid-react",
      level: '70',
      icon: faReact
    },
    {
      name: "Firebase",
      level: '70',
      icon: faFireAlt 
    },
    {
      name: "Redux ",
      level: '75',
      icon: faReact
    },
    {
      name: "Notepad++ ",
      level: '75',
      icon: faNoteSticky
    },
    {
      name: " Material UI ",
      level: '75',
      icon: faMehBlank
    },
    {
      name: "IDE : VS code, Eclipse, Intellij Idea ",
      level: '75',
      icon: faMix
    },
    {
      name: "Accounting ",
      level: '75',
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
                    <meter max='100' value={skill.level} style={{width:'100%'}}></meter>
                    <br/>
                    <br/>
                    <div className="card__info">
                      <p className="text--medium project-btn"></p>
                      <p className="card__price text--medium">{`${skill.level}%`}</p>
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