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
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/linux-512.png'} alt="linux icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Linux</h2>
                        </div>
                    </div>

                    {/* Git */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/git.png'} alt="git icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">Git</h2>
                        </div>
                    </div>

                    {/* JS7 */}
                    <div className="card m-2" style={this.props}>
                        <img className="card-img" src={process.env.PUBLIC_URL + 'img/JS7.png'} alt="js7 icon" />
                        <div className="card-img-overlay text-white">
                            <h2 className="card-title">JS7 Job Scheduler</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OtherSkills;