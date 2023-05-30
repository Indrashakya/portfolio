import Body from "../../container/body";
import SkillsSection from "./Skill";
import './skills.css'



function Skills() {
  const skillsArray = [
    {
      name:"Javascript",
      level:'70%',
     

    },
    {
      name:"Javascript",
      level:'70%',

    },
    {
      name:"CSS",
      level:'70%',

    },
    {
      name:"HTML",
      level:'90%',

    },
    {
      name:"React",
      level:'70%',

    },
    {
      name:"Typescript",
      level:'70%',

    },
     {
      name:"Ant Design",
      level:'70%',

    },
  ]
  return (
    <Body>
      <div>
        <div>
          <div title={'My Skills'} span={'My Skills'} />
          <div className="skillsContainer">
            <div className="cards_skill">
              {
                skillsArray.map((list) => (
                  <div className="card_skill">
                    <div className="card__content__skill">
                      <p className="card__title text--medium">
                        {list.name}
                      </p>
                      <div className="card__info">
                        <p className="text--medium project-btn"></p>
                        <p className="card__price text--medium">{list.level}</p>
                      </div>
                    </div>
                  </div>
                ))

              }
            </div>
           
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Skills;
