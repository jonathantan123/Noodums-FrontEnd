import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
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
