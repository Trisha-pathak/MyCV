import React, { Component } from 'react';
import pic from './profile.jpg'

class CVabout extends Component {

    render() {
        return (
            <div className="w3-content w3-justify w3-text-grey w3-padding-4" id="about">
                        <h2 className="w3-text-light-black">About Me</h2>
                        <hr style={{width:"200px"}} className="w3-opacity" />
                        <p>I am Trisha Pathak. I describe myself as a Front-End Developer who loves coding, open source, and the web platform. 
                            As a Front-End Developer I created website for our company using ReactJS as a library and HTML, CSS and JavaScript to built the sites. I helped to improve the developer experience of the company by implementing tools to improve our software development process.
                        </p>
                        <h3 className="w3-padding-12 w3-text-light-black">My Skills</h3>
                        <hr style={{width:"200px"}} className="w3-opacity" />
                        <p className="w3-wide">HTML</p>
                        <div className="w3-white">
                            <div class="w3-dark-grey" style={{height:"28px", width:"85%"}}></div>
                        </div>
                        <p className="w3-wide">CSS</p>
                        <div className="w3-white">
                            <div className="w3-dark-grey" style={{height:"28px", width:"80%"}}></div>
                        </div>
                        <p className="w3-wide">Bootstrap</p>
                        <div className="w3-white">
                            <div className="w3-dark-grey" style={{height:"28px", width:"70%"}}></div>
                        </div>
                        <p className="w3-wide">JavaScript</p>
                        <div class="w3-white">
                            <div className="w3-dark-grey" style={{height:"28px", width:"70%"}}></div>
                        </div><br />

                        <button className="w3-button w3-light-grey w3-padding-large w3-section">
                            <i className="fa fa-download"></i> Download Resume
                        </button>
                    </div>
        )
    }
}
export default CVabout;