import './Introduction.scss';

const Introduction = () =>{
    return(
        <section id='intro'>
            <div id='mobile-hero'></div>
            <h1>
                Nice to meet you! I'm <span>Adam Keyes</span>.
            </h1>
            <p id='about-me'>
                Based in the UK, I'm a front-end developer passionate about 
                building accessible web apps that users love.
            </p>
            <button type='button' value='Contact me' onClick={()=>{window.location.assign('#contact-form');}}>
                Contact me
            </button>
        </section>
    );
}

export default Introduction;