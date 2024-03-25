import React, { Component } from 'react';

class BackendSkills extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    {/* Flask */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/flask-512.png'} alt="flask icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Flask</h2>
                        </div>
                    </div>

                    {/* NodeJS */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/nodejs-512.png'} alt="node js icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">NodeJS</h2>
                        </div>
                    </div>

                    {/* Spring Boot */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/spring-boot.png'} alt="spring boot icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Spring Boot</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BackendSkills;