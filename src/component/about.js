import React from 'react';
import '../App.css';
import '../bootstrap.css';
import pic1 from '../pic1.png';
import pic3 from '../pic3.png';
import pic4 from '../pic5.jpg';


function about() {
    return (
        <div className="about" id="about">
            <h1 className="about-head">ABOUT SALOON</h1>
            <div className="main">
                <div className="section1">
                    <img src={pic1} className="section1-img" />
                </div>
                <div className="section2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p>
                </div>
            </div>
            <div className="section2-imgs">
                <img src={pic1} className="section2-img" />
                <img src={pic3} className="section2-img" />
                <img src={pic4} className="section2-img" />
            </div>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p><h6>HOME TOWN</h6></div>
                    <div className="footer2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quos nulla sit tempora minima accusantium, aspernatur omnis quasi repellendus! Distinctio sapiente asperiores nulla ducimus aspernatur, tenetur rem sunt iure.</p><h6>HOME TOWN</h6></div>
                </div>
            </div>
            </div>
    );
}
export default about;