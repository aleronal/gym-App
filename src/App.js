import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import Header from './components/header/header.component';

import HomePage from './pages/homePage/homePage.component';
import User from './pages/User/user.component';
import WorkoutStart from './pages/workoutStart/workoutStart.component';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:user" element={<User />} />
          <Route path="/user/:user/workoutstarted" element={<WorkoutStart />} />
        </Routes>
    </div>
  );
}

export default App;
