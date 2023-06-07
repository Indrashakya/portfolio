import { FaGithub, FaRocket } from 'react-icons/fa'
import './project.css'
import note from "../../assets/note.png";
import portfolio from "../../assets/portfolio.png";
import comingsoon from "../../assets/comingsoon.png";

const Projects = () => {
  return (
    <div id="projects">
      <main>
        <section className="cards">
          <div className="card">
            <div className="card__image-container">
              <img src={note} 
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Note
              </p>
              <div className="card__info">
                <p className="text--medium card__price "> <a href="https://dreamy-druid-458473.netlify.app/" target='_blank'>
                  <FaRocket />
                </a>
                </p>
                <p className="card__price text--medium">
                  <a href="https://github.com/Indrashakya/to_do_list" target='_blank'>

                    <FaGithub />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img src={portfolio} 
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Portfolio
              </p>
              <div className="card__info">
                <p className="text--medium card__price "> <a href="https://portfolio-72eb3.web.app/" target='_blank'>
                  <FaRocket />
                </a>
                </p>
                <p className="card__price text--medium">
                  <a href="https://github.com/Indrashakya/portfolio" target='_blank'>

                    <FaGithub />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src={comingsoon}
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                ecommerse 
              </p>
              <div className="card__info">
                <p className="text--medium card__price "><FaRocket /></p>
                <p className="card__price text--medium"><FaGithub /></p>
              </div>
            </div>
          </div>
          {/* <div className="card">
            <div className="card__image-container">
              <img
                src={comingsoon}
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
                <p className="text--medium card__price "><FaRocket /></p>
                <p className="card__price text--medium"><FaGithub /></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src={comingsoon}
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
                <p className="text--medium card__price "><FaRocket /></p>
                <p className="card__price text--medium"><FaGithub /></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src={comingsoon}
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
                <p className="text--medium card__price "><FaRocket /></p>
                <p className="card__price text--medium"><FaGithub /></p>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  )
}

export default Projects