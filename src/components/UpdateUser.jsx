/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UpdateUser() {
  const [users, setUsers] = useState([]);
  const [favFoods, setFavFoods] = useState({});
  const [selectedUser, setSelectedUser] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const handleFoodsCheck = (e) => {
    const idx = e.target.value;
    const setNewFavFoods = { ...favFoods };
    if (setNewFavFoods[idx]) delete setNewFavFoods[idx];
    else setNewFavFoods[idx] = true;
    setFavFoods(setNewFavFoods);
  };

  const updateUser = () => {
    const foods = [];
    for (let i = 0; i < Object.keys(favFoods).length; i += 1) {
      foods.push(Object.keys(favFoods)[i]);
    }
    const body = {
      favFoods: foods,
    };

    fetch(`/api/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log('UpdateUser fetch /api/user: ERROR: ', err));
  };

  const handleOptions = () => {
    const id = document.getElementsByClassName('usersList')[0].value;
    let name;
    users.forEach((element) => {
      if (id === element._id) name = `${element.firstName} ${element.lastName}`;
    });
    setSelectedUser(name);
    setUserId(id);
  };

  console.log(userId);

  const list = [];
  users.forEach((element) => {
    list.push(<option className="usersOptions" key={element._id} value={element._id}>{`${element.firstName} ${element.lastName}`}</option>);
  });

  return (
    <div>
      <Link to="/" className="backLink">
        <button type="button" className="btn-home">Back to home</button>
      </Link>
      <div className="selectText">
        <select defaultValue="Select user to update" className="usersList" onChange={handleOptions}>
          <option disabled className="usersOptions">Select user to update</option>
          {list}
        </select>
      </div>
      <article className="updateBox">
        <div className="updateUser">
          <div>
            <h3>{`User selected: ${selectedUser}`}</h3>
          </div>
          <div className="favFoodBox">
            <span>Favorite Foods: </span>
            <ul>
              <label htmlFor="burgers">
                <input type="checkbox" name="burgers" value="Burgers" onChange={handleFoodsCheck} />
                Burgers
              </label>
            </ul>
            <ul>
              <label htmlFor="pizza">
                <input type="checkbox" name="pizza" value="Pizza" onChange={handleFoodsCheck} />
                Pizza
              </label>
            </ul>
            <ul>
              <label htmlFor="sushi">
                <input type="checkbox" name="sushi" value="Sushi" onChange={handleFoodsCheck} />
                Sushi
              </label>
            </ul>
            <ul>
              <label htmlFor="ramen">
                <input type="checkbox" name="ramen" value="Ramen" onChange={handleFoodsCheck} />
                Ramen
              </label>
            </ul>
            <ul>
              <label htmlFor="tacos">
                <input type="checkbox" name="tacos" value="Tacos" onChange={handleFoodsCheck} />
                Tacos
              </label>
            </ul>
            <ul>
              <label htmlFor="tacos">
                <input type="checkbox" name="wings" value="Wings" onChange={handleFoodsCheck} />
                Wings
              </label>
            </ul>
          </div>
          <Link to="/users">
            <button type="button" className="createBtn" onClick={updateUser}>Update</button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default UpdateUser;
