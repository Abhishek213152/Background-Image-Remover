import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <section className="s-wrapper">
      <h1 className="flexCenter">High Quality Images</h1>
        <div className="flex innerWidth paddings s-container">
          <div className="one">
            <img src="./1.jpg" alt="" />
          </div>
          <div className="two">
            <img src="./3.png" alt="" />
          </div>
          <div className="three">
            <img src="./2.jpg" alt="" />
          </div>
          <div className="four">
            <img src="./4.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default Slider
