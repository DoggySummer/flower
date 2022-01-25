import { React, useState } from 'react';
import './Menu.css';
import {connect} from 'react-redux';


const Menu = (props) => {
	
		return (
			<div className='background_img'>
				<div className='menu_background_center'>
					<h1 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h1>
					<div className='menu_box'>

			{props.state.map(function(a,i){
			return (
			<div className='menu_item' key="{i}">
				<div className='menu_img'>
					<img src={props.state[i].front_Image} className='img_front'></img>
					<img src={props.state[i].back_Image} className='img_back'></img>
				</div>
				<div className='menu_description'>
					<h3>{a.name}</h3>	
					<div className='AddToCart' onClick={()=>props.dispatch({type: `add_`+i})}>Add to Cart</div> 
				</div>
			</div>)
			})}
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
		
		export default connect(state를props화)(Menu);