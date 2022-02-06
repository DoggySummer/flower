import { React, useState } from 'react';
import './Cart.css';
import {useSelector, useDispatch} from 'react-redux';

const Cart = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<div className='background_img'>
			<div className='cart_background_center'>
				<h1 className='cart_title'>My Menu</h1>

				{/* 테이블 시작 */}
				<div className='cart_box'>
					{/* 담은 메뉴 map 함수로 정렬 */}
					<div className='cart_table'>
						<div className='table_header'>
							<div className='header-img'>이미지</div>
							<div className='header-name'>상품정보</div>
							<div className='header-quan'>수량</div>
							<div className='header-total'>총 금액</div>
							<div className='header-button'>수량</div>
						</div>

						{state.map((a,i)=>{
          	return (
							<div key={i}>
							{
							state[i].quan > 0 &&
							<div>
								<div className='inner_table'>
								<div className='inner_table-img'><img src={state[i].front_Image}></img></div>
								<div className='inner_table-name'>{state[i].name}</div>
								<div className='inner_table-quan'>{state[i].quan}</div>
								<div className='inner_table-price'>{state[i].price*state[i].quan}</div>
									<div className='inner_table-button'>
										<button className='cart_increase' onClick={()=>dispatch(({type: "ADD"}))}>+</button>
										<button className='cart_decrease'onClick={()=>dispatch(({type: "MINUS"}))}>-</button>
									</div>
								</div>
							</div>
							}
							</div>
						)})}
					</div>
					<div className='total'>총 금액은 
					{
				state[0].price*state[0].quan +
				state[1].price*state[1].quan +
				state[2].price*state[2].quan +
				state[3].price*state[3].quan +
				state[4].price*state[4].quan +
				state[5].price*state[5].quan +
				state[6].price*state[6].quan +
				state[7].price*state[7].quan +
				state[8].price*state[8].quan +
				state[9].price*state[9].quan +
				state[10].price*state[10].quan +
				state[11].price*state[11].quan
				}
					원 입니다</div>
				</div>
			</div>
		</div>
	);
};



// if(props.state[i].quan > 0)
// {
// 	return
// <td><img src={props.state[i].front_Image} className='aaa'></img></td>
// <td>{props.state[i].name}</td>
// <td>{props.state[i].quan}</td>
// <td>{props.state[i].price*props.state[i].quan}</td>
// </tr>;
// }
// else { return null;}
// )})}


						{/* <tr>
							<td><img src={props.state[0].front_Image} className='aaa'></img></td>
							<td>{props.state[0].name}</td>
							<td>{props.state[0].quan}</td>
							<td>{props.state[0].price*props.state[0].quan}</td>
							<td>
								<button className='cart_increase' onClick={()=>{props.dispatch({type: 'add_0'})}}>+</button>
								<button className='cart_decrease'onClick={()=>{props.dispatch({type: 'minus'})}}>-</button>
							</td>
						</tr> */}
// function statementff(state){
// 	return {
// 		state: state
// 	}
// }
// 						export default connect(statementff)(Cart);

export default Cart;