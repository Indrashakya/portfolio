import { FaGithub, FaRocket } from 'react-icons/fa'
import './project.css'

const Projects = () => {
  return (
    <div id="projects">
      <main>
        <section className="cards">
        <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Project Alpha
              </p>
              <div className="card__info">
                <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium">
                <a href="https://dreamy-druid-458473.netlify.app/"  target='_blank'>

                  <FaGithub/>
                </a>
                  </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1473283147055-e39c51463929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
                 </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image-container">
              <img
                src="https://images.unsplash.com/photo-1534143046043-44af3469836b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                alt="Detailed image description would go here."
              />
            </div>
            <div className="card__content">
              <p className="card__title text--medium">
                Here's the Title of an Awesome Course
              </p>
              <div className="card__info">
              <p className="text--medium project-btn"><FaRocket/></p>
                <p className="card__price text--medium"><FaGithub/></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Projects