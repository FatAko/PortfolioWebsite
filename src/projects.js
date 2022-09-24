import './projects.css';
import json from './projects.json';
import linkImg from './images/link.png';
import gitLinkImg from './images/gitlink.png'

function returnImages() {
    const final = [];
    for (var i = 0; i < json.header.length; i++) {
        final.push(
            <div className='image'>
                <img class="image__img" src={json.img[i][i]}/>
                <div className='image__overlay image__overlay--blur'>
                    <div className='image__title'>{json.header[i][i]}</div>
                    <div class='links'>
                    <a className='image__link' target='_blank' rel='noreferrer' href={json.link[i][i]}><img class="linkImg" src={linkImg}/></a>
                    <a className='image__link' target='_blank' rel='noreferrer' href={json.git[i][i]}><img class="gitlinkImg" src={gitLinkImg}/></a>
                    </div>
                    <div class="image__description">{json.text[i][i]}</div>
                </div>
            </div>
        ); 
    } 
    return(
        <div class="proimg">{final}</div>
    );
}

function Projects() {
    return (
        <>
        <section class="Projects" id="Projects">
            <p>portfolio</p>
            {returnImages()}
            <div class="placeholder"/>
        </section>
        </>
    );
}
export default Projects;