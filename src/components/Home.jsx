import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const burgerImg = 'https://www.killingthyme.net/wp-content/uploads/2021/11/best-turkey-burger-recipe-5.jpg';
  const pizzaImg = 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg';
  const sushiImg = 'https://www.japan.go.jp/kizuna/_src/7989285/sushi_robots_01.jpg?v=1646641593194';
  const ramenImg = 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg';
  const tacosImg = 'https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/26758383_132652547537383_6735866617280484038_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=973b4a&_nc_ohc=I0qHBDeR-e4AX_mIJe4&_nc_ht=scontent-hou1-1.xx&oh=00_AT_CrvMWLlVd8i5wIbfcm0O0O85fsF7UIqCHSljQpF5prA&oe=63074ED9';
  const wingsImg = 'https://img.buzzfeed.com/video-api-prod/assets/7def155256434be9ac01e752e1b79558/Facebook_Square.jpg';

  return (
    <div>
      <Link to="/create"><button className="btn-home-create" type="button">Create User</button></Link>
      <Link to="/users"><button className="btn-home-users" type="button">Users</button></Link>
      <Link to="/update"><button className="btn-home-update" type="button">Update Users</button></Link>
      <div className="imgContainer">
        <img className="img" alt="" src={burgerImg} />
        <img className="img" alt="" src={pizzaImg} />
        <img className="img" alt="" src={sushiImg} />
        <img className="img" alt="" src={ramenImg} />
        <img className="img" alt="" src={tacosImg} />
        <img className="img" alt="" src={wingsImg} />
      </div>
    </div>
  );
}

export default Home;
