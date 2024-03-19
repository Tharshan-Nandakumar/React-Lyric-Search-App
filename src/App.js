import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
//	900a86b72e736e60a11a0f18c98b5f15

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Index />} />
            </Routes>
          </div>
        </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App
