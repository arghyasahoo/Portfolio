import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <a class="mailto" href="mailto:ctf.bcdehl@gmail.com">
                <div id="contact" class="container-send_email">
                    <button class="send_email">
                        Get in Touch
                    </button>
                </div>
            </a>
        );
    }
}

export default Contact;