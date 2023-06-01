import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5, faReact, faFileCode } from '@fortawesome/free-brands-svg-icons';
import Body from "../../container/body";
import './skills.css';

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
      name: "React",
      level: '70%',
      icon: faReact
    },
    {
      name: "Typescript",
      level: '70%',
      // icon: faFileCode
    },
    {
      name: "Ant Design",
      level: '70%',
      // icon: faFileCode // Use the appropriate Font Awesome icon here
    },
    {
      name: "Ag-Grid-react",
      level: '70%',
      // icon: faFileCode // Use the appropriate Font Awesome icon here
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