import './Experience.scss';
import project_1_large from '../../images/my_projects/thumbnail_project1_large.jpg';
import project_1_small from '../../images/my_projects/thumbnail_project1_small.jpg';
import project_2_large from '../../images/my_projects/thumbnail_project2_large.jpg';
import project_2_small from '../../images/my_projects/thumbnail_project2_small.jpg';
import project_3_large from '../../images/my_projects/thumbnail_project3_large.jpg';
import project_3_small from '../../images/my_projects/thumbnail_project3_small.jpg';
import project_4_large from '../../images/my_projects/thumbnail_project4_large.jpg';
import project_4_small from '../../images/my_projects/thumbnail_project4_small.jpg';
import project_5_large from '../../images/my_projects/thumbnail_project5_large.jpg';
import project_5_small from '../../images/my_projects/thumbnail_project5_small.jpg';
import project_coming_large from '../../images/my_projects/thumbnail_coming_large.jpg';
import project_coming_small from '../../images/my_projects/thumbnail_coming_small.jpg';
import udemy_1 from '../../images/my_certificates/Udemy_Certificate1.jpeg';
import udemy_2 from '../../images/my_certificates/Udemy_Certificate2.jpeg';
import itstep from '../../images/my_certificates/ITStep_Certificate.jpg';

const Experience = () =>{
    
    return(
        <section id='expert'>
            <div id='work-qualification'>
                <div>
                    <h2>Hard Skills</h2>
                    <ul>
                        <li>Testing methodologies</li>
                        <li>Bugs tracking systems (Mantis, JIRA)</li>
                        <li>Selenium WebDriver (JAVA)</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript/React</li>
                        <li>Postman/REST API</li>
                        <li>Databases (Postgres/MSSQL)</li>
                    </ul>
                </div>
                <div>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Meticulous and attentive to details</li>
                        <li>Stress-resistant</li>
                        <li>Always eager to learn smth. new</li>
                        <li>Easily can find approach to any team member</li>
                        <li>Persistent - don't state a problem, suggest a solution</li>   
                    </ul>
                </div>
                {/* <div>
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
                </div>     */}
            </div>
            <div id='certificates'>
                <div><img onClick={(e)=>{e.target.classList.toggle('large');}} src={itstep} alt='ITStep certificate - Software Testing' title='ITStep certificate - Software Testing'/></div>
                <div><img onClick={(e)=>{e.target.classList.toggle('large');}} src={udemy_1} alt='Udemy certificate - Web Developer' title='Udemy certificate - Web Developer'/></div>
                <div><img onClick={(e)=>{e.target.classList.toggle('large');}} src={udemy_2} alt='Udemy certificate - React Native' title='Udemy certificate - React Native'/></div>
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
                            <img src={project_1_large} alt='Currency exchange rates'/>
                            <img src={project_1_small} alt='Currency exchange rates' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://exchange-rates-jt5v.onrender.com/');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/currencyRates_React_Hooks');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        
                        <h3>Currency exchange rates</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>REACT JS</span>
                            <span>API</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://exchange-rates-jt5v.onrender.com/');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/currencyRates_React_Hooks');}}>
                                    View code
                                </button>
                        </div>                        
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_2_large} alt='Intro section with dropdown navigation'/>
                            <img src={project_2_small} alt='Intro section with dropdown navigation' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://silly-bombolone-09ff74.netlify.app/');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/FM_project1_IntroWithDropdownMenu');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        <h3>Intro section with dropdown navigation</h3>
                        <p>
                            <span>HTML</span> 
                            <span>SCSS</span>
                            <span>JS</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://silly-bombolone-09ff74.netlify.app/');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/FM_project1_IntroWithDropdownMenu');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_3_large} alt='Room homepage'/>
                            <img src={project_3_small} alt='Room homepage' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://jocular-cheesecake-4c4182.netlify.app/');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/FM_project2_room_HP');}}>
                                    View code
                                </button>
                            </div> 
                        </div>
                        <h3>Room homepage</h3>
                        <p>
                            <span>HTML</span> 
                            <span>SCSS</span>
                            <span>REACT JS</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://jocular-cheesecake-4c4182.netlify.app/');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/FM_project2_room_HP');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_4_large} alt='Dictionary app'/>
                            <img src={project_4_small} alt='Dictionary app' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://splendid-genie-3fbc5f.netlify.app/');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/fm_project3_dictionary_app');}}>
                                    View code
                                </button>
                            </div>
                        </div>
                        <h3>Dictionary app</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>REACT JS</span>
                            <span>API</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://splendid-genie-3fbc5f.netlify.app/');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/fm_project3_dictionary_app');}}>
                                    View code
                                </button>
                        </div> 
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_5_large} alt='Shop delivery app'/>
                            <img src={project_5_small} alt='Shop delivery app' className='projects-list-item-cover-mobile'/>
                            <div className='projects-list-item-buttons'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://delivery-shop-csys.onrender.com/');}}>
                                    View project
                                </button>
                                <br/>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/DeliveryShop_validation');}}>
                                    View code
                                </button>
                            </div>
                        </div>
                        <h3>Shop delivery app</h3>
                        <p>
                            <span>HTML</span> 
                            <span>CSS</span>
                            <span>REACT JS</span>
                            <span>EXPRESS</span>
                            <span>POSTGRES</span>
                        </p>
                        <div className='projects-list-item-buttons-mobile'>
                                <button type='button' value='View project' onClick={()=>{window.open('https://delivery-shop-csys.onrender.com/');}}>
                                    View project
                                </button>
                                <button type='button' value='View code' onClick={()=>{window.open('https://github.com/Kulya1986/DeliveryShop_validation');}}>
                                    View code
                                </button>
                        </div>
                    </div>
                    <div className='projects-list-item'>
                        <div className='projects-list-item-cover'>
                            <img src={project_coming_large} alt='Project is coming soon'/>
                            <img src={project_coming_small} alt='Project is coming soon' className='projects-list-item-cover-mobile'/>
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
                        <h3>Project is coming soon</h3>
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