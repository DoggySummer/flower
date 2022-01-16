import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
			<div className='background_img'>
				<div className='menu_background_center'>
					<h1 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h1>
					<div className='menu_box'>
						<div className='menu_item'>
							<img src='./images/1.png' className='img_front'></img>
							<img src='./images/5.png' className='img_back'></img>
							<h3>first product</h3>	
							<div className='AddToCart'>Add to Cart</div>  
						</div>
					</div>
				</div>
			</div>
    );
};

export default Menu;    