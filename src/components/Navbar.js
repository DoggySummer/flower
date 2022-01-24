import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from  "@fortawesome/free-solid-svg-icons";
import {faAlignJustify} from  "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = (props) => {
  {console.log(window.outerWidth)}
  const menuToggle = () => {
    if(ulAppear == 1){
			document.querySelector('.header').style.height = '265px';
			document.querySelector('.header > ul').style.display = 'block';
			if (window.matchMedia >'901px') {
				document.querySelector('.header > ul').style.display = 'flex';
				document.querySelector('.header').style.height = '100px';
			}
			if (window.matchMedia < '900px') {
				document.querySelector('.header > ul').style.display = 'block';
				document.querySelector('.header').style.height = '265px';
			}
			setUlAppear(2);
		}
		else if(ulAppear == 2){
			document.querySelector('.header').style.height = '100px';
			document.querySelector('.header > ul').style.display = 'none';
			setUlAppear(1);
		}
  }
  const [ulAppear,setUlAppear] = useState(1);
  return (
    <div>
      <header className='header'> 
        <div className='logo'>
					<Link to="/" className='LinkHome'><img src='./images/SOF-logo.png' /></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="icons">
        <Link to="/Cart" className='icon_cart'>
          <button className='icon_1'>
            <FontAwesomeIcon icon={ faShoppingCart } className='cart_icon'/>
          </button>
        </Link>
          <button className='icon_2' onClick={menuToggle}>
            <FontAwesomeIcon icon={ faAlignJustify } className='mediaMenu'/>
          </button> 
          </div>
      </header>
      <div className='empty' />
    </div>
  )
}
export default Navbar;
