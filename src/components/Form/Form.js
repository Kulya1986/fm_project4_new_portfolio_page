import './Form.scss';

const Form = () =>{
    return(
        <section id='contact-form'>
            <div id='contact-form_copy'>
                <h2>Contact</h2>
                <p>
                    I would love to hear about your project and how I could help. Please 
                    fill in the form, and I’ll get back to you as soon as possible.
                </p>
            </div>
            
            <form>
                <input type='text' placeholder='NAME' aria-label='name' name='senderName'></input>
                <input type='email' placeholder='EMAIL' aria-label='email' name='senderEmail'></input>
                <textarea name='message' placeholder='MESSAGE' aria-label='message' rows='4'></textarea>
                <button type='submit'>Send message</button>
            </form>
        </section>
    );
}

export default Form;