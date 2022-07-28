import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <div>
      <h1>Welcome to Food Randomizer</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreateUser />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
