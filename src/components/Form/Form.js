import './Form.scss';

const Form = ({onEmailChange,onNameChange,onMsgChange,messageSent, errors, formInfo, msgSent}) =>{
    let popupClass = 'msg-sent';
    if (msgSent){
        popupClass = 'msg-sent show';
    }
    return(
        <section id='contact-form'>
            <div id='contact-form_copy'>
                <h2>Contact</h2>
                <p>
                    In case I have enough skills for your project and you would love to see me as a member of your team, please 
                    fill in the form to get in touch with me, and I’ll get back to you as soon as possible. Or email me directly to <a href = "mailto: kulychka@gmail.com">kulychka@gmail.com</a>.
                </p>
            </div>
            
            <div id='form' >
                <div>
                    <div className='input-area'>
                        <input type='text' placeholder='NAME' value={formInfo.senderName} aria-label='name' name='senderName' id='senderName' onChange={onNameChange}></input>
                        {errors.nameError.length>0 &&
                            <div className='error-icon'>!</div>
                        }
                    </div>
                    <p className='error-msg'>{errors.nameError}</p>
                </div>
                <div>
                    <div className='input-area'>
                        <input type='email' placeholder='EMAIL' value={formInfo.senderEmail} aria-label='email' name='senderEmail' id='senderEmail' onChange={onEmailChange}></input>
                        {errors.emailError.length>0 &&
                            <div className='error-icon'>!</div>
                        }
                    </div>
                    <p className='error-msg'>{errors.emailError}</p>
                </div>
                <textarea name='message' placeholder='MESSAGE' value={formInfo.senderMsg} aria-label='message' rows='4' onChange={onMsgChange}></textarea>
                <button type='submit' onClick={messageSent}>Send message</button>
                <span className={popupClass} id="msgSent">Your message was sent!</span>
            </div>
        </section>
    );
}

export default Form;