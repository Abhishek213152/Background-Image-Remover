import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className="su-wrapper">
      <div className="su-container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup