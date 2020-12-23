import React, { Component } from 'react';
import News from "./News/News"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Crypto Current</h1>
        </header>
      <div className="feed">
       <News/>
       </div>
      </div>
    );
  }
}

export default App;
