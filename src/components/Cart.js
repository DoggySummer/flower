import { React, useState } from 'react';
import './Cart.css';
import {connect} from 'react-redux';

const Cart = (props) => {
  
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

function state를props화(state){
	return {
		state : state
	}
}

export default connect(state를props화)(Cart);