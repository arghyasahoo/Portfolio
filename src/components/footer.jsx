import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <footer className="container-fluid footer text-center text-white">

                    <div className="container p-4 pb-0">

                        <div className="wrapper">
                            <div className="icon facebook">
                                <div className="tooltip">Facebook</div>
                                <span><a href="https://www.facebook.com/profile.php?id=100012886110094"><i className="fab fa-facebook-f"></i></a></span>
                            </div>
                            <div className="icon instagram">
                                <div className="tooltip">Instagram</div>
                                <span><a href="https://www.instagram.com/arghya.lp/"><i className="fab fa-instagram"></i></a></span>
                            </div>
                            <div className="icon github">
                                <div className="tooltip">Github</div>
                                <span><a href="https://github.com/arghyasahoo"><i className="fab fa-github"></i></a></span>
                            </div>
                            <div className="icon youtube">
                                <div className="tooltip">Youtube</div>
                                <span><a href="https://www.youtube.com/channel/UCis6SJRFb5tLBR00bVwu7LA"><i className="fab fa-youtube"></i></a></span>
                            </div>
                        </div>

                    </div>

                    {/* <hr />
                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-white" href="https://www.github.com/arghyasahoo">Arghya Sahoo</a>
                    </div> */}

                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
