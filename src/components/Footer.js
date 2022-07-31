import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <div id="footer">
            <div id="inner-footer">
                <ul id="lang">
                    <li><a href="/en">English</a></li>
                    <li><a href="/es">Español</a></li>
                    <li><a href="/ch">中文</a></li>
                    <li><a href="/po">Polski</a></li>
                    <li><a href="/fr">Français</a></li>
                    <li><a href="/it">Italiano</a></li>
                    <li><a href="/po">Português</a></li>
                    <li><a href="/de">Deutsch</a></li>
                    <li><a href="/li">Lietuvių</a></li>
                </ul>
                <hr />
                <ul id="footer-nav">
                    <li><a href="/register">Sign Up</a></li>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <p>&copy; 2022 Charlie Cureton. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;