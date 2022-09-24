import { useEffect, useState } from 'react';
import './About.css';
import linkedin from './images/linkedin.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import aboutJson from './about.json';


function About() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
        <section class="About" id="About">
            <p>about me</p>
            <div class="AboutMe">
                <div class="AboutMeText">
                    <p>{aboutJson.aboutmetext}</p>
                </div>
                {/** 
                <div class="AboutMeImage" style={{transform: `translateY(${offsetY * -0.13}px)`}}>
                      <img src={myimage}/>
                </div>
                */}
            </div>
            <div className="Social">
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/fatih-akoglan-741689251/'><img src={linkedin}/></a>
                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/fatih.akgln/'><img src={instagram}/></a>
                        <a href='#'><img src={youtube}/></a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/FatAko'><img src={github}/></a>
                    </div>
        </section>
        </>
    );
}
export default About;
