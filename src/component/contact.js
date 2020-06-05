import React from 'react';
import '../App.css';
import '../bootstrap.css';

function contact() {
    return (
        <div>
            <div className="contact" id="contact">
                <h2>CONTACT US</h2>
                <div className="section">
                    <div className="contact-section1">
                        <h4>SALON CONTACT</h4>
                        <p><b>CONTACT NUMBER</b> 123456789</p>
                        <p><b>EMAIL:</b> example@gmail.com</p>
                        <p><b>WHATSAPP:</b> 123456789</p>
                    </div>
                    <div className="contact-section2">
                        <h4>SALON ADDRESS</h4>
                        <p><b>ADDRESS:</b> House num 123 abc abc abc abc <br /> abc abc abc abc abc abcx</p>
                        <h1>*****</h1>
                    </div>
                </div>
            </div>
            <div className="end">
                <h4>@COPYRIGHT</h4>
            </div>
        </div>
    );
}

export default contact;