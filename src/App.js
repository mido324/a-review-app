import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Route path="/" exact component = {home} />
       <Route path="/private"  component ={accountInfo} />
      </div>
    );
  }
}

export default App;
