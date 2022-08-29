import { useEffect, useState } from 'react';
import './Home.css';
import image from  './images/img1.jpg'
import signature from './images/signature.png'
import scroll from './images/scroll.png'


function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section class="Home">
                <div class="Image" style={{transform: `translateY(${offsetY * 0.22}px)`}}>
                    <img src={image}/>
                </div>
                <div class="Name">
                    <p>Fatih<br/>Akoglan</p>
                </div>
                {/* 
                <div class="Signature">
                    <img src={signature}/>
                </div>
                */}
                <div class="Description">
                    <p>web developer from british<br/>columbia, canada</p>
                </div>
                <div class="Scroll">
                    <img id='scrollimg' src={scroll}/>
                </div>
            </section>
        </>
    );
}
export default Home;
