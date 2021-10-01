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
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/flask-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Flask</h2>
                        </div>
                    </div>

                    {/* NodeJS */}
                    <div class="card m-2" style={this.props}>
                        <img class="card-img" src={process.env.PUBLIC_URL + 'img/nodejs-512.png'} alt="python logo" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">NodeJS</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BackendSkills;