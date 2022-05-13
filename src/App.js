import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name : 'Crystal'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1> hello </h1>
        <p>Hi {this.state.name}</p>
         <button> Change Name</button>
        </header>

      </div>
    );
  }

}

export default App;
