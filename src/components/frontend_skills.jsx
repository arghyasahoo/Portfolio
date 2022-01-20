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
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/html-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">HTML</h2>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/css-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">CSS</h2>
                        </div>
                    </div>

                    {/* Javascript */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/javascript-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Javascript</h2>
                        </div>
                    </div>

                    {/* JQuery */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/jquery-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">JQuery</h2>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/bootstrap-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Bootstrap</h2>
                        </div>
                    </div>

                    {/* React */}
                    <div className="card m-2" style={this.state}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/react-512.png'} alt="python logo" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">React</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default FrontendSkills;