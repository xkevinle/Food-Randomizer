import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/create"><button className="btn-home" type="button">Create User</button></Link>
      <Link to="/users"><button className="btn-home" type="button">Users</button></Link>
    </div>
  );
}

export default Home;
