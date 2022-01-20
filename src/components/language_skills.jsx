import React, { Component } from 'react';

class LanguageSkills extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    {/* Python */}
                    <div className="card m-2" id="python" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/python-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Python</h2>
                        </div>
                    </div>

                    {/* C */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/c-512.png'} alt="c logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">C</h2>
                        </div>
                    </div>

                    {/* Java */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/java-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Java</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LanguageSkills;