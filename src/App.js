import React, { useState } from 'react';
import './App.css';
import Hooks from './Hooks/hooks';
import { AppBar, Tabs, Tab } from '@material-ui/core';

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
        return 'haha';
      case 2:
        return 'hoho';
    }
  };

  return (
    <div className="appContainer">
      <AppBar position="static">
        <Tabs value={tabVallue} onChange={changeTab}>
          <Tab label="Hooks" />
          <Tab label="Lazy Suspense" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      { renderBody() }
    </div>
  );
}

export default App;
