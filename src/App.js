import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}
}

export default App;
