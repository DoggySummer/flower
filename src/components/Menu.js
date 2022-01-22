import { React, useState } from 'react';
import './Menu.css';
import data from './data/data.json';
import {connect} from 'react-redux';


const Menu = (props) => {
	let [tea, setTea] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
	
		return (
			<div className='background_img'>
				<div className='menu_background_center'>
					<h1 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h1>
					<button onClick={()=> props.dispatch({type: 'add_1'})}> + </button>
					<div className='menu_box'>
				{console.log(props.state[0].name)}

			{props.state.map(function(a, i ){
			return (
			<div className='menu_item' key="{ i }">
				<div className='menu_img'>
					<img src='./images/1.png' className='img_front'></img>
					<img src='./images/5.png' className='img_back'></img>
				</div>
				<div className='meu_description'>
					<h3>{ a.name }</h3>	
					<div className='AddToCart'>Add to Cart</div> 
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