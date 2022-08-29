import './Navigation.css';
import './About.js';
import logo from './images/signature.png';
import {HashLink} from 'react-router-hash-link';
function Navigation() {
    return (
        <>
        <div class="header" id='test'>
            <a href="#" class="logo"><img src={logo}/></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Portfolio</a></li>
                <li><a href="mailto:fatihkeremakoglan@hotmail.com">Contact</a></li>
            </ul>
        </div>
        <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
            <a href="#"><li>HOME</li></a>
            <a href="#About"><li>ABOUT</li></a>
            <a href="#"><li>PORTFOLIO</li></a>
            <a href="mailto:fatihkeremakoglan@hotmail.com"><li>CONTACT</li></a>
        </ul>
        </div>
        </>
    );
}
export default Navigation;
