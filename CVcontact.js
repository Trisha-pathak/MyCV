import React, { Component } from 'react';

class CVcontact extends Component {

    render() {
        return (
            <div className="w3-padding-4 w3-content w3-text-grey w3-light-grey" id="contact">
                        <h2 className="w3-text-light-black">Contact Me</h2>
                        <hr style={{width:"200px"}} className="w3-opacity" />

                        <div class="w3-section">
                            <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Hyderabad, IND</p>
                            <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 7903120892</p>
                            <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: trishapathak2028@gmail.com</p>
                        </div><br />
                        <h4>Let's get in touch. Send me a message:</h4>

                        <form action="/action_page.php" target="_blank">
                            <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></input></p>
                            <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"></input></p>
                            <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"></input></p>
                            <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"></input></p>
                            <p className='text-center w3-padding-4'>
                                <button className="w3-button w3-light-grey" type="submit">
                                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                                </button>
                            </p>
                        </form>
                        
                    </div>
        )
    }
}
export default CVcontact;