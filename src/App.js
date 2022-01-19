import React from 'react';
import './App.css';
import Activity from './components/Activity'

function App() {
  return (
    <div className="App">
      <div className='intro'>  
        <h1>Bored?</h1>
        <h2>Here's a fun activity to do:</h2>
      </div>
      <Activity/>
    </div>
  );
}

export default App;