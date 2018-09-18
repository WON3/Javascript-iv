import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      count : 0
    }
  }

  add(num){
    this.setState({
      count: this.state.count + num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.count}
         <button onClick={()=>this.add(1)}>+1</button>
         <button onClick={()=>this.add.apply(this, [5])}>+5</button>
         <button onClick={()=>this.add.call(this, 10)}>+10</button>
        </p>
      </div>
    );
  }
}

export default App;
