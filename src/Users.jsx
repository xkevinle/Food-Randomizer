import React from 'react';
import {
  Routes, Route, useNavigate, Link,
} from 'react-router-dom';

function Api() {
  return (
    <>
      <h2>API PAGE</h2>
      <Link to="/">Home</Link>
    </>
  );
}

function Users() {
  const navigate = useNavigate();

  const navigateToApi = () => {
    navigate('/api', { replace: true });
  };

  return (
    <div>
      <p>THIS IS A USERS CONTAINER</p>
      <input placeholder="Enter name" />
      <button onClick={navigateToApi} type="button" className="userButton">Create User</button>
      <Routes>
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
  );
}

export default Users;
