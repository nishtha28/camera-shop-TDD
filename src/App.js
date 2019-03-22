import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cameraList:{}
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main cameraList = { this.state.cameraList}/>
        <Footer />
      </div>
    );
  }
}

export default App;
