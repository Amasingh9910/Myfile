import React from 'react'
import './Intro.css'
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll'
function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introname">Aman Singh</span><br />Software Developer</span>
            <p className="intropara">I am skilled and passionate software developer <br />who has made some front-end project</p>
            <a href="https://www.linkedin.com/in/aman-singh-46b782273">
            <button className="btn">Hire me</button>
            </a>
        </div>
        <img src={bg} alt="" className="bg" />
      </section>
    </div>
  )
}

export default Intro
