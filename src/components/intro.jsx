import React, { Component } from 'react';
import '../CVButton.scss'

class Intro extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid intro'>
                    <div className='pt-5'>
                    </div>
                    <h1 className='greeting'>Hello, I am</h1>
                    <h1 className='port_name'>Arghya Sahoo</h1>
                    <br />
                    <h1 className='greeting'>I am a</h1>
                    <h1 className='display-4 course'>Software Developer</h1>
                    <br />
                    <br />
                    <br />
                    <div class="buttons">
                        <button class="blob-btn">
                            Download CV
                            <span class="blob-btn__inner">
                                <span class="blob-btn__blobs">
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                </span>
                            </span>
                        </button>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                        <br />
                        <br />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Intro;