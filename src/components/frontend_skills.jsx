import React, { Component } from 'react';

class FrontendSkills extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    {/* HTML */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/html-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">HTML</h2>
                        </div>
                    </div>

                    {/* CSS */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/css-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">CSS</h2>
                        </div>
                    </div>

                    {/* Javascript */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/javascript-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Javascript</h2>
                        </div>
                    </div>

                    {/* JQuery */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/jquery-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">JQuery</h2>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/bootstrap-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Bootstrap</h2>
                        </div>
                    </div>

                    {/* React */}
                    <div class="card m-2" style={this.state}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/react-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">React</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default FrontendSkills;