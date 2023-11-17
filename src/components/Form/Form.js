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
                    I would love to hear about your project and how I could help. Please 
                    fill in the form, and I’ll get back to you as soon as possible.
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