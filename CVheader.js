import React, { Component } from 'react';
import pic from './profile.jpg'

class CVheader extends Component {

    render() {
        return (
            <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Trisha Pathak.</h1>
                <p>WEB Developer</p>
                <img src={pic} style={{width:"992px", height:"1108"}} alt="profile" className="w3-image"/>
            </header>
        )
    }
}
export default CVheader;