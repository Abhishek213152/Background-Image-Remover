import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className="w-wrapper">
        <div className="flex3 innerWidth w-container">
            <div className="paddings w-left">
                <span className="title primaryText">Automatically Remove Backgrounds</span> <br />
                <p>"Ensure 100% accurate background removal from images with automated technology"</p>
            </div>
            <div className="paddings w-right">
                <img src="./car.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Work