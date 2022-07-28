import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

function CreateUser() {
  const [firstName, firstNameOnChange] = useInput('');
  const [lastName, lastNameOnChange] = useInput('');
  const [favFoods, setFavFoods] = useState({});

  const handleFoodsCheck = (e) => {
    const idx = e.target.value;
    const setNewFavFoods = { ...favFoods };
    if (setNewFavFoods[idx]) delete setNewFavFoods[idx];
    else setNewFavFoods[idx] = true;
    setFavFoods(setNewFavFoods);
  };

  const saveUser = () => {
    const foods = [];
    for (let i = 0; i < Object.keys(favFoods).length; i += 1) {
      foods.push(Object.keys(favFoods)[i]);
    }
    const body = {
      firstName,
      lastName,
      favFoods: foods,
    };
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('CreateUser fetch /api/user: ERROR: ', err));
  };

  return (
    <div>
      <Link to="/" className="backLink">
        <button type="button" className="btn-home">Back to home</button>
      </Link>
      <article className="createBox">
        <div className="createUser">
          <div>
            <span>First Name: </span>
            <input className="createInput" name="first" placeholder="Billy" value={firstName} onChange={firstNameOnChange} />
          </div>
          <div>
            <span>Last Name: </span>
            <input className="createInput" name="last" placeholder="Bob" value={lastName} onChange={lastNameOnChange} />
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
              <label htmlFor="burgers">
                <input type="checkbox" name="tacos" value="Tacos" onChange={handleFoodsCheck} />
                Tacos
              </label>
            </ul>
          </div>
          <Link to="/users">
            <button type="button" className="createBtn" onClick={saveUser}>Create</button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default CreateUser;
