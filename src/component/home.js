import React from 'react';
import logo from '../40778.svg';
import pic1 from '../pic1.png';
import pic3 from '../pic3.png';
import pic4 from '../pic5.jpg';
import '../App.css';
import '../bootstrap.css';

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <img src={logo} className="logo" alt="logo" width="200" height="80" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navpad  " >
                        <li className="nav-item active ">
                            <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="center_pic color-white">
                <h1 >HAIR SALOON WEBSITE</h1>
                <p>Your Type. Your Style. Your Color</p>
            </div>
            <div className="coustom-card">
                <div className="col-md-3">
                    <div className="card">
                        <img src={pic1} className="card-img-top mycard" alt="" />
                        <div className="card-body">
                            <h5>TRADITIONAL CUT</h5><hr></hr>
                            <h5>3999 RS</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="card">
                        <img src={pic3} className="card-img-top " alt="" />
                        <div className="card-body">
                            <h5>MUSTACHE TRIM</h5><hr></hr>
                            <h5>3999 RS</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={pic1} className="card-img-top mycard" alt="" />
                        <div className="card-body">
                            <h5>TRADITIONAL CUT</h5><hr></hr>
                            <h5>3999 RS</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="card">
                        <img src={pic3} className="card-img-top  " alt="" />
                        <div className="card-body">
                            <h5>BEARD TRIM</h5><hr></hr>
                            <h5>3999 RS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <img src={pic4} className="middle-pic" />
                <div className="middle-text">
                    <h1>MORE EXPERTS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p>
                </div>
            </div>
            <div className="footer">
                <h3>TESTIMONIALS</h3>
                <p>WHAT HAPPY CLIENT SAY</p>
                <div className="footer-main">
                    <div className="footer1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p><h6>HOME TOWN</h6></div>
                    <div className="footer2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p><h6>HOME TOWN</h6></div>
                    <div className="footer3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p><h6>HOME TOWN</h6></div>
                </div>
            </div>
        </div>
    );
}

export default App;