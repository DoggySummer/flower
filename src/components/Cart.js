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
					<table>
						<tr>
							<th>이미지</th>
							<th>상품정보</th>
							<th>수량</th>
							<th>금액</th>
							<th>취소</th>
						</tr>

						<tr>
							<td><img src={props.state[0].front_Image} className='aaa'></img></td>
							<td>{props.state[0].name}</td>
							<td>{props.state[0].quan}</td>
							<td>{props.state[0].price}</td>
							<td><button>취소</button></td>
						</tr>

						<tr>
							<td><img src={props.state[1].front_Image} className='aaa'></img></td>
							<td>{props.state[1].name}</td>
							<td>{props.state[1].quan}</td>
							<td>{props.state[1].price}</td>
							<td><button>취소</button></td>
						</tr>
					</table>

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