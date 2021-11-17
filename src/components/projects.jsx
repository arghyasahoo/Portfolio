import React, { Component } from 'react';
import TicTacToe from './tic tac toe.svg';
import ChatBOX from './chatbox.svg';
import Attendance from './attendance.svg';
import HackLists from './hacklists.svg'
import Todo from './todo.svg';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="projects" className='container-fluid'>
                    <hr />
                    <h2 className='display-4'>My Projects</h2>
                    <hr />

                    <div className="container-fluid projects">
                        <div className="row container-fluid pr ms-5">
                            <div class="col-md-2 gifs-left m-1">
                                <object type="image/svg+xml" data={ChatBOX}>svg-animation</object>
                            </div>
                            <div class="col-md-9 desc m-1">
                                <h3>ChatBOX</h3>
                                <p>This is a chat application that lets you chat without any privacy concerns. The server stores no information about users. This is a public chat room where anyone with the ip address can join and chat with other people. This is a great way of making nerw friends anonymously</p>
                            </div>
                        </div>
                        <div className="row container-fluid pr ms-5">
                            <div class="col-md-9 desc m-1">
                                <h3>Smart Attendance</h3>
                                <p>This was created during the pandemic.This project made an alternative way of taking attendance without touching anything.Neither any registers needed to log the records, nor any high end hardware devices are required.This app uses speech recognitoin to take attendance</p>
                            </div>
                            <div class="col-md-2 gifs-right m-1">
                                <object type="image/svg+xml" data={Attendance}>svg-animation</object>
                            </div>
                        </div>
                        <div className="row container-fluid pr ms-5">
                            <div class="col-md-2 gifs-left m-1">
                                <object type="image/svg+xml" data={TicTacToe}>svg-animation</object>
                            </div>
                            <div class="col-md-9 desc m-1">
                                <h3>Tic Tac Toe</h3>
                                <p>This is a fun project that I made in my early days of programming. This is a classic tic tac toe game made with Python and Kivy. This game runs completely in offline. Have fun playing this</p>
                            </div>
                        </div>
                        <div className="row container-fluid pr ms-5">
                            <div class="col-md-9 desc m-1">
                                <h3>Hack Lists</h3>
                                <p>This website lists all hackathons that are currently running or upcoming. Data collection is done by scraping some websites</p>
                            </div>
                            <div class="col-md-2 gifs-right m-1">
                                <object type="image/svg+xml" data={HackLists}>svg-animation</object>
                            </div>
                        </div>
                        <div className="row container-fluid pr ms-5">
                            <div class="col-md-2 gifs-left m-1">
                                <object type="image/svg+xml" data={Todo}>svg-animation</object>
                            </div>
                            <div class="col-md-9 desc m-1">
                                <h3>Todo</h3>
                                <p>Do you feel like you often forget things. If so, this project is for you. I usually tend to forget a lot of things. So, i though of making a Todo app for myself that will keep track of all my scheduled tasks. Anyone can use this app as it runs on web. Updation and Deletion of tasks can also be done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;