import React, { useState } from 'react';
import './App.css';
import Hooks from './Hooks/hooks';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HugeComponent from './HugeComponent/hugeComponent';
import OffScreenRender from './OffScreenRender/offScreenRender';

function App() {

  const [tabVallue, setTabValue] = useState(0);
  const changeTab = (event, value) => {
    setTabValue(value);
  };

  const renderBody = () => {
    switch (tabVallue) {
      case 0:
        return <Hooks />;
      case 1:
        return <HugeComponent />;
      case 2:
        return <OffScreenRender />;
      default:
        return null;
    }
  };

  return (
    <div className="appContainer">
      <AppBar position="static">
        <Tabs value={tabVallue} onChange={changeTab}>
          <Tab label="React Hooks" />
        </Tabs>
      </AppBar>
      <div className="bodyContainer">
        { renderBody() }
      </div>
    </div>
  );
}

export default App;
