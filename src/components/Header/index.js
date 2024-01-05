// Write your code here

import './index.css'

import image from '../assets/image.png'

const Header = () => (
  <div className="div-container">
    <ul className="ul-list">
      <li>Madelyn Torff</li>
      <div className="second-part">
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </div>
    </ul>
    <div className="below-part">
      <div className="text-container">
        <p className="special">UI/UX Designer</p>
        <h1 className="heading">Hello, my name is Madelyn Torff</h1>
        <p>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <button className="yellow-btn" type="button">
          Projects
        </button>

        <button className="white-btn" type="button">
          LinkedIn
        </button>
      </div>

      <img src={image} alt="girl" className="girl" />
    </div>
  </div>
)

export default Header
