import {FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

import {IoIosMail} from 'react-icons/io'

import Vector from '../assets/Vector.png'

import './index.css'

const Footer = () => (
  <>
    <div className="items">
      <FaInstagramSquare className="insta" />
      <FaLinkedin className="insta" />
      <IoIosMail className="insta" />
    </div>
    <p className="ft-para">Copyright © 2024. All rights reserved</p>
    <img src={Vector} alt="vector" />
  </>
)

export default Footer
