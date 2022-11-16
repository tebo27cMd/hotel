import React from 'react'
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div >
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div >
                <h1 >About Us </h1>
                
                <div >
                    <Link to="/contact" >Contact us</Link>
                </div>
            </div>
        </div>
       </div>
    )
}
export default About;