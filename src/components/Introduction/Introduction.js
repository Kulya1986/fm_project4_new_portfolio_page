import './Introduction.scss';

const Introduction = () =>{
    return(
        <section id='intro'>
            <h1>
                Nice to meet you! <br/>I'm <span>Adam Keyes</span>.
            </h1>
            <p id='about-me'>
                Based in the UK, I'm a front-end developer passionate about 
                building accessible web apps that users love.
            </p>
            <button type='button' value='Contact me' onClick={()=>{window.location.assign('#contact-form');}}>
                Contact me
            </button>
            <div id='intro-hero'>
                <div id='intro-circle'>
                </div>
            </div>
            
        </section>
    );
}

export default Introduction;