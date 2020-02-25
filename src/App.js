import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keyboard from './components/Keyboard';

class App extends Component {
  constructor () {
    super();
    this.state = {
      result: ''
    };
  }

  onClick =button =>{
    if(button === "="){
      this.calculate()
    }


    else if(button === "c"){
      this.backspace()
    }

    else {
      this.setState({
                      result: this.state.result + button
                    })
    }
  };

  calculate = () => {
    try {
      this.setState({
                      result: (eval(this.state.result) || '') + ''
                    });
    } catch (e) {
      this.setState({});
    }
  };


  backspace = () =>{
    this.setState({
      result:this.state.result.slice(0, -1)
                  })
  };

  render () {
    return (

      <div className="container">
        <div className="calculatorContainer">
          <Result result={this.state.result}/>
          <Keyboard onClick={this.onClick}/>
        </div>
      </div>
    );
  }

}

export default App;
