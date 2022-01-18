import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="about_me" className='container-fluid'>
                    <hr />
                    <h2 className='display-4'>About Me</h2>
                    <hr />
                    <div className='m-2 p-3'>
                        <div className='row justify-content-start'>
                            <div className='col-5 text-start'>
                                <h3 className='about_heading'>whoami</h3>
                                <p>I am a student of <span id='para_course'>Computer Science and Engineering</span> at Techno International Newtown, Kolkata. I am currently in 3rd Year. I am a passionate philomath and a decent developer. </p>
                            </div>
                        </div>

                        <div className='row justify-content-end'>
                            <div className='col-5 text-end'>
                                <h3 className='about_heading'>my interests</h3>
                                <p>I am interested in learning new technologies which include <span id="dl">Deep Learning</span>, <span id="ml">Machine Learning</span>, <span id="ai">Artificial Intelligence</span> and <span id="sec">Cyber Security</span>.</p>
                                <p>I am also quite fond of <span id="linux">Linux</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default About;