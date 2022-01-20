import React, { Component } from 'react';

class OtherSkills extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    {/* Linux */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/linux-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Linux</h2>
                        </div>
                    </div>

                    {/* Arduino */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/arduino-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Arduino</h2>
                        </div>
                    </div>

                    {/* Blockchain */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/blockchain-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Blockchain</h2>
                        </div>
                    </div>

                    {/* Selenium */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/selenium-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Selenium</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OtherSkills;