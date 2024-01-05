import yoga from '../assets/yoga.png'

import pen from '../assets/pen.png'

import phone from '../assets/phone.png'

import './index.css'

const ProjectTitle = () => (
  <>
    <h1 className="title">Projects</h1>
    <div className="pr-line">
      <div className="white-container">
        <div className="pr-text">
          <div>
            <h1 className="pr-name">Project Name</h1>
            <p className="pr-para">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <button type="button" className="pr-bt">
              <a href="#viewpr">View Project</a>
            </button>
          </div>
        </div>
      </div>

      <img src={yoga} alt="yoga" className="yoga" />
    </div>

    <div className="pr-line">
      <img src={pen} alt="pen" className="yoga" />
      <div className="white-container">
        <div className="pr-text">
          <div>
            <h1 className="pr-name">Project Name</h1>
            <p className="pr-para">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <button type="button" className="pr-bt">
              <a href="#view">View Project</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="pr-line">
      <div className="white-container">
        <div className="pr-text">
          <div>
            <h1 className="pr-name">Project Name</h1>
            <p className="pr-para">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <button type="button" className="pr-bt">
              <a href="#hello">View Project</a>
            </button>
          </div>
        </div>
      </div>

      <img src={phone} alt="phone" className="yoga" />
    </div>
  </>
)

export default ProjectTitle
