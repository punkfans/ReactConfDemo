import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Hooks from './Hooks/hooks';
import { AppBar, Tabs, Tab, CircularProgress } from '@material-ui/core';
//import HugeComponent from './HugeComponent/hugeComponent';
import OffScreenRender from './OffScreenRender/offScreenRender';

const HugeComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  }).then(() => import('./HugeComponent/hugeComponent'));
});

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
        return (
          <Suspense fallback={<CircularProgress />}>
            <HugeComponent />
          </Suspense>
        );
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
          <Tab label="Hooks" />
          <Tab label="Huge Component" />
          <Tab label="Off Screen Render" />
        </Tabs>
      </AppBar>
      <div className="bodyContainer">
        { renderBody() }
      </div>
    </div>
  );
}

export default App;
