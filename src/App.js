import React, { Component } from 'react';

import { Icon } from 'antd-mobile';
import logo from './svgfolder/logo.svg';
import './App.css';
import scan from './svgfolder/scan.svg';

class App extends Component {
  render() {
    console.log('logo', logo);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="123" />
          {/* <img src={scan} className="App-logo" /> */}
          {/* <Icon type={require('./svgfolder/logo.svg')} /> */}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Icon type={require('./svgfolder/scan.svg')} />
        <Icon type={require('./svgfolder/map.svg')} color="red" />
        <Icon type="check" />
        <Icon type="question-circle" />
        <Icon type="user" />
        <Icon type={require('./svgfolder/personal-center.svg')} />
        <Icon type={require('./svgfolder/personal-center-blue.svg')} />
        <div>women</div>
        <Icon type="question-circle" />
        <img src={scan} alt="" />
      </div>
    );
  }
}

export default App;
