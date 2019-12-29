import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import {withRouter} from 'react-router-dom'
import Navbar from './components/NavBar';

class App extends React.Component{

    render() {
      return( 
       

        <div className="Main-container">
              <Navbar/>
              <MainContainer/>
        </div>
      

      )
    }
}


export default App;
