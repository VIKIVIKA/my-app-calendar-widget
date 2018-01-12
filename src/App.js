import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarDefault from './components/CalendarDefault.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noOfDays: this.getNumberOfDays(new Date().getFullYear(), new Date().getMonth(), 0),
      counter: new Date().getMonth(),
      curMonth: new Date().getMonth()
    }
  }

  componentWillMount(){
    this.setState({noOfDays: this.getNumberOfDays(new Date().getFullYear(), this.state.curMonth, 0)})
  }
  getNumberOfDays(year, month, c){
    return new Date(year, month, c).getDate()
  }
  nextDate(){
    this.setState({
      counter: this.state.counter+1,
      curMonth: this.state.curMonth+1
    })
  }
  prevDate(){
    this.setState({
      counter: this.state.counter-1,
      curMonth: this.state.curMonth-1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CalendarDefault
          nextDate = {()=>this.nextDate()}
          curMonth = {this.state.curMonth}
          noofDays = {this.getNumberOfDays(new Date().getFullYear(), this.state.counter+1, 0)}
          prevDate = {()=>this.prevDate()}
        />
      </div>
    );
  }
}

export default App;
