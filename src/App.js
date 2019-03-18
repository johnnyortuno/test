import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title'

import  NavBar  from './components/NavBar'
import  BoxList  from './components/BoxList'
class App extends Component {
  render() {
    return (
      <div>
          <NavBar mobile={false} Texto={'Viajar es la guita Mejor invertida'}/>
          <BoxList/>
      </div>
    );
  }
}

export default App;
