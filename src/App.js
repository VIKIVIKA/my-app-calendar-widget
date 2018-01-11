import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarDefault from './components/CalendarDefault.jsx'

class App extends Component {
  nextDate(a,b,c){
    alert(new Date(c, b, a).getDate());
  }
  prevDate(a,b,c){
    alert(new Date(c, b, a).getDate());
  }
  render() {
    let date = new Date();
    let monthStrMap = {'0': 'January', '1': 'February', '2': 'March', '3': 'April', '4': 'May', '5': 'June', '6': 'July', '7': 'August', '8': 'September'
    , '9': 'October', '10': 'November', '11': 'December'};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CalendarDefault
          nextDate = {()=>this.nextDate(0,2,2015)}
          curMonth = {monthStrMap[date.getMonth()]}
          prevDate = {()=>this.prevDate(0,2,2015)}
        />
      </div>
    );
  }
}

export default App;
