import React, { Component } from 'react';
import './App.css';
import Demo from './demo'
import { Switch } from '@material-ui/core';
import DemoWithHooks from './demoWithHooks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUsingHook: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      isUsingHook: !this.state.isUsingHook,
    });
  }

  render() {
    const renderDemo = () => {
      if(this.state.isUsingHook) {
        return <DemoWithHooks />
      }

      return <Demo />
    };

    return (
      <div className="appContainer">
        <div>
          { renderDemo() }
          <Switch
            checked={this.state.isUsingHook}
            onChange={this.handleChange}
            value="checkedB"
            color="primary"
          />
        </div>
      </div>
    );
  }
}

export default App;
