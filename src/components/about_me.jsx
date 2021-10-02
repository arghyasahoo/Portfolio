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
                                <p>I am <span id='para_name'>Arghya Sahoo</span>, a student of <span id='para_course'>Computer Science and Engineering</span> at Techno International Newtown, Kolkata. I am currently in 3rd Year.I am always learning new skills and building stuff.I have a decent understanding of programing concepts and I can work on backend development.</p>
                            </div>
                        </div>

                        <div className='row justify-content-end'>
                            <div className='col-5 text-end'>
                                <h3 className='about_heading'>my interests</h3>
                                <p>I am interested in learning new technologies which include Blockchain, Machine Learning, Artificial Intelligence, Cyber Security.Along with these, I can comfortably work in Linux and am extemely interested in Linux.</p>
                            </div>
                        </div>

                        <div className='row justify-content-start'>
                            <div className='col-5 text-start'>
                                <h3 className='about_heading'>why work with me</h3>
                                <p>I am a hardworking person and have a good knowledge on web development.All the time I want to gather more knowledge and more experience.So I try my best for all the time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;