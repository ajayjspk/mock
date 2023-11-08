import React from "react";
import './Footer.css'
import '../../src/index.css'
import logo from './images/Group-33524.png';
import Facebook from './images/Facebook-1 1.png';
import Instagram from './images/Instagram 1 1.png';
import Youtube from "./images/Youtube-1 1.png";
import LinkedIn from "./images/Instagram 1 1.png";
import Quora from "./images/Quora-1 1.png";
import Twitter from './images/Twitter-1 1.png'

function Footer() {
    return (
        <div className="footer">

            <div className="fotter-main-menu">

                <div className="footer-menu-logo">
                    <div className="footer-logo">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="footer-social-media-icons">
                        <img src={Facebook} alt="logo" />
                        <img src={Instagram} alt="logo" />
                        <img src={Youtube} alt="logo" />
                        <img src={LinkedIn} alt="logo" />
                        <img src={Quora} alt="logo" />
                        <img src={Twitter} alt="logo" />
                    </div>
                </div>
                <div className="footer-menu-1">
                    <div>
                        <span>Solutions</span>
                    </div>
                    <div>
                        <p>Career Paths</p>
                        <p>7 parameters test</p>
                        <p>Mocx</p>
                        <p>Resume Builder</p>
                        <p>Certifications</p>
                        <p>Startup support</p>
                    </div>
                </div>
                <div className="footer-menu-2">
                    <div>
                        <span>Explore</span>
                    </div>
                    <div>
                        <p>Front end development</p>
                        <p>Backend development</p>
                        <p>Full stack</p>
                        <p>DSA</p>
                        <p>AI & ML</p>
                    </div>
                </div>
                <div className="footer-menu-3">
                    <div>
                        <span>Company</span>
                    </div>
                    <div>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Reviews</p>
                        <p>Join discard</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>

                    </div>
                </div>
            </div>
            <hr />
            <div className="horizontal-line"></div>

            <div className="footer-final">
                <div className="final">Tutorials</div>
                <div className="divide"></div>
                <div className="final">Blog’s</div>
                <div className="divide"></div>
                <div className="final">Articles</div>
                <div className="divide"></div>
                <div className="final">Videos</div>
            </div>
            <div className="footer-copyright">
                <p>Copyright@2023, scimics</p>
            </div>
        </div>
    )
};

export default Footer;