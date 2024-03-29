import { React, useState } from 'react';
import './Menu.css';
import {useSelector,useDispatch} from 'react-redux';


const Menu = () => {
		const state = useSelector(state => state);
		const dispatch = useDispatch();

		const addCart = (idx) => {
			dispatch({type : 'INCREMENT', idx})
			console.log(state)
		}

		return (
			<div className='background_img'>
				<div className='menu_background_center'>
					<h1 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h1>
					<div className='menu_box'>

			{state.map((_,i) => {
			return (
			<div className='menu_item' key={i}>
				<div className='menu_img'>
					<img src={state[i].front_Image} className='img_front'></img>
					<img src={state[i].back_Image} className='img_back'></img>
				</div>
				<div className='menu_description'>
					<h3>{state[i].name}</h3>	
					<div className='AddToCart' onClick={addCart}>Add to Cart</div> 
				</div>
			</div>)
			})}
					</div>
				</div>
			</div>
    );
	};

		
	
		export default Menu;
