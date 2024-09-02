import React from 'react'
import './Work.css';
import GI from '../../assets/GI.png'
import Linux from '../../assets/Linux.png'
import Forage from '../../assets/Forage.png'
import Blogsite from '../../assets/Blogsite.png'
import DLCD2 from '../../assets/DLCD2.jpg'


function Work() {
  return (
    <section id="Work">
        <h2 className="worktitle">Certifications and Projects</h2>
        <span className="workDesk">Completed JP Morgan chase & CO software developer job simulation, Completed Generative AI course by linkedIn and microsoft,Participated in Digital logic and circuit design competion in BPIT,Passed the Linux test conducted by IIT Bombay and did a self initiated project where i built a blogsite with help of ReactJs</span>
        <div className="workImgs">
            <div className="Imgtext">
                <img src={GI} alt="" className='workImg'/>
                
            </div>
            <div className="Imgtext">
                <img src={Forage} alt="" className='workImg'/>
                
            </div>
            <div className="Imgtext">
                <img src={Linux} alt="" className='workImg'/>
                
            </div>
            <div className="Imgtext">
                <img src={DLCD2} alt="" className='workImg' />
                
            </div>
            <div className="Imgtext">
                <img src={Blogsite} alt="" className='workImg'/>
                
            </div>
        </div>
    </section>
  )
}

export default Work
