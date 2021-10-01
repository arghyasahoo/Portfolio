import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <footer className="footer text-center text-white">

                    <div className="container p-4 pb-0">

                        <div class="wrapper">
                            <div class="icon facebook">
                                <div class="tooltip">Facebook</div>
                                <span><i class="fab fa-facebook-f"></i></span>
                            </div>
                            <div class="icon twitter">
                                <div class="tooltip">Twitter</div>
                                <span><i class="fab fa-twitter"></i></span>
                            </div>
                            <div class="icon instagram">
                                <div class="tooltip">Instagram</div>
                                <span><i class="fab fa-instagram"></i></span>
                            </div>
                            <div class="icon github">
                                <div class="tooltip">Github</div>
                                <span><i class="fab fa-github"></i></span>
                            </div>
                            <div class="icon youtube">
                                <div class="tooltip">Youtube</div>
                                <span><i class="fab fa-youtube"></i></span>
                            </div>
                        </div>

                    </div>

                    <hr />
                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-white" href="https://www.github.com/arghyasahoo">Arghya Sahoo</a>
                    </div>

                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
