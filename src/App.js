import React from 'react';
import './App.css';
import SimpleTable from './SimpleTable';
import Graph from './SimpleLineChart';
import SimpleTabs from './tabs';

function App() {
  return (
    <div className="App">
      <SimpleTabs />
      {/* <SimpleTable />
      <Graph /> */}
    </div>
  );
}

export default App;
