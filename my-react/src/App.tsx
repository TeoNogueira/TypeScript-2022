import React, { Component } from 'react';
import './App.css';
import Count from './components/Count'


class App extends Component {

  render() {

    return (

      <div className="App">

            <Count initValue={2000} />
            <Count initValue={0} />

      </div>

    )
  }
}


export default App;
