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
                    <div class="card m-2" id="python" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/python-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Python</h2>
                        </div>
                    </div>

                    {/* C */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/c-512.png'} alt="c logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">C</h2>
                        </div>
                    </div>

                    {/* Java */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/java-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Java</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LanguageSkills;