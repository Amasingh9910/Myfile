import React from 'react'
import './Skills.css'
import Frontend from '../../assets/Frontend.jpeg'
import DSA from '../../assets/DSA.jpeg'
import GAI from '../../assets/GAI.jpeg'
function Skills() {
  return (
    <section id="skills">
        <span className="skillTitle">What I Know</span>
        <span className="skillDesk">I am a skilled and passionate fresher software developer. I am a front-end developer with good knowledge of Data structures and algirithms.I also have good knowledge of Generative AI and prompt engineering.Know how to efficiently use AI models</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Frontend} alt="" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Front-end Development</h2>
                    <p>Knows HTML,CSS,JavaScript,React,Tailwind and Bootstrap and had made some projects on it</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={DSA} alt="" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Data Structures and Algorithm</h2>
                    <p>Knows Data Structures and Algorithm and had solved many questions in it</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={GAI} alt="" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Genrative AI</h2>
                    <p>Have knowledge of Generative AI and Prompt engineering</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
