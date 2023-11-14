import './Experience.scss';
import project_1_large from '../../images/thumbnail-project-1-large.webp';
import project_1_small from '../../images/thumbnail-project-1-small.webp';
import project_2_large from '../../images/thumbnail-project-2-large.webp';
import project_2_small from '../../images/thumbnail-project-2-small.webp';
import project_3_large from '../../images/thumbnail-project-3-large.webp';
import project_3_small from '../../images/thumbnail-project-3-small.webp';
import project_4_large from '../../images/thumbnail-project-4-large.webp';
import project_4_small from '../../images/thumbnail-project-4-small.webp';
import project_5_large from '../../images/thumbnail-project-5-large.webp';
import project_5_small from '../../images/thumbnail-project-5-small.webp';
import project_6_large from '../../images/thumbnail-project-6-large.webp';
import project_6_small from '../../images/thumbnail-project-6-small.webp';

const Experience = () =>{
    return(
        <section id='expert'>
            <div id='work-experience'>
                <div>
                    <h2>HTML</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>CSS</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>JavaScript</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>Accessibility</h2>
                    <p>4 Years Experience</p>
                </div>
                <div>
                    <h2>React</h2>
                    <p>3 Years Experience</p>
                </div>
                <div>
                    <h2>Sass</h2>
                    <p>3 Years Experience</p>
                </div>    
            </div>
            <div id='projects'>
                <div id='projects-top'>
                    <h2 id='projects-top-title'>
                        Projects
                    </h2>
                    <button type='button' value='Contact me' onClick={()=>{window.location.assign('#contact-form');}}>
                        Contact me
                    </button>
                </div>

                <div className='projects-list'>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_1_large} alt='Design portfolio'/>
                            <img src={project_1_small} alt='Design portfolio' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        
                        <h3>Design portfolio</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div>                        
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_2_large} alt='E-learning landing page'/>
                            <img src={project_2_small} alt='E-learning landing page' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        <h3>E-learning landing page</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_3_large} alt='Todo web app'/>
                            <img src={project_3_small} alt='Todo web app' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        <h3>Todo web app</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_4_large} alt='Entertainment web app'/>
                            <img src={project_4_small} alt='Entertainment web app' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div>
                        </div>
                        <h3>Entertainment web app</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div> 
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_5_large} alt='Memory Game'/>
                            <img src={project_5_small} alt='Memory Game' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div>
                        </div>
                        <h3>Memory Game</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_6_large} alt='Art gallery showcase'/>
                            <img src={project_6_small} alt='Art gallery showcase' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        <h3>Art gallery showcase</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.location.assign('#contact-form');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;