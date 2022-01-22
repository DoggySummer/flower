import { React, useState } from 'react';
import './Cart.css';

const Cart = () => {
  
    return (
			<div className='background_img'>
				<div className='cart_background_center'>
					<h1 className='cart_title'>My Menu</h1>
					<div className='cart_box'>
            {/* 담은 메뉴 map 함수로 정렬 */}
					</div>
				</div>
			</div>
    );
};

export default Cart;