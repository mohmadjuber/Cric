import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom' 
import AppRoutes from './Component/AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
        </header>
      </div>
    </Router>
  );
}

export default App;
