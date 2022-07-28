import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Test from './Test';

function Users() {
  const [users, setUsers] = useState([]);
  // const [userFetched, setUserFetched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const json = await response.json();
        // console.log(json);
        setUsers(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to="/" className="backLink">
        <button type="button" className="btn-home">Back to home</button>
      </Link>
      <div>
        <h3>List of Users</h3>
        <div className="userContainer">
          {users.map((e) => (
            <article key={e.id} className="userBox">
              <ul>
                <h4>
                  {' '}
                  {`${e.firstName} ${e.lastName}`}
                </h4>
                <div className="foodBox">
                  {e.favFoods.map((f) => <li className="food">{f}</li>)}
                </div>
                <button className="userBtn" type="button">Update food</button>
                <button className="userBtn" type="button">Delete User</button>
              </ul>
            </article>
          )) }
        </div>
      </div>
    </div>
  );
}

export default Users;
