import React, { Component } from 'react';
// import './App.css';
// import './css/materialize.css';
// import './css/style.css';
import MainComponent from './MainComponent';

class App extends Component {
  state = {
    value: "20",
  }
  changeHandler = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <MainComponent value={this.state.value} changeHandler={this.changeHandler} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
