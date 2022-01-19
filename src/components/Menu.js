import { React, useState } from 'react';
import './Menu.css';
import data from './data/data.json';


const Menu = () => {
	let [tea, setTea] = useState(['루이보스', '얼그레이', '민트']);
	{console.log(data);}
    return (
			<div className='background_img'>
				<div className='menu_background_center'>
					<h1 className='menu_title'>SHOP SINGAPORE'S FINEST TEA SELECTIONS</h1>
					<div className='menu_box'>

					{data.data.map(function(item,i){
					<div className='menu_item' key={ { i } }>
					{/* <img src={item[i].front_image} className='img_front' />
					<img src={item[i].back_image} className='img_back' /> */}
					<h3>{ item[i].title }</h3>	
					<p>{ item[i].price }</p>	
					<div className='AddToCart'>Add to Cart</div> 
					</div>
				})
			}




			{/* {tea.map(function(a, i){
			return (
			<div className='menu_item' key="{i}">
				<img src='./images/1.png' className='img_front'></img>
				<img src='./images/5.png' className='img_back'></img>
				<h3>{ a }</h3>	
				<div className='AddToCart'>Add to Cart</div> 
			</div>)
			}) */}

					</div>
				</div>
			</div>
    );
					
		};

export default Menu;    