import React, { Component } from 'react';
import MainComponent from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <MainComponent />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

