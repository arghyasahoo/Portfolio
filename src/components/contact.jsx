import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="contact" className="conatiner-fluid">
                    <hr />
                    <h2 className='display-4'>Contact Me</h2>
                    <hr />

                    <div id="inputs">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2 contact_img">
                                    <img src={process.env.PUBLIC_URL + 'img/contact.png'} />
                                </div>

                                <div className="col-md-6">
                                    <form className="contact_form">
                                        <h3>Get in Touch</h3>
                                        <input id="name" placeholder="Name" type="text" /><br />
                                        <input id="email" placeholder="Email" type="text" /><br />
                                        <textarea id="msg" placeholder="Message"></textarea><br />
                                        <button id="submit_btn" className="btn btn-success">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;