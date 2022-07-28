/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('Click the button!');
  const [image, setImage] = useState('');

  const burgerImg = 'https://www.killingthyme.net/wp-content/uploads/2021/11/best-turkey-burger-recipe-5.jpg';
  const pizzaImg = 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg';
  const sushiImg = 'https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194';
  const ramenImg = 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg';
  const tacosImg = 'https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/26758383_132652547537383_6735866617280484038_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=973b4a&_nc_ohc=I0qHBDeR-e4AX_mIJe4&_nc_ht=scontent-hou1-1.xx&oh=00_AT_CrvMWLlVd8i5wIbfcm0O0O85fsF7UIqCHSljQpF5prA&oe=63074ED9';
  const wingsImg = 'https://img.buzzfeed.com/video-api-prod/assets/7def155256434be9ac01e752e1b79558/Facebook_Square.jpg';

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

  const deleteUser = (e) => {
    const id = e.target.value;
    fetch(`/api/${id}`, { method: 'DELETE' });
    const updatedUsers = users.filter((element) => element._id !== id);
    setUsers(updatedUsers);
  };

  const randomize = () => {
    const foodsArr = [];
    users.forEach((element) => {
      foodsArr.push(element.favFoods);
    });
    const commonElements = (args) => {
      const output = [];

      for (let i = 0; i < args[0].length; i += 1) {
        output.push(args[0][i]);

        for (let j = 1; j < args.length; j += 1) {
          if (!args[j].includes(output[output.length - 1])) output.pop();
        }
      }

      if (output.length === 0) return undefined;

      return output;
    };
    const commonFoods = commonElements(foodsArr);
    if (!commonFoods) setMessage('There are nothing in common :(');
    else {
      const selected = commonFoods[Math.floor(Math.random() * commonFoods.length)];
      setMessage(`How about some ${selected}?`);
      if (selected === 'Burgers') setImage(burgerImg);
      else if (selected === 'Pizza') setImage(pizzaImg);
      else if (selected === 'Sushi') setImage(sushiImg);
      else if (selected === 'Ramen') setImage(ramenImg);
      else if (selected === 'Tacos') setImage(tacosImg);
      else if (selected === 'Wings') setImage(wingsImg);
    }
  };

  return (
    <div>
      <Link to="/" className="backLink">
        <button type="button" className="btn-home">Back to home</button>
      </Link>
      <div>
        <h3>List of Users</h3>
        <div className="userContainer">
          {users.map((e) => (
            <article key={e._id} className="userBox">
              <ul>
                <h4>
                  {' '}
                  {`${e.firstName} ${e.lastName}`}
                </h4>
                <div className="foodBox">
                  {e.favFoods.map((f) => <li key={f.toString()} className="food">{f}</li>)}
                </div>
                <Link to="/update">
                  <button className="userBtn" type="button">Update food</button>
                </Link>
                <button className="userBtn" id="deleteBtn" type="button" value={e._id} onClick={deleteUser}>Delete User</button>
              </ul>
            </article>
          )) }
        </div>
      </div>
      <div className="randomBoxContainer">
        <article className="randomBox">
          <button type="button" className="randomBtn" onClick={randomize}>RANDOMIZE!</button>
          <div className="random-txt">{message}</div>
        </article>
        <div>
          <img className="img" alt="" src={image} />
        </div>
      </div>
    </div>
  );
}

export default Users;
