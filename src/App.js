
import './App.scss';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Form from './components/Form/Form';

class App extends Component {


  render(){
      return(
        <div id='container'>
            <Navigation/>
            <main>
              <Introduction/>
              <Experience/>
              <Form/>
            </main>
            
            <Footer/>

        </div>
      );
  }
}


export default App;
