import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectPage from './components/SelectPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SelectPage} /> {/* Render SelectPage when path is "/" */}
        <Route exact path="/chat/:id" component={ChatPage} /> {/* Route with parameter */}
      </Router>
    </div>
  );
}

export default App;
