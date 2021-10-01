import React, { Component } from 'react';
import LanguageSkills from './language_skills';
import FrontendSkills from './frontend_skills'
import BackendSkills from './backend_skills'
import OtherSkills from './other_skills';

class Skills extends Component {
    constructor(props) {
        super()

        this.state = {
            option: 1
        }

        this.loadLang = this.loadLang.bind(this);
        this.loadFrontend = this.loadFrontend.bind(this);
        this.loadBackend = this.loadBackend.bind(this);
        this.loadOthers = this.loadOthers.bind(this);
    }

    loadLang() {
        this.setState({ option: 1 });
    }

    loadFrontend() {
        this.setState({ option: 2 });
    }

    loadBackend() {
        this.setState({ option: 3 });
    }

    loadOthers() {
        this.setState({ option: 4 });
    }

    render() {
        let skillComp;
        if (this.state.option == 1) {
            skillComp = <LanguageSkills />;
        }
        else if (this.state.option == 2) {
            skillComp = <FrontendSkills />;
        }
        else if (this.state.option == 3) {
            skillComp = <BackendSkills />;
        }
        else if (this.state.option == 4) {
            skillComp = <OtherSkills />;
        }
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <hr />
                    <h2 className='display-4'>My Skills</h2>
                    <hr />
                    {skillComp}
                    <br />
                    <div className='multi-button'>
                        <button className="language" onClick={this.loadLang}>Language</button>
                        <button className="frontend" onClick={this.loadFrontend}>Frontend</button>
                        <button className="backend" onClick={this.loadBackend}>Backend</button>
                        <button className="others" onClick={this.loadOthers}>Others</button>
                    </div>
                    <br />
                    <br />
                </div>
            </React.Fragment>
        );
    }
}

export default Skills;