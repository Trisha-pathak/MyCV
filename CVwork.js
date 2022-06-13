import React, { Component } from 'react';

class CVwork extends Component {

    render(){
        return(
            <div className="w3-content w3-justify w3-text-grey w3-padding-4" id="works">

                        <h3 className="w3-padding-12 w3-text-light-black">My Works</h3>
                        <hr style={{width:"200px"}} className="w3-opacity" />
                        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                            <div className="w3-quarter w3-section">
                            <p className="w3-wide">Hello..! Visiors</p>
                            <p className="w3-wide">My works will be added soon</p>
                            <p className="w3-wide">Thank You</p>
                            </div>
                        </div>

                        <button className="w3-button w3-light-grey w3-padding-large w3-section">
                            <i className="fa fa-download"></i> Download Resume
                        </button>
                    </div>
        )
    }
}
export default CVwork;