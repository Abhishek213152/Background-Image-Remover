import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="cu-wrapper">
      <div className="cu-container">
        <h1>Contact Us</h1>
        <form>
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact