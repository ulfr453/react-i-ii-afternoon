import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardInfo from './Component/CardInfo';
import Button from './Component/Buttons';
import data from './data'


class App extends Component{
  constructor(){
    super()
    this.state= {
      data: data,
      index: 0,
      
    }

    this.handleNext= this.handleNext.bind(this)

    this.handlePrevious= this.handlePrevious.bind(this)

    
  }

  handleNext(){
    this.setState({index: this.state.index + 1})

  }

  handlePrevious(){
    this.setState({index: this.state.index - 1})

  
  }

  



  render(){

  return (
    <body>
        <header className= 'header'> 
          <div className= 'home'>Home</div>  
        </header>
        <div className="App">
            <CardInfo className= 'cardpg' card= {this.state.data[this.state.index]}  />
      

        </div>
        <div >
            <Button handleNext= {this.handleNext} handlePrevious= {this.handlePrevious} />
        </div>
    </body>
  );
}
}

export default App;
