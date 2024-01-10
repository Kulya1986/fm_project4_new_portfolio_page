import './Introduction.scss';

const Introduction = () =>{
    return(
        <section id='intro'>
            <div id='mobile-hero'></div>
            <h1>
                Nice to meet you! I'm <span>Nataliia Kulyk</span>.
            </h1>
            <p id='about-me'>
                Starting my career as QA specialist, I'm excited to introduce couple of my web projects to showcase proficiency level and expertise.
            </p>
            <button type='button' value='Contact me' onClick={()=>{window.location.assign('#contact-form');}}>
                Contact me
            </button>
        </section>
    );
}

export default Introduction;


