import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom' 
import AppRoutes from './Component/AppRoutes';
import { DataProvider } from './Component/DataContext';
import './App.css';
import playersData from './Utils/calculations';
const data = playersData;
function App() {
  return (
    <Router>
      <DataProvider value={data}>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
        </header>
      </div>
      </DataProvider>
    </Router>
  );
}

export default App;
