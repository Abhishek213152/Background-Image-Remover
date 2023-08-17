import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="ho-wrapper">
        <div className="flex2 innerWidth ho-container">
            <div className="ho-left">
                    <form className="form">
                        <Link to="/remove"><button>Upload Image</button></Link>
                    </form>
            </div>
            <div className="ho-right">
                <div className="image-container">
                    <img src="./bb.png" alt=""/>
                     <span><h3 className="flex1">Remove Image Background</h3>
                    <p className="flex1">100% Free</p></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
