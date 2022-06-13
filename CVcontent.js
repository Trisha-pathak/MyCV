import React, { Component } from 'react';
import CVabout from './CVabout';
import CVcontact from './CVcontact';
import CVfooter from './CVfooter';
import CVheader from './CVheader';
import CVwork from './CVwork';

class CVcontent extends Component {

    render() {
        return (
            <div id="main">
                <CVheader />
                <CVabout />
                <CVwork />
                <CVcontact />
                <CVfooter />
            </div>
        )
    }
}
export default CVcontent;