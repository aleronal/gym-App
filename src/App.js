import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import Header from './components/header/header.component';

import HomePage from './pages/homePage/homePage.component';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
