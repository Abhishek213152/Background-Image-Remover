import React from 'react';
import './Down.css'; // Import your CSS file

const Down = () => {
  return (
    <>
      <section className="d-wrapper">
        <h1 className="flexCenter paddings">Get Updates</h1>
        <div className="flex4 d-container">
          <div className="d-left">
            <span>Sign up for our mailing list and we will let you know when we <br /> release new features or updates.</span>
          </div>
          <div className="flexCenter d-right">
            <input type="text" placeholder="Enter your Email"/>
            <button className="button2">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Down;
