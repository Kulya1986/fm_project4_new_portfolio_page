
import './App.scss';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Form from './components/Form/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formSubmitted: false,
      formInfo:{
        senderName:'',
        senderEmail:'',
        senderMsg:''
      },
      errors:{
        emailError:'',
        nameError:''
      },
      msgSent: false
    }
  }

  messageSent = () =>{
    this.onMsgSend();
    // console.log(this.state.msgSent);
    if (!this.state.errors.emailError.length && !this.state.errors.nameError.length)
    {
      // fetch('http://localhost:3000/send-msg',
      fetch('https://portfolio-page-server.onrender.com/send-msg',
                {
                    method: "POST",
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(
                        {
                            senderName:this.state.formInfo.senderName,
                            senderEmail:this.state.formInfo.senderEmail,
                            senderMsg:this.state.formInfo.senderMsg
                        }
                    )
                }).then(res => res.json())
                  .then(st => {
                    if (st==='message sent') {
                      this.setState(Object.assign(this.state.formInfo,{senderName:''}));
                      this.setState(Object.assign(this.state.formInfo,{senderEmail:''}));
                      this.setState(Object.assign(this.state.formInfo,{senderMsg:''}));
                      this.setState(Object.assign(this.state.errors,{emailError:''}));
                      this.setState(Object.assign(this.state.errors,{nameError:''}));
                      this.setState({msgSent:true});
                    }else{
                      alert('Repeat your message');
                    }
                  })
                  .catch(err => {
                  console.log('could not send your message');
                  })
    }
  }

  onEmailChange = (event) =>{
    this.setState(Object.assign(this.state.formInfo,{senderEmail:event.target.value}));
    if (this.state.msgSent) this.setState({msgSent:false});
  }

  onNameChange = (event) =>{
    this.setState(Object.assign(this.state.formInfo,{senderName:event.target.value}));
    if (this.state.msgSent) this.setState({msgSent:false});
  }

  onMsgChange = (event) =>{
    this.setState(Object.assign(this.state.formInfo,{senderMsg:event.target.value}));
    if (this.state.msgSent) this.setState({msgSent:false});
  }

  onMsgSend = () =>{
      const emailExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const nameExp = /^[A-Za-zА-ЩЬЮЯҐЄІЇа-щьюяґєії.'`'\s]+$/;
      const form = this.state;
       
        //Name field validation
      
      if (form.formInfo.senderName.length>0) {
          if (form.formInfo.senderName.search(nameExp) === 0){
              this.setState(Object.assign(form.errors,{nameError:''}));  
          }
          else {
              this.setState(Object.assign(form.errors,{nameError:'Name can include upper/lowercase letters,single qoute sign, \'.\' or space.'}));  
          }
      }
      else{
          this.setState(Object.assign(form.errors,{nameError:'Sorry, name field can\'t be empty'}));  
      }
       
        //Email field validation
      
      if (form.formInfo.senderEmail.length>0) {
          if (form.formInfo.senderEmail.search(emailExp) === 0){
              this.setState(Object.assign(form.errors,{emailError:''}));    
          }
          else {
              this.setState(Object.assign(form.errors,{emailError:'Sorry, invalid format here'}));    
          }
      }
      else{
          this.setState(Object.assign(form.errors,{emailError:'Sorry, email field can\'t be empty'}));    
        }    
  }

  render(){
      return(
        <div id='container'>
            <Navigation/>
            <main>
              <Introduction/>
              <Experience/>
              <Form
                onEmailChange={this.onEmailChange}
                onNameChange={this.onNameChange}
                onMsgChange={this.onMsgChange}
                messageSent={this.messageSent}
                errors={this.state.errors}
                formInfo={this.state.formInfo}
                msgSent={this.state.msgSent}
              />
            </main>
            <Footer/>

        </div>
      );
  }
}


export default App;
