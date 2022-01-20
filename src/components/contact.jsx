import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <a className="mailto" href="mailto:ctf.bcdehl@gmail.com">
                <div id="contact" className="container-send_email">
                    <button className="send_email">
                        Get in Touch
                    </button>
                </div>
            </a>
        );
    }
}

export default Contact;