import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
      <div className='background_center'>
        <h2 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h2>
        <div className='menu_box'>
          <div className='menu_item'>
            <img src='./images/1.png'></img>
            <div></div>  
          </div>
          <div className='menu_item'><img src='./images/2.png'></img></div>
          <div className='menu_item'><img src='./images/3.png'></img></div>
          <div className='menu_item'><img src='./images/4.png'></img></div>
          <div className='menu_item'><img src='./images/5.png'></img></div>
          <div className='menu_item'><img src='./images/6.png'></img></div>
        </div>
      </div>
    );
};

export default Menu;    