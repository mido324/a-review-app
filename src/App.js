import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import AccountInfo from './AcountInfo';
class App extends Component {
  render() {
    return (
      <div>
       <Route path="/" exact component = {Home} />
       <Route path="/private"  component ={AccountInfo} />
      </div>
    );
  }
}

export default App;
